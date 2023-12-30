import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ManageItems = () => {
  const [menu] = useMenu();

  return (
    <div className="w-full ">
      <Helmet>
        <title>Bistro | Manage Items</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div>
        <SectionTitle
          heading="Manage All Items"
          subHeading="---- Let's Manage Them ----"
        ></SectionTitle>
      </div>

      

      
        <div className="overflow-x-auto px-10">
        <div className="flex justify-between font-bold font-[Cinzel] uppercase gap-10 my-5">
        <h1 className="text-3xl">Total Items: </h1>
        {/* <Link to="/checkout">
          <button className="btn bg-[#D1A054] text-white hover:bg-[#c39043]">
            PAY
          </button>
        </Link> */}
      </div>

          <table className="table">
            {/* Table Head */}
            <thead className="uppercase text-sm rounded font-bold mt-10 text-white bg-[#D1A054] overflow-hidden">
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              <tr>

                <td>{ + 1}</td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="" alt="Product Image" />
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <div>
                    <div className="font-bold">name</div>
                    <div className="text-sm opacity-50">email</div>
                  </div>
                </td>

                <td>price</td>

                <td>
                  <button className="btn btn-md text-xl text-white bg-[#D1A054] hover:bg-[#c79548]">
                    <FaRegEdit></FaRegEdit>
                  </button>
                </td>

                <td>
                  <button className="btn btn-md text-xl text-white bg-[#B91C1C] hover:bg-[#931616]">
                  <RiDeleteBin6Fill />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default ManageItems;
