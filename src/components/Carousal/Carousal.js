import React, { useEffect, useState } from "react";
import "./Carousal.css";

const Carousal = ({ images, classes }) => {
  const [translateValue, setTranslateValue] = useState(0);
  const totalImages = images?.length - 1;

  useEffect(() => {
    const timerId = setInterval(() => {
      setTranslateValue((prevVal) => (prevVal / totalImages !== 100 ? prevVal + 100 : 0));
    }, 3000);

    return () => clearInterval(timerId);
  }, [translateValue, totalImages]);

  return (
    <div className={"carousal " + classes}>
      {totalImages &&
        images.map((image, index) => {
          return (
            <img
              key={index}
              style={{
                transition: "all 1s ease-in-out",
                display: "block",
                width: "100%",
                borderRadius: "5px",
                transform: `translateX(${-translateValue}%)`,
              }}
              src={image}
              alt="campaign"
            />
          );
        })}
    </div>
  );
};

export default Carousal;
