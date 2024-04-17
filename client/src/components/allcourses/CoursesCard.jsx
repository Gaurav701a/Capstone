import React, { useState } from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";
import Heading from "../common/heading/Heading";

const CoursesCard = () => {
  const [courseInfoPopupVisible, setCourseInfoPopupVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setCourseInfoPopupVisible(true);
  };

  return (
    <>
      <section className="coursesCard">
        <Heading title="Some of our trending Courses" />
        <div className="container grid2">
          {coursesCard.map((val) => (
            <div className="items" key={val.id}>
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                </div>
                <div className="text">
                  <h1>{val.coursesName}</h1>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label htmlFor="">(5.0)</label>
                  </div>
                  <div className="details">
                    {val.courTeacher.map((details, index) => (
                      <div className="box" key={index}>
                        <div className="dimg">
                          <img src={details.dcover} alt="" />
                        </div>
                        <div className="para">
                          <h4>{details.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="price">
                <h3> {val.priceAll}</h3>
              </div>
              <button
                className="outline-btn"
                onClick={() => handleEnrollClick(val)}
              >
                Explore !
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Course Info Popup */}
      {courseInfoPopupVisible && (
        <div
          className="popup"
          style={{
            background: "#f9f9f9",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div className="popup-content">
            <h2 style={{ color: "#333", fontFamily: "Arial, sans-serif" }}>
              {selectedCourse?.coursesName}
            </h2>
            <p
              style={{
                color: "#555",
                fontFamily: "Verdana, sans-serif",
                fontSize: "16px",
                marginTop: "12px",
              }}
            >
              <b>Course Description:</b> {selectedCourse?.priceAll}
            </p>
            <p
              style={{
                color: "#555",
                fontFamily: "Verdana, sans-serif",
                fontSize: "16px",
              }}
            >
              {/* Duration: {selectedCourse?.duration} */}
            </p>
            <section style={{ marginTop: "20px" }}>
              <h3 style={{ color: "#333", fontFamily: "Arial, sans-serif" }}>
                Let's Get Started
              </h3>
              <div
                className="module-buttons"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <button
                  style={{
                    background: "#007bff",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Module 1
                </button>
                <button
                  style={{
                    background: "#28a745",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Module 2
                </button>
                <button
                  style={{
                    background: "#dc3545",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Module 3
                </button>
                <button
                  style={{
                    background: "#ffc107",
                    color: "#000",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Module 4
                </button>
                <button
                  style={{
                    background: "#17a2b8",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Module 5
                </button>
                <button
                  style={{
                    background: "#6c757d",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Module 6
                </button>
              </div>
            </section>
            <p
              style={{
                color: "#777",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                marginTop: "20px",
              }}
            >
              “Continuous learning is the minimum requirement for success in any
              field.”
            </p>
            <button
              className="close-button"
              style={{
                background: "#dc3545",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
              }}
              onClick={() => setCourseInfoPopupVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CoursesCard;
