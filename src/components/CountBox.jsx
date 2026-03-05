import React from "react";
import Container from "./Container";

const CountBox = ({ countTotal, ticketTotal, resolvedTotal }) => {
  return (
    <Container>
      {/* 2 gap-[24px] my-10*/}

      <div className="bg-[#f5f5f5] grid grid-cols-1 md:grid-cols-2 gap-6 my-[40px]">
        {/* h-[250px] items-center justify-center*/}

        <div className="rounded-md p-1 bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)]   text-center text-white ">
          {/* w-full h-full */}
          <div className="w-full h-full bg-[url(./assets/vector1.png),url(./assets/vector2.png)] bg-contain rounded-lg bg-position-[left,right] bg-no-repeat p-20 space-y-2  ">
            <h3>In-Progress</h3>
            <h1 className="font-bold text-4xl">{ticketTotal}</h1>
          </div>
        </div>

        {/* flex items-center justify-center flex-col */}
        <div className="rounded-md text-white p-1 bg-gradient-to-r from-[rgba(84,207,104,1)] to-[rgba(0,130,122,1)] text-center">
          <div className="w-full h-full bg-[url(./assets/vector1.png),url(./assets/vector2.png)] bg-contain rounded-lg bg-position-[left,right] bg-no-repeat p-20 space-y-2 ">
            <h3>Resolved</h3>

            <h1 className="font-bold text-4xl">{resolvedTotal}</h1>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CountBox;
