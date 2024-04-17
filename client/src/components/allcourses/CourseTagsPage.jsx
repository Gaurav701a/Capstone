import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Back from "../common/back/Back";
import { coursesCard2 } from "../../dummydata";
import "./courses.css";

const CourseItem = ({ val, handleEnrollClick }) => {
  return (
    <div className="items" key={val.id}>
      <div className="content flex">
        <div className="left">
          <div className="img">{/* <img src={val.cover} alt="" /> */}</div>
        </div>
        <div className="text">
          <h1>{val.coursesName}</h1>
          <div className="rate">
            {[...Array(5)].map((_, index) => (
              <i key={index} className="fa fa-star"></i>
            ))}
            <label htmlFor="">(5.0)</label>
          </div>
          <div className="details">
            {val.courTeacher.map((details, index) => (
              <div className="box" key={index}>
                <div className="dimg">
                  {/* <img src={details.dcover} alt="" /> */}
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
        <h3> {val.priceAll} </h3>
      </div>
      <button className="outline-btn" onClick={() => handleEnrollClick(val)}>
        Explore !
      </button>
    </div>
  );
};

const CourseTagsPage = () => {
  const [courseInfoPopupVisible, setCourseInfoPopupVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setCourseInfoPopupVisible(true);
  };

  const { domain } = useParams();

  const renderCourseItems = (start, end) => {
    return coursesCard2
      .slice(start, end)
      .map((val) => (
        <CourseItem val={val} handleEnrollClick={handleEnrollClick} />
      ));
  };

  return (
    <>
      <Back title="Explore Courses" />
      <div>
        <h1
          style={{
            background: "linear-gradient(to right, #1eb2a6, #ffffff)",
            color: "#fff",
            padding: "20px 0",
            margin: "0",
            fontSize: "2.5em",
            textAlign: "center",
          }}
        >
          Courses for {domain}:
        </h1>

        <section className="coursesCard">
          <div className="container grid2">
            {domain === "UI" && renderCourseItems(0, 6)}
            {domain === "Art & Design" && renderCourseItems(6, 12)}
            {domain === "Computer Science" && renderCourseItems(12, 18)}
            {domain === "History & Archeologic" && renderCourseItems(18, 24)}
            {domain === "Software Engineering" && renderCourseItems(24, 30)}
            {domain === "Information Software" && renderCourseItems(30, 36)}
            {domain === "Health & Fitness" && renderCourseItems(36, 42)}
            {domain === "Marketing" && renderCourseItems(42, 48)}
            {domain === "Graphic Design" && renderCourseItems(48, 54)}
            {domain === "Music" && renderCourseItems(54, 60)}
            {domain === "Business Administration" && renderCourseItems(60, 66)}
            {domain === "Web Management" && renderCourseItems(66, 72)}
            {/* Add more conditions for other domains */}
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
              <section style={{ marginTop: "20px" }}>
                <h3 style={{ color: "#333", fontFamily: "Arial, sans-serif" }}>
                  Let's Get Started
                </h3>
                <div
                  className="module-buttons"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {[...Array(6)].map((_, index) => {
                    let backgroundColor;
                    switch (index) {
                      case 1:
                        backgroundColor = "#28a745"; // Module 2
                        break;
                      case 2:
                        backgroundColor = "#dc3545"; // Module 3
                        break;
                      case 3:
                        backgroundColor = "#ffc107"; // Module 4
                        break;
                      case 4:
                        backgroundColor = "#17a2b8"; // Module 5
                        break;
                      case 5:
                        backgroundColor = "#6c757d"; // Module 6
                        break;
                      default:
                        backgroundColor = "#007bff"; // Module 1
                        break;
                    }
                    return (
                      <button
                        key={index}
                        style={{
                          background: backgroundColor,
                          color: "#fff",
                          border: "none",
                          padding: "10px 20px",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Module {index + 1}
                      </button>
                    );
                  })}
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
                “Continuous learning is the minimum requirement for success in
                any field.”
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
      </div>
    </>
  );
};

export default CourseTagsPage;
