import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";

function Sidebar() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "MyPost",
      slug: "/mypost",
      active: authStatus,
    },
    {
      name: "My",
      slug: "/my",
      active: authStatus,
    },
  ];

  return (
    <div className="fixed border-r-2 border-gray-800 h-full w-1/4 bg-black text-white flex flex-col ">
      <Link to="/" className="mt-2  left-14">
        <img
          src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722816000&semt=ais_hybrid"
          alt="Logo"
          className="h-14 px-40 "
        />
      </Link>
      <nav className="flex flex-col items-center flex-grow mt-4">
        <ul className="space-y-4">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name} className="text-center">
                <button
                  onClick={() => navigate(item.slug)}
                  className="flex  px-10 py-2 text-2xl duration-200 hover:bg-zinc-900 rounded-full w-auto"
                >
                  <i className="bi bi-house"></i>
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          <div className=" flex text-2xl px-10 py-2 hover:bg-zinc-900 rounded-full w-auto">
            Messages
          </div>
          <div className=" text-2xl px-10 py-2  hover:bg-zinc-900 rounded-full w-auto">
            Community
          </div>
          <div className=" text-2xl px-10 py-2  hover:bg-zinc-900 rounded-full w-auto">
            Profile
          </div> <div className=" text-2xl px-10 py-2  hover:bg-zinc-900 rounded-full w-auto">
            Notification
          </div>
          <div className=" text-2xl px-10 py-2 hover:bg-zinc-900 rounded-full w-auto">
            Bookmarks
          </div>
          {authStatus && <li className="text-2xl px-10 py-2 hover:bg-zinc-900 rounded-full w-auto"><LogoutBtn /></li>}
        </ul>
        <button
  type="submit"
  className="rounded-3xl flex items-center justify-center px-10 mt-4 w-1/2 py-2 text-2xl text-white bg-blue-600 text-center"
>
  Post
</button>

      </nav>
      
    </div>
  );
}

export default Sidebar;
