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
  ];

  return (
    <div className="fixed border-r-2 border-gray-800 h-full w-1/4 bg-black text-white flex flex-col ">
      <Link to="/" className="mt-2  left-14">
        <img
          src="https://imgs.search.brave.com/B6vwk9ItpE_OLonUNPFsN6SwMzKcwjW-YXgCvf6jzog/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY5MDY0MzU5/MXR3aXR0ZXIteC1s/b2dvLXBuZy5wbmc"
          alt="Logo"
          className="h-10 px-32 "
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
          <div className=" text-2xl px-10 py-2 hover:bg-zinc-900 rounded-full w-auto">
            Bookmarks
          </div>
          {authStatus && <li className="text-2xl px-10 py-2 hover:bg-zinc-900 rounded-full w-auto"><LogoutBtn /></li>}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
