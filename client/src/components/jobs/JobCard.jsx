import React from "react";
import { jobDetails } from "../../jobDummy";
import "./jobc.css";

const JobCard = ({ jobData }) => {
  const MAX_WORDS_TO_DISPLAY = 30;
  function truncateDescription(description) {
    const words = description.split(" ");

    if (words.length > MAX_WORDS_TO_DISPLAY) {
      const truncatedText = words.slice(0, MAX_WORDS_TO_DISPLAY).join(" ");
      return `${truncatedText}...`;
    }

    return description;
  }
  console.log(jobData, "job");
  return (
    <>
      <div className="job-container job-grid">
        {jobData?.map((val, index) => (
          <div className="custom-card" key={index}>
            <div className="custom-header">
              <span className="custom-icon">
                <img
                  src={val.employer_logo}
                  alt="Company Logo"
                  className="custom-logo"
                />
              </span>
              <p className="custom-alert">{val.job_title}</p>
            </div>

            <p className="custom-message">
              {truncateDescription(val.job_description)}
            </p>

            <div className="custom-actions">
              <a
                className="custom-read"
                target="_blank"
                rel="noopener noreferrer"
                href={val.job_apply_link}
              >
                Apply
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default JobCard;
