import React from "react";
import Heading from "../common/heading/Heading";
import JobCard from "../jobs/JobCard";

const Hprice = () => {
  return (
    <>
      <section className="hprice padding">
        <Heading
          subtitle="Technologies"
          title="Technologies to Get a job in 2024"
        />
        <div className="price container grid">
          <JobCard />
        </div>
      </section>
    </>
  );
};

export default Hprice;
