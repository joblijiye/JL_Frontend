import React from 'react';
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className=" flex justify-center ">
      <div className="  w-auto bg-white shadow-xl rounded-full flex items-center justify-center p-4">
        <CiSearch size={24} />

        <div className='w-24 ml-2'>
          <input
            type="text"
            className="  rounded-full pl-1 focus:outline-none"
            placeholder="Enter skills /"
          />
        </div>



        <div className='w-24'>

          <input
            type="text"
            className="  rounded-full pl-1 focus:outline-none"
            placeholder="designation /"
          />
        </div>


        <div className='w-24'>
          <input
            type="text"
            className="  rounded-full pl-1 focus:outline-none"
            placeholder="companies"
          />

        </div>
        <span>|</span>


        <select className="focus:outline-none ml-3 mr-2">

          <option className='text-gray-400' value='Select experience'>Select experience </option>
          <option>frasher</option>
          <option>1 year</option>
          <option>2 yeare</option>
          <option>3 yeare</option>
          <option>4 yeare</option>
          <option>5+ yeare</option>
        </select>

        <span>|</span>
        <input
          type="text"
          className=" focus:outline-none ml-2"
          placeholder="Enter Location"
        />
        <button className="text-white bg-[#4763E0] rounded-full px-2 py-2 ">Continue</button>
      </div>
    </div>
  );
}

export default SearchBar;
