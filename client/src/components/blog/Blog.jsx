import React, { useState } from "react";
import Back from "../common/back/Back";
import { tech } from "../../dummydata";
import "./blog.css";

const Blog = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (tech) => {
    setSelectedTech(tech);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Back title="Skills to get a job in 2024" />

      <section className={`blog padding ${showModal ? "blur-background" : ""}`}>
        <div className="container grid2">
          {tech.map((val, index) => (
            <div
              className="items shadow"
              key={index}
              onClick={() => handleCardClick(val)}
            >
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <div className="text">
                <div className="admin flexSB">
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-comments"></i>
                    <label htmlFor="">{val.com}</label>
                  </span>
                </div>
                <h1>{val.title}</h1>
                <p>{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showModal && selectedTech && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="modal-content">
              <div className="modal-body">
                <div className="img">
                  <img src={selectedTech.cover} alt="" />
                </div>
                <div className="text">
                  <div className="admin flexSB">
                    <span>
                      <i className="fa fa-user"></i>
                      <label htmlFor="">{selectedTech.type}</label>
                    </span>
                    <span>
                      <i className="fa fa-calendar-alt"></i>
                      <label htmlFor="">{selectedTech.date}</label>
                    </span>
                    <span>
                      <i className="fa fa-comments"></i>
                      <label htmlFor="">{selectedTech.com}</label>
                    </span>
                  </div>
                  <h1>{selectedTech.title}</h1>
                  <p>{selectedTech.desc}</p>
                  <div className="links">
                    <h2>Links:</h2>
                    <ul>
                      <li>
                        <a
                          href={selectedTech.blogLink1}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Blog 1
                        </a>
                      </li>
                      <li>
                        <a
                          href={selectedTech.blogLink2}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Blog 2
                        </a>
                      </li>
                      <li>
                        <a
                          href={selectedTech.docsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href={selectedTech.resourcesLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          External Resources
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
