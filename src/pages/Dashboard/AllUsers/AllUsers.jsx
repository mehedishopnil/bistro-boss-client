import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaUserShield } from "react-icons/fa";
import { RiDeleteBin6Line, RiAdminFill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  // Fetch users data using react-query
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res.data);
      if (!res) {
        throw new Error("Failed to fetch users");
      }
      return res.data;
    },
  });

  // Handle making a user an admin
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // Handle deleting a user
  //TODO: HandleDelete function needed to complete the work
  const handleDelete = (user) => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          // Assuming the user is removed from the users array in the state
          // Update the UI, for example:
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          throw new Error("Failed to delete user");
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle error, for example show an error message
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to delete the user",
        });
      });
  };

  return (
    <div className="w-3/4 card bg-base-100 shadow-xl p-10">
      <Helmet>
        <title>Bistro | AllUsers</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h2 className="text-xl font-semibold font-[Cinzel] pb-5">
        Total User: {users.length}
      </h2>

      <div>
        <div className="overflow-x-auto">
          <table className=" table table-zebra">
            {/* Table Head */}
            <thead className="text-sm bg-[#D1A054] text-white ">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Table Body */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>
                    {user.role === "admin" ? (
                      <span className="text-blue-800">
                        {user.email} <div className="text-green-500">(Admin)</div>
                      </span>
                    ) : (
                      <span>{user.email}</span>
                    )}
                  </td>
                  <td className="text-2xl">
                    {user.role === "admin" ? (
                      <button className="p-2 rounded-lg text-lg text-green-700 bg-[#D1A054] hover:bg-[#c29045]">
                        <RiAdminFill />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="p-2 rounded-lg text-lg text-white bg-[#D1A054] hover:bg-[#c29045]"
                      >
                        <FaUserShield />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="p-2 rounded-lg text-lg text-white bg-[#B91C1C] hover:bg-[#931616]"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
