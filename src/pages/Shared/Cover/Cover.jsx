import { Parallax } from "react-parallax";

const Cover = ({ img, header, subHeader }) => {
  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={img}
      bgImageStyle={{ width: "1920px", height: "800px" }}
      bgImageAlt="the menu"
      strength={-300}
    >
      <div className="flex flex-col items-center justify-center h-[500px] ">
        <div className=" w-8/12 text-center text-neutral-content px-10 py-20 bg-[#00000073]">
          <div className="flex flex-col space-y-3 items-center justify-center text-white">
            <h1 className="text-5xl font-bold font-[Cinzel]">{header}</h1>
            <p className="text-sm font-[Inter]">{subHeader}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
