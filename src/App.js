import React, { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner"

function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category,setCategory] = useState(filterData[0].title)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log("hello");
        const res = await fetch(apiUrl);
        console.log("Waiting..");
        const output = await res.json();
        console.log(output);
        setCourses(output.data);
        console.log(output.data);
      }


      catch (error) {
        toast.error("Something went Wrong");
        console.log("Error");
      }
      setLoading(false);
    }

    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-blue-200">
      <div>
        <Navbar />
      </div>

      <div className="">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>


    </div>
  );
}
export default App;
