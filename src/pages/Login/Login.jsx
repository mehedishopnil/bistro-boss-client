import { Link, unstable_HistoryRouter, useLocation, useNavigate } from "react-router-dom";
import bgImg from "../../assets/others/authentication.png";
import formImg from "../../assets/others/authentication2.png";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from 'sweetalert2'



const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login (email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Successfully Logged In ",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      form.reset();
      setIsLoggedIn(true)

      if(isLoggedin ){
        navigate(location.state.form.pathname);
      }
      else {
        navigate('/');
      }
    })
    .catch((error)=> {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong Email or Password",
        footer: "Please enter correct Email or Password"
      });
    
    })
  }

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
      alert("captcha des't match ");
    }
  };
  
  return (
    <div
      className=" flex justify-center items-center h-[700px]  bg-base-100"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div
        className="hero w-9/12 h-auto p-10 shadow-2xl rounded bg-base-200"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-center text-2xl font-bold pt-4">LogIn</h1>

            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-[#D1A054]"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="">
                <label className="text-[#D1A054]">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  placeholder="type the captcha"
                  className="input input-bordered w-full"
                  required
                />

              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login  "
                  disabled={disabled}
                  className="btn bg-[#D1A054] text-white hover:bg-[#b18441]"
                />
              </div>
              <p>
                Do not have Account? Please{" "}
                <Link to={"/registration"} className="font-bold text-[#D1A054]">
                  Register
                </Link>
              </p>
            </form>
          </div>

          <div className="text-center lg:text-left">
            <img src={formImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
