import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({ courses, likedCourses, setLikedCourses }) => {

  const clickHandler = () => {
    if (likedCourses.includes(courses.id)) {
      // Already liked, so remove it
      setLikedCourses(prev => prev.filter(cid => cid !== courses.id));
      toast.warning("Like removed");
    } else {
      // Not liked, so add it
      setLikedCourses(prev => [...prev, courses.id]);
      toast.success("Liked");
    }
  };

  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden text-white bg-opacity-80">
      <div className="relative rounded-lg">
        <img src={courses.image?.url} alt={courses.title} />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-4 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
           {
            likedCourses.includes(courses.id)?( <FcLike fontSize="1.75rem" />) : ( <FcLikePlaceholder fontSize="1.75rem" />)
           }
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{courses.title}</p>
        <p className="mt-2 text-white">{
        courses.description.length>100 ? (courses.description.substr(0,100)+"...") : (courses.description)
        }</p>
      </div>
    </div>
  );
}

export default Card;
