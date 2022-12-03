import React, { useEffect, useState } from "react";
import "./Carousal.css";

const Carousal = ({ images }) => {
  const [translateValue, setTranslateValue] = useState(0);
  const totalImages = images?.length - 1;

  useEffect(() => {
    const timerId = setInterval(() => {
      setTranslateValue((prevVal) => (prevVal / totalImages !== 100 ? prevVal + 100 : 0));
    }, 3000);

    return () => clearInterval(timerId);
  }, [translateValue, totalImages]);

  return (
    <div className="container">
      <div className="carousal">
        {totalImages &&
          images.map((image) => {
            return (
              <img
                key={image.id}
                style={{
                  transition: "all 1s ease-in-out",
                  display: "block",
                  width: "100%",
                  borderRadius: "5px",
                  transform: `translateX(${-translateValue}%)`,
                }}
                src={image.src}
                alt={image.description}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Carousal;
