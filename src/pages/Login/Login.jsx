import { Link } from "react-router-dom";
import bgImg from "../../assets/others/authentication.png";
import formImg from "../../assets/others/authentication2.png";
import {
  
  LoadCanvasTemplate, loadCaptchaEnginge,
  
} from "react-simple-captcha";
import { useEffect } from "react";

const Login = () => {
    useEffect (()=>{
        loadCaptchaEnginge(6);
    },[])
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
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                <label ><LoadCanvasTemplate /></label>
              <input
                  type="password"
                  className="input input-bordered"
                  required
                />
                
              </div>

              

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login  "
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
