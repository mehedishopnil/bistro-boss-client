import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";

const AddItem = () => {
  return (
    <div className="w-full">
      <div>
        <SectionTitle
          heading="Add an Item"
          subHeading="What's New?"
        ></SectionTitle>
      </div>

      <div className="grid justify-center items-center">
        <form className="w-full  space-y-3">
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
                <span className="label-text font-bold">Category*</span>
              </div>
              <select className="select select-bordered">
                <option disabled selected>
                  Category
                </option>
                <option>Dessert</option>
                <option>Pizza</option>
                <option>Salads</option>
                <option>Soups</option>
                <option>Drinks</option>
              </select>
            </label>

            <label className="">
              <div className="label">
                <span className="label-text font-bold ">Price*</span>
              </div>
              <input
                type="number"
                placeholder="Recipe name"
                className="input input-bordered "
              />
            </label>
          </div>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              className="textarea textarea-bordered w-[500px] h-[250px]"
              placeholder="Recipe Details"
            ></textarea>
          </label>


          <label className="form-control flex items-start">
            <div className="label">
              <span className="label-text font-bold">Choose File</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered "
            />
          </label>
          <button type="submit" className="btn text-lg rounded-none text-white bg-gradient-to-r from-[#835D23] to-[#B58130]">Add Item <ImSpoonKnife /></button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
