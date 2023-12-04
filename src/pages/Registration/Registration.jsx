import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImg from "../../assets/others/authentication.png";
import formImg from "../../assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from 'sweetalert2'




const Registration = () => {
  const [isRegistrate, setIsRegistrate] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors },reset} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser (data.name, data.email, data.password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      // Reset the form after successful submission
      setIsRegistrate(true);
      reset();

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Registration Successful",
        showConfirmButton: false,
        timer: 1500
      });

      if(isRegistrate){
        navigate(location.state.from.pathname);
      }
      else{
        navigate('/');
      }
    })

    .catch((error) => {
      // Handle any errors here
      console.error("Error during user creation:", error);
    });
    
  }
  

  


  // const handleRegistration = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.email.value;
  //   createUser(name, email, password).then((result) => {
  //     const user = result.user;
  //     console.log(user);
  //   });
  // };
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
            <h1 className="text-center text-2xl font-bold pt-4">
              Register Now
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="input your name"
                  {...register("name",{ required: true })}
                  name="name"
                  className="input input-bordered"
                />
                {errors.name && <span className="text-red-600">your name is required*</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email",{ required: true })}
                  name="email"
                  className="input input-bordered"
                />
                {errors.email && <span className="text-red-600">email is required*</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password",{ required: true })}
                  name="password"
                  className="input input-bordered"
                />
                {errors.password && <span className="text-red-600">password is required*</span>}
                
     
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn bg-[#D1A054] text-white hover:bg-[#b18441]"
                />

              </div>
              <p className="text-center">
                Already have Account? Please{" "}
                <Link to={"/login"} className="font-bold text-[#D1A054]">
                  Login
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

export default Registration;
