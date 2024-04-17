import React, { useState } from "react";
import Back from "../common/back/Back";
import JobCard from "./JobCard";
import ReactLoading from "react-loading";
import "./job.css";
import Faq from "./Faq";
import Select from "react-select";

const JobPage = () => {
  const jobOptions = [
    { value: "software_engineer", label: "Software Engineer" },
    { value: "web_developer", label: "Web Developer" },
    { value: "data_scientist", label: "Data Scientist" },
    { value: "network_administrator", label: "Network Administrator" },
    { value: "systems_analyst", label: "Systems Analyst" },
    { value: "mobile_app_developer", label: "Mobile App Developer" },
    { value: "database_administrator", label: "Database Administrator" },
    { value: "frontend_developer", label: "Frontend Developer" },
    { value: "backend_developer", label: "Backend Developer" },
    { value: "full_stack_developer", label: "Full Stack Developer" },
  ];

  const jobDates = [
    { value: "all", label: "All" },
    { value: "today", label: "Today" },
    { value: "3days", label: "3 Days Ago" },
    { value: "week", label: "Week Ago" },
    { value: "month", label: "Month Ago" },
  ];

  const [selectedJobOptions, setSelectedJobOptions] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [experience, setExperience] = useState("");
  const [selectedDate, setSelectedDate] = useState(jobDates[0].value);
  const [isLoading, setIsLoading] = useState(false);

  const handleExperienceChange = (value) => {
    setExperience(value);
  };
  const handleJobOptionsChange = (selectedOptions) => {
    // console.log(selectedOptions, "sel");
    setSelectedJobOptions(selectedOptions);
  };

  const handleSearch = async () => {
    setIsLoading(true);
    const selectedValues = selectedJobOptions.map((option) => option.value);
    const jobQuery = selectedValues.join(", ");
    const locationQuery = "Hyderabad, India";

    const jobTitles = selectedValues.join(", ");
    console.log(jobQuery, "jobquery");
    console.log(experience, "experience");
    console.log(jobTitles, "jobtitle");
    console.log(selectedDate, "selectedDate");
    const apiKey = "5ebd07a0aamshb662da8d1d36162p15e894jsn1c31be194973";
    const apiUrl = "https://jsearch.p.rapidapi.com/search";
    const headers = {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    };

    const params = {
      query: `${jobQuery} in ${locationQuery}`,

      num_pages: 3,

      date_posted: selectedDate,
    };

    const queryString = Object.entries(params)
      .map(
        ([key, value]) =>
          value && `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .filter(Boolean)
      .join("&");

    try {
      const response = await fetch(`${apiUrl}?${queryString}`, {
        method: "GET",
        headers: headers,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setJobData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDateChange = (selectedOption) => {
    const selectedDate = selectedOption.value;
    setSelectedDate(selectedDate);
  };

  return (
    <>
      <Back title="Find Your Job" />
      <section className="price padding">
        <div className="search-container">
        <p className="big-font tle">Search for Your Job</p>
          <div className="search-box-container">
            <label className="search-label">Job Interests:</label>
            <Select
              className="search-box"
              isMulti
              options={jobOptions}
              value={selectedJobOptions}
              onChange={(selectedOptions) =>
                handleJobOptionsChange(selectedOptions)
              }
            />
          </div>

          <div className="search-box-container">
            <label className="search-label">Job Posted Date:</label>
            <Select
              className="search-box"
              options={jobDates}
              onChange={handleDateChange}
              value={jobDates.find((option) => option.value === selectedDate)}
            />
          </div>

          <div className="search-box-container">
            <label className="search-label">Location:</label>
            <Select className="search-box" />
          </div>

          <div className="search-box-container">
            <label className="exp-label">Experience (Years):</label>
            <input
              type="number"
              className="experience-input"
              placeholder="Enter experience in years"
              onChange={(e) => handleExperienceChange(e.target.value)}
            />
          </div>

          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>

        {isLoading ? (
          <ReactLoading type={"spin"} color={"#000"} height={50} width={50} />
        ) : (
          <>
            {jobData && jobData.data ? (
              <JobCard jobData={jobData.data} />
            ) : (
              <div className="no-results-text">
                {/* <p className="big-font">Search for Your Job</p> */}
              </div>
            )}
          </>
        )}
      </section>
      <Faq />
    </>
  );
};

export default JobPage;
