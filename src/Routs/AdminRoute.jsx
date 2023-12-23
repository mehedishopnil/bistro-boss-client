import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()

    if(loading || isAdminLoading){
        return <div className="w-auto h-[300px] flex justify-center items-center"><progress className="  progress  w-[300px]"></progress></div>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to={'/'} state={{from:location}} replace></Navigate>
};

export default AdminRoute;