import { Link, NavLink } from "react-router-dom";
import webLogo from "../../assets/web-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Auth-Provider/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
  const {user,logOutUser} = useContext(AuthContext);
  console.log(user);

  const handleLogOt =()=>{
    logOutUser()
    .then(()=>{
      toast.success('user successfully logout!')
    })
    .catch(error =>{
      console.error(error);
  })
  }

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-xl text-red-700 font-semibold" : "text-xl font-semibold mx-2 hover:text-red-700"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-xl text-red-700 font-semibold" : "text-xl font-semibold mx-2 hover:text-red-700"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/update-profile"
          className={({ isActive }) =>
            isActive ? "text-xl text-red-700 font-semibold" : "text-xl font-semibold mx-2 hover:text-red-700"
          }
        >
          Update Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed top-0 w-full left-0 lg:px-20 z-10 border-b-2 navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl"> <img src={webLogo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="flex gap-2 items-center">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={user?.photoURL || "https://i.ibb.co.com/GFXfKpR/user.png"}
                alt=""
              />
              <span> {user.displayName || user.email} </span>
              <button onClick={handleLogOt} className="btn w-36 text-lg btn-outline btn-secondary">
                Sign Out
              </button>
            </div>
          </>
        ) : (
          <Link to="/login" className="btn btn-outline btn-error text-lg">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
