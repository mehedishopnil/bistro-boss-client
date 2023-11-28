import React from "react";

const Cover = ({img, header, subHeader}) => {
  return (
    <div>
      <div
        className="hero min-h-screen z-0"
        style={{
          backgroundImage:
            `url(${img})`,
        }}
      >
        <div className="hero-content w-8/12 text-center text-neutral-content px-10 py-20 bg-[#00000073] z-10">
          <div className="flex flex-col items-center justify-center text-white z-20">
            <h1 className="mb-5 text-5xl font-bold font-[Cinzel]">{header}</h1>
            <p className="mb-5 text-sm font-[Inter]">{subHeader}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
