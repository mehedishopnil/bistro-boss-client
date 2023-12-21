import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
  const { user } = useAuth();
  const token = localStorage.getItem('access-token')
  const [axiosSecure] = useAxiosSecure();
  console.log('user in cart',user?.email);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?email=${user.email}`); // Use axiosSecure as a function
      console.log('res from axios', res);
      return res.data;
    },
    // queryFn: async () => {
    //   const res = await axiosSecure.get(`/cart?email=${user.email}`,{
    //     headers:{
    //       authorization: `bearer ${token}`
    //     }
    //   }); // Use axiosSecure as a function
    //   console.log('res from axios', res);
    //   return res.data;
    // },
  });

  return [cart, refetch];
};

export default useCart;
