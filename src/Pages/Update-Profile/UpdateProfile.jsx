import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Auth-Provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const {user} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const navigate =useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        const {fullName,photoUrl} = data;
            updateProfile(user,{
              displayName:fullName,
              photoURL:photoUrl
            })
            .then(()=>{
              console.log(fullName,photoUrl,'profile updated!');
              toast.success('update your profile')
              navigate('/')
              
            })
            .catch(error =>{
              console.error(error);
              toast.error('Please enter your name & photo links')
              
            })
      
      };

    return (
        <div className="w-full my-28 border-4 rounded-xl lg:w-1/2 mx-auto p-10">

          <Helmet>
            <title>Good Homes | Update Profile</title>
          </Helmet>
              <h1 className="text-center font-bold text-3xl text-black pb-6">This is Update Profile Page</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto py-5 space-y-3">
        <label className="text-xl font-semibold my-3">Name</label>
        <input
          className={classNames("w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none",{"is-invalid":errors.fullName})}
          type="text"
          name="fullName"
          placeholder="Enter Your name"
          {...register("fullName", { required: true })}
        />
        {errors.fullName && <span className="text-red-600 mb-3 text-xl font-semibold">This field is required</span>}
        <br />
        <label className="text-xl font-semibold my-3">Photo Url</label>
        <input
          className={classNames("w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none",{"is-invalid":errors.photoUrl})}
          type="text"
          name="photoUrl"
          placeholder="Enter Your photo link (small-link)"
          {...register("photoUrl", { required: true })}
        />
        {errors.photoUrl && <span className="text-red-600 mb-3 text-xl font-semibold">This field is required</span>} 
        <br />
        <label className="text-xl font-semibold my-3">Email</label>
        <input
          className={classNames("w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none",{"is-invalid":errors.email})}
          type="email"
          name="email"
          placeholder="Enter Your email"
          {...register("email", { required: true })}
        />
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
          {errors.password && <span className="text-red-600 mb-3 text-xl font-semibold">This field is required</span>}
          <span onClick={() => setShowPassword(!showPassword)} className="text-2xl absolute right-3 top-12">
            {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </span>
          <br />
        </div>
        
        <button className="w-full h-16 text-xl font-bold btn btn-outline btn-primary">Update</button>
      </form>
        </div>
    );
};

export default UpdateProfile;