// components/Loading.tsx
import Header from "@/Components/Header/Header";
import React from "react";


const Loading = () => {
  return (
    <>
      <Header />
      <div className="h-[90vh] inset-0 flex items-center justify-center bg-[#121824] bg-opacity-80 z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid"></div>
      </div>
   
    </>
  );
};

export default Loading;
