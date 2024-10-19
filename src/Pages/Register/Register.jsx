import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Auth-Provider/AuthProvider";
import classNames from "classnames";
import { toast } from "react-toastify";
import PasswordChecklist from "react-password-checklist";
import { MdErrorOutline } from "react-icons/md";
import "./Register.css";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("create user successfully !");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("User Have Already !");
      });
  };

  return (
    <div className="lg:w-1/2 border-4 mx-auto p-10 my-32 rounded-xl">
        <Helmet>
        <title>Good Homes | Register</title>
      </Helmet>
      <h1 className="text-center font-bold text-3xl text-black pb-4">This is Register Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto py-5 space-y-3">
        <label htmlFor="fullName" className="text-xl font-semibold my-3">
          Name
        </label>
        <div className="relative">
          <input
            className={classNames("w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none", {
              "is-invalid": errors.fullName,
            })}
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter Your name"
            {...register("fullName", {
              required: "This field is required",
              minLength: {
                value: 4,
                message: "Name at list 4 characters",
              },
            })}
          />
          <MdErrorOutline className={classNames("error", { "error-icon": errors.fullName })}></MdErrorOutline>
        </div>
        {errors.fullName && <span className="text-red-600 mb-3 text-xl font-semibold">{errors.fullName.message}</span>}
        <br />
        <label className="text-xl font-semibold my-3">Photo Url</label>
        <div className="relative">
          <input
            className={classNames("w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none", {
              "is-invalid": errors.photoUrl,
            })}
            type="text"
            name="photoUrl"
            placeholder="Enter Your photo link (small-link)"
            {...register("photoUrl", { required: true })}
          />
          <MdErrorOutline className={classNames("error", { "error-icon": errors.photoUrl })}></MdErrorOutline>
        </div>
        {errors.photoUrl && <span className="text-red-600 mb-3 text-xl font-semibold">This field is required</span>}
        <br />
        <label className="text-xl font-semibold my-3">Email</label>
        <div className="relative">
          <input
            className={classNames("w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none", {
              "is-invalid": errors.email,
            })}
            type="email"
            name="email"
            placeholder="Enter Your email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Enter your valid email address",
              },
            })}
          />
          <MdErrorOutline className={classNames("error", { "error-icon": errors.email })}></MdErrorOutline>
        </div>
        {errors.email && <span className="text-red-600 mb-3 text-xl font-semibold">{errors.email.message}</span>}
        <br />
        <div className="relative">
          <label className="text-xl font-semibold py-3">Password</label>
          <input
            className={classNames("w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none", {
              "is-invalid": errors.password,
            })}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onClick={(e) => setPassword(e.target.value)}
            {...register("password", {
              required: "This field is required",
              pattern: {
                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                message:
                  "password contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters",
              },
            })}
          />
          <MdErrorOutline className={classNames("error", { "error-icon": errors.password })}></MdErrorOutline>
          {errors.password && <span className="text-red-600 mb-3 text-xl font-semibold">{errors.password.message}</span>}
          <span onClick={() => setShowPassword(!showPassword)} className="text-2xl absolute right-3 top-12">
            {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </span>
          <br />
        </div>
        <PasswordChecklist
          rules={["minLength", "specialChar", "number", "capital", "lowercase"]}
          minLength={8}
          value={password}
        />
        <button className="w-full h-16 text-xl font-bold btn btn-outline btn-primary">Register</button>
      </form>
      <p className="text-xl font-bold text-center">
        New Here?{" "}
        <Link className="text-blue-700" to="/login">
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
