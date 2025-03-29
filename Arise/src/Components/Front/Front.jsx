import React, { useEffect, useRef } from "react";
import "./Front.css";

const Front = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log("Autoplay blocked:", error));
    }
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay loop muted>
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <p>Welcome to <span>Arise - Working Solutions</span>, where innovation meets excellence. We are committed to delivering top-quality solutions tailored to your unique needs, helping you achieve growth and success. With a passion for excellence and a customer-centric approach, we provide reliable, efficient, and cutting-edge services. </p>
      </div>
    </div>
  );
};

export default Front;
