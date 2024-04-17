import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import DomainCourses from "./DomainCourses"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <DomainCourses />
      <CoursesCard />
    </>
  )
}

export default CourseHome
