
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="flex flex-col items-center text-center pb-10">
            <p className="font-semibold py-5 text-[#D99904]">{subHeading}</p>
            <h2 className="flex justify-center text-2xl p-5 text-semibold border-y-2 w-1/5">{heading}</h2>
        </div>
    );
};

export default SectionTitle;