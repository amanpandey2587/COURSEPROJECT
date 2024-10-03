import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { apiUrl, filterData } from "./data";
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const [category,setCategory]=useState(filterData[0].title);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const output = await res.json();
        setCourses(output.data); // Save data into the state
      } 
      catch (error) {
        toast.error("Something went wrong");
        console.log("Error occurred:", error);
      }
      finally {
        setLoading(false); // Stop loading after data is fetched or an error occurs
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);

  return (
    <div className="min-h-[100vh] overflow-x-hidden flex flex-col bg-bgDark2">
      <NavBar />
      <Filter filterData={filterData}
      category={category}
      setCategory={setCategory}
      />
     <div className="w-11/12 max-w-[1220px] mx-auto flex
     justify-center flex-wrap items-center min-h-[50vh]">
            {loading ? ( 
        <Spinner/>  // Show a loading message while fetching data
      ) : (
        <Cards courses={courses} category={category} />
      )}
      </div>
    </div>
  );
}

export default App;
