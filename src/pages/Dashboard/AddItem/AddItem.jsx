import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset 
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0])

    fetch(img_hosting_url,{
        method: 'POST',
        body: formData
    } )
    .then(res => res.json())
    .then(imgResponse => {
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {name, price, category, recipe} = data;
            const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
            console.log(newItem);
            axiosSecure.post('/menu', newItem)
            .then(data =>{
                console.log('after posting new menu item,', data.data);
                if(data.data.insertedId){
                  reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Item's added successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
    })
  };

  return (
    <div className="w-full">
      <div>
        <SectionTitle
          heading="Add an Item"
          subHeading="What's New?"
        ></SectionTitle>
      </div>

      <div className="grid justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full  space-y-3">
          <label className="">
            <div className="label">
              <span className="label-text font-bold ">Recipe name*</span>
            </div>
            <input
              type="text"
              placeholder="Recipe name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-[500px] "
            />
          </label>

          <div className="flex gap-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-bold">Category*</span>
              </div>
              <select
                defaultValue="Pick One"
                {...register("category", { required: true })}
                className="select select-bordered"
              >
                <option disabled>Pick One</option>
                <option>dessert</option>
                <option>pizza</option>
                <option>salad</option>
                <option>soups</option>
                <option>drinks</option>
                <option>deshi</option>
              </select>
            </label>

            <label className="">
              <div className="label">
                <span className="label-text font-bold ">Price*</span>
              </div>
              <input
                type="number"
                {...register("price", { required: true })}
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
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered w-[500px] h-[250px]"
              placeholder="Recipe Details"
            ></textarea>
          </label>

          <label className="form-control flex items-start">
            <div className="label">
              <span className="label-text font-bold">Choose File</span>
            </div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered "
            />
          </label>
          <button
            type="submit"
            className="btn text-lg rounded-none text-white bg-gradient-to-r from-[#835D23] to-[#B58130]"
          >
            Add Item <ImSpoonKnife />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
