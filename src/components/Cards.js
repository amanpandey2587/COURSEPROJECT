import React from 'react'
import Card from './Card'
import { useState } from 'react';
const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);


    let allCourses=[];
    const getCourses=()=>{

   if (category === "All") {
      // Parsing over the entire array to get all courses
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
    }
     else {
      // Return only the courses in the selected category
      allCourses = courses[category] || [];
    }

    return allCourses;
  };


  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
      getCourses().map((courses)=>{
       return <Card key={courses.id} courses={courses} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
      })
      }
    </div>
  )
}

export default Cards
