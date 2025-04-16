import { useEffect, useState } from "react";
import "../../assets/style/StarrySky.css";

const StarrySky = ({ numStars = 100 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: numStars }).map((_, i) => ({
      id: i,
      top: Math.random() * 100, // porcentagem
      left: Math.random() * 100, // porcentagem
      size: Math.random() * 2 + 1, // px
      duration: Math.random() * 40 + 20, // segundos
      delay: Math.random() * 20, // segundos
      opacity: Math.random() * 0.5 + 0.5,
    }));
    setStars(generatedStars);
  }, [numStars]);

  return (
    <div className="starry-container">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default StarrySky;
