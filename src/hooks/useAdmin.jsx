import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
const [axiosSecure] = useAxiosSecure();
// use axios secure with react query
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    loading: !loading,
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        console.log('is admin response', res);
        return res.data.admin;
      } catch (error) {
        console.error('Error checking admin status:', error);
        throw error;
      }
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
