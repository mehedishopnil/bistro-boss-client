import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn, facebookLogIn} = useContext(AuthContext);
    const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleSignIn()
        .then( result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);

            const saveUser = { name: loggedInUser.displayName , email: loggedInUser.email };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
      .then (res => res.json())
      .then(() =>{
            navigate(from, { replace: true });
      })
            
        })         
    }

    

    const handleFacebookLogin = () => {
        facebookLogIn()
        .then ( result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, {replace: true });
        })
    }

    

    return (
        <div>
            <div className="divider">OR</div>
            <div className="flex justify-center gap-5">
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline"><FaGoogle></FaGoogle></button>
                <button onClick={handleFacebookLogin} className="btn btn-circle btn-outline"> <FaFacebook></FaFacebook></button>
            </div>
            
        </div>
    );
};

export default SocialLogin;