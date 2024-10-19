import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth-Provider/AuthProvider";
import { toast } from "react-toastify";
import { MdErrorOutline } from "react-icons/md";
import classNames from "classnames";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("create user successfully !");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something is Wrong Please check your email & password !");
      });
  };

  return (
    <div className="lg:w-1/2 border-4 mx-auto p-10 my-32 rounded-xl">

      <Helmet>
        <title>Good Homes | Login</title>
      </Helmet>

      <h1 className="text-center font-bold text-3xl text-black pb-4">This is LogIn Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto py-5">
        <label className="text-xl font-semibold my-3">Email</label>
        <div className="relative">
          <input
            className={classNames("w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none",{"is-invalid":errors.email})}
            type="email"
            name="email"
            placeholder="Enter Your email"
            {...register("email", { required: true })}
          />
          <MdErrorOutline className={classNames("error", { "error-icon": errors.email })}></MdErrorOutline>
        </div>
        {errors.email && <span className="text-red-600 mb-3 text-xl font-semibold">This field is required</span>}
        <br />
        <div className="relative">
          <label className="text-xl font-semibold py-3">Password</label>
          <input
            className={classNames("w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none",{"is-invalid":errors.password})}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <MdErrorOutline className={classNames("error", { "error-icon": errors.password })}></MdErrorOutline>
          {errors.password && <span className="text-red-600 mb-3 text-xl font-semibold">This field is required</span>}
          <span onClick={() => setShowPassword(!showPassword)} className="text-2xl absolute right-3 top-12">
            {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </span>
          <br />
        </div>
        <div className="flex items-center py-4 pb-5">
          <p className="text-xl font-semibold hover:underline">Forget Password</p>
        </div>
        <button className="w-full h-16 text-xl font-bold btn btn-outline btn-primary">LogIn</button>
      </form>
      <p className="text-xl font-bold mx-auto">
        New Here?{" "}
        <Link className="text-blue-700" to="/register">
          Please Register Now
        </Link>
      </p>
      <h3 className="text-center text-2xl font-bold pt-8 divider">continue with </h3>
      <div className="flex justify-around py-5">
        <button onClick={googleLogin} className="flex mx-3 btn btn-outline text-lg">
          <FaGoogle></FaGoogle>Google
        </button>
        <button onClick={githubLogin} className="flex mr-3 btn btn-outline btn-neutral text-lg">
          <FaGithub size={24}></FaGithub>Github
        </button>
      </div>
    </div>
  );
};

export default Login;
