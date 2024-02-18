import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useSelector } from "react-redux";
import { signout } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [click, setClick] = useState(false);

  const dispatch = useDispatch();

  const handleNav = () => {
    setClick(!click);
  };
  //   if (currentUser !== null) {
  //     const token = jwtDecode(currentUser.accessToken).role;
  //     console.log(token);
  //   }

  const handlelogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(signout());
    //dispatch(founderSignout())
    toast.success('Logged Out Successfully');
    window.location.reload();
  };

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-white transition">
        <ul className="text-center text-xl p-20">
        <li className="my-4 py-4 border-b border-blue-800 hover:bg-slate-800 hover:rounded">
            <NavLink to="/chat">Chat</NavLink>
          </li>
        <li className="my-4 py-4 border-b border-blue-800 hover:bg-slate-800 hover:rounded">
            <NavLink to="/showHotel">Hotels</NavLink>
          </li>
          <li className="my-4 py-4 border-b border-blue-800 hover:bg-slate-800 hover:rounded">
            <NavLink to="/medicine">About</NavLink>
          </li>

          {/* <li className="my-4 py-4 border-b border-white hover:bg-slate-800 hover:rounded">
            <NavLink to="/contact">Contact</NavLink>
          </li> */}

          <NavLink to="/signin">
            {currentUser ? (
              <li
                className="my-4 py-4 border-b border-white hover:bg-slate-800 hover:rounded"
                onClick={handlelogout}
              >
                Sign Out
              </li>
            ) : (
              <li className="my-4 py-4 border-b border-white hover:bg-slate-800 hover:rounded">
                LogIn
              </li>
            )}
          </NavLink>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <div className="bg-blue-800 shadow sticky z-50 top-0">
        <nav>
          <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
            <div className="flex items-center flex-1">
              <span className="text-3xl font-bold">
                <Link to="/">Trip Mate</Link>
              </span>
            </div>
            <div className="lg-flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
              <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px]">
                  <li className="hover:text-white transition border-b-2 border-blue-800 hover:border-white cursor-pointer">
                    <NavLink to="/chat">Chat</NavLink>
                  </li><li className="hover:text-white transition border-b-2 border-blue-800 hover:border-white cursor-pointer">
                    <NavLink to="/showHotel">Hotels</NavLink>
                  </li>
                
                  <li className="hover:text-white transition border-b-2 border-blue-800 hover:border-white cursor-pointer">
                    <NavLink to="/medicine">About</NavLink>
                  </li>
                  

                  {/* <li className="hover:text-white transition border-b-2 border-blue-800 hover:border-white cursor-pointer">
                    <NavLink to="/contact">Contact</NavLink>
                  </li> */}

                  <NavLink to="/signin">
                    {currentUser ? (
                      <li
                        className="hover:text-white transition border-b-2 border-blue-800 hover:border-white cursor-pointer"
                        onClick={handlelogout}
                      >
                        Sign Out
                      </li>
                    ) : (
                      <li className="hover:text-white transition border-b-2 border-blue-800 hover:border-white cursor-pointer">
                        LogIn
                      </li>
                    )}
                  </NavLink>
                  <li>
                    <Link to="/studentprofile">
                      <img src="" alt="" className="h-8" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>{click && content}</div>
            <button className="block sm:hidden transition" onClick={handleNav}>
              {click ? <FaTimes /> : <CiMenuFries />}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
