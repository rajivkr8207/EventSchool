import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Workshop = () => {
  const data = [
    { id: 1, title: "Introduction to AI", category: "AI" },
    { id: 2, title: "React JS Basics", category: "React JS" },
    { id: 3, title: "Advanced Data Science", category: "Data Sci..." },
    { id: 4, title: "Web Development with HTML", category: "Web Development" },
    { id: 5, title: "Machine Learning Techniques", category: "AI" },
    { id: 6, title: "Advanced Data Science 2 ", category: "Data Sci" },
  ];
  const data2 = [
    { id: 1, title: "Introduction to AI", category: "AI" },
    { id: 2, title: "React JS Basics", category: "React JS" },
  ];
  const [filteredData, setFilteredData] = useState(data);

  const filterAll = () => {
    setFilteredData(data);
  };

  const filterDataScience = () => {
    const filtered = data.filter((item) => item.category === "Data Sci...");
    setFilteredData(filtered);
  };

  const filterAI = () => {
    const filtered = data.filter((item) => item.category === "AI");
    setFilteredData(filtered);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center text-5xl font-bold my-3">Workshop</h1>
        <div className="text-center mb-5">
          <div className="bg-[#050f137a] rounded-full relative inline-block py-1 lg:w-[30%] w-[90%]">
            <div className="flex justify-between">
              <input
                type="text"
                className="px-5 w-full bg-transparent text-white outline-none placeholder:text-white"
                placeholder="Search Here"
              />
              <button className="px-2 border-l border-slate-500 my-auto pt-1">
                <FaSearch className="text-lg my-auto text-[#666666]" />
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto lg:px-8 px-0">
          <div className="flex  mb-6 lg:text-2xl text-lg border-b border-white">
            <button
              className="px-4 py-2 border-r border-white  text-center cursor-pointer"
              onClick={filterAll}
            >
              All
            </button>
            <button
              className="px-4 py-2 border-r border-white  text-center cursor-pointer"
              onClick={filterAI}
            >
              AI
            </button>
            <button
              className="px-4 py-2 border-r border-white  text-center cursor-pointer"
              onClick={filterDataScience}
            >
              Data Science
            </button>
          </div>

          <div className="lg:mx-0 flex justify-between lg:text-2xl text-lg ">
            <h1>Upcoming </h1>

            {/* <h1>Filter</h1> */}
          </div>
          {/* <div className="w-[18rem] h-[10rem] bg-[#BA2727] relative rounded-lg ">
    <div className="absolute top-[-1rem] left-[2rem] w-[45%] bg-[#E11515] h-[2rem] rounded-lg shadow-black shadow-md text-2xl px-3"> AI mL</div>

    </div> */}
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 my-5  border-b border-white py-3">
            {filteredData.map((item) => (
              <li key={item.id} className="  shadow-md mx-auto ">
                <div className="w-[18rem] h-[10rem] bg-gradient-to-r from-[#BA2727] to-black relative rounded-lg py-8 px-3">
                  <div className="absolute top-[-1rem] left-[2rem] w-[45%] bg-[#E11515] h-[2rem] rounded-lg shadow-black shadow-md text-2xl px-3 overflow-hidden">
                    {item.category}
                  </div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-white">{item.category}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* this is the recorded section  */}
      <div className="container mx-auto lg:px-8 px-0">
        <div className="lg:mx-0 flex justify-between lg:text-2xl text-lg uppercase">
          <h1>recorded </h1>

          {/* <h1>Filter</h1> */}
        </div>

        <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 my-5   py-3">
          {data2.map((item) => (
            <li key={item.id} className="  shadow-md mx-auto">
              <div className="w-[18rem] h-[10rem] bg-gradient-to-r from-[#2b7012] to-black relative rounded-lg py-8 px-3">
                <div className="absolute top-[-1rem] left-[2rem] w-[45%] bg-[#E11515] h-[2rem] rounded-lg shadow-black shadow-md text-2xl px-3 overflow-hidden">
                  {item.category}
                </div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-white">{item.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Workshop;
