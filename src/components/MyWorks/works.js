import React from "react";
import './works.css';
import Pill from '../../assets/pillpal.png';
import Hotel from '../../assets/hotel-icon.png';
import Car from '../../assets/car.webp';

const Works = () => {
  
  const showAlert = (message) => {
    alert(message);
  }

  return (
    <section id='works'>
      <h2 className="workTitle">My Projects</h2>
      <div className="container">
        <div className="box-container">
          <div className="box" id="box_1">
            <img src={Hotel} alt="Hotel Management System" />
            <h3>Hotel Management System</h3>
            <p>A simple hotel management system designed in C++.</p>
            <button onClick={() => showAlert("This is a hotel management system designed in C++.")} className="btn" id="hotelbutton">Read More</button>
          </div>
          <div className="box" id="box_2">
            <img src={Pill} alt="PILLPAL" />
            <h3>PILLPAL</h3>
            <p>A simple medication reminder app</p>
            <button onClick={() => showAlert("This is a medication management app called PILLPAL.")} className="btn" id="pillbutton">Read More</button>
          </div>
          <div className="box" id="box_3">
            <img src={Car} alt="License Tracker" />
            <h3>License Tracker</h3>
            <p>A camera that collects license plate data</p>
            <button onClick={() => showAlert("This is a license plate tracker project that collects license plate data via a camera.")} className="btn" id="carbutton">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
