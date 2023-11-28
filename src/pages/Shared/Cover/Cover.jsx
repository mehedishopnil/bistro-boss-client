import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, header, subHeader }) => {
  return (
    <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-300}
    >
        <div>
      <div
        className="hero min-h-screen z-0"
      >
        <div className="hero-content w-8/12 text-center text-neutral-content px-10 py-20 bg-[#00000073] z-10">
          <div className="flex flex-col space-y-3 items-center justify-center text-white z-20">
            <h1 className=" text-5xl font-bold font-[Cinzel]">{header}</h1>
            <p className=" text-sm font-[Inter]">{subHeader}</p>
          </div>
        </div>
      </div>
    </div>
    </Parallax>

    
  );
};

export default Cover;
