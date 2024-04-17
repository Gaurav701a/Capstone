import React from "react";
import { Link } from "react-router-dom";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";

const DomainCourses = () => {
  return (
    <section className='online'>
      <div className='container'>
        <Heading subtitle='DOMAINS' title='Browse courses in your domain' />
        <div className='content grid3'>
          {online.map((val, index) => (
            <div className='box' key={index}>
              <Link to={`/courses/${val.courseName}`}>
                <div className='img'>
                  <img src={val.cover} alt={val.courseName} />
                  <img src={val.hoverCover} alt={val.courseName} className='show' />
                </div>
                <h1>{val.courseName}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainCourses;
