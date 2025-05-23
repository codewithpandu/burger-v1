import DarkModeToggler from "./DarkModeToggler";

export default function Navbar() {
  return (
    <div className="navbar shadow-sm bg-white text-black dark:bg-black dark:text-white">
      <div className="navbar-start">
        <a href="#home" className="btn bg-none border-0 text-2xl md:text-3xl text-indigo-500">Burger</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-7">
           <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#about">Tentang Kami</a>
            </li>
            <li>
              <a href="#contact">Kontak</a>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        <DarkModeToggler />
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white dark:bg-black dark:text-white rounded-box z-1 mt-3 w-52 p-2 shadow right-0"
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#about">Tentang Kami</a>
            </li>
            <li>
              <a href="#contact">Kontak</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
