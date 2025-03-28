
// MovieCrew.jsx
import React from "react";
import { Group, MovieOutlined, Person } from "@mui/icons-material";
import { MovieInfo } from "@/lib/types";

export function MovieCrew({ movieinfo }:{movieinfo:MovieInfo}) {
  return (
    <div className="mt-12">
      <div className="mb-8">
        <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-200 mb-4">
          <MovieOutlined/>
          کارگردان</h3>
        <div className="flex gap-4">
          {movieinfo.crew.director.map((director, index) => (
            <span
              key={index}
              className="bg-[#1D1D1D] text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <Person fontSize="small" />
              {director.name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-200 mb-4">
          <Group/>
          بازیگران</h3>


          
        <div className="flex flex-wrap gap-4">
          {movieinfo.cast.map((writer, index) => (
            <span
              key={index}
              className="bg-[#1D1D1D] text-white text-sm px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <Person fontSize="small" />
              {writer.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}