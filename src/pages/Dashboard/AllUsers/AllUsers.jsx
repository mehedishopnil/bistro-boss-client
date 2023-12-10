import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { RiDeleteBin6Line } from "react-icons/ri";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      return res.json();
    },
  });

  const handleDelete = (user) => {};

  return (
    <div className="card bg-base-100 shadow-xl p-10">
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
            {/* head */}
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
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>Blue</td>
                  <td>
                    <button
                      onClick={() => handleDelete()}
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
