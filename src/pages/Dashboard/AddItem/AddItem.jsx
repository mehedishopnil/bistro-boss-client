import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItem = () => {
  return (
    <div className="w-full">
      <div>
        <SectionTitle
          heading="Add an Item"
          subHeading="What's New?"
        ></SectionTitle>
      </div>

      <div className="flex items-center">
        <form className="w-full flex flex-col items-center space-y-3">
          <label className="">
            <div className="label">
              <span className="label-text font-bold ">Recipe name*</span>
            </div>
            <input
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-[500px] "
            />
          </label>

          <div className="flex gap-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-bold">
                Category*
                </span>

              </div>
              <select className="select select-bordered">
                <option disabled selected>
                  Category
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </label>

            <label className="">
              <div className="label">
                <span className="label-text font-bold ">Price*</span>
              </div>
              <input
                type="text"
                placeholder="Recipe name"
                className="input input-bordered "
              />
            </label>
          </div>

          <label className="">
            <div className="label">
              <span className="label-text font-bold ">Recipe Details*</span>
            </div>
            <input
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-[500px] h-[250px] "
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
