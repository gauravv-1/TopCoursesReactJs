import { useState } from "react";
import Card from "./Card";


const Cards = (props) => {
let courses = props.courses;
let category = props.category;




  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    let allCourses = [];
    if (props.category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    }

    else if(props.category==="Liked"){
      return likedCourses;
    }
    else{
      //pass array of only specific category
      return courses[category];

    }


    
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
      ))}
    </div>
  );
};

export default Cards;
