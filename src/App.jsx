import Navbar from "./components/Navbar";
import Burger from "./assets/img/hamburger-1.png";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { motion, scale, } from "motion/react";


import Burger1 from "./assets/img/burger-1.jpg";
import Burger2 from "./assets/img/burger-2.jpg";
import Burger3 from "./assets/img/burger-3.jpg";
import Burger4 from "./assets/img/burger-4.jpg";
import Burger5 from "./assets/img/burger-5.jpg";
import Burger6 from "./assets/img/burger-6.jpg";
import Burger7 from "./assets/img/burger-7.jpg";

function App() {

  return (
    <>
      <ThemeProvider>
        <Navbar />

        <section
          id="home"
          className="text-black bg-white dark:bg-black dark:text-white md:h-screen"
        >
          <div className="container mx-auto flex px-5 py-24 md:py-32 md:flex-row flex-col items-center overflow-visible">
            <motion.div initial={{y:200, opacity:.1}} whileInView={{y:0, opacity:1}} transition={{ease: "easeOut", duration: 0.5}} className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                Rasakan Lezatnya Burger 
                <br className="lg:inline-block" />
                Terbaik di Kota!
              </h1>
              <p className="mt-3 leading-relaxed ">
                Dibuat dari daging sapi premium, roti lembut hangat, dan saus
                rahasia yang bikin nagih <br className="hidden lg:block" />
                setiap gigitan Burger kami adalah ledakan rasa yang tidak
                terlupakan!
              </p>
              <div className="flex justify-center mt-5">
                <button className="inline-flex cursor-pointer text-white bg-indigo-500 rounded-3xl border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg">
                  Order Sekarang
                </button>
              </div>
            </motion.div>
            <motion.div initial={{y:200, opacity:.1}} whileInView={{y:0, opacity:1}} transition={{ease: "easeOut", duration: 0.6}} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={Burger}
              />
            </motion.div>
          </div>
        </section>

        <motion.section id="menu" class="text-black bg-white dark:bg-black dark:text-white pt-3">
           <div className="flex flex-col text-center w-full">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black bg-white dark:bg-black dark:text-white">
                Select & Enjoy
              </h1>
              <p className="lg:w-2/3 mx-auto px-1 leading-relaxed">
                Temukan Burger yang Sempurna untuk Anda: Beragam Pilihan Burger
                Lezat dan Lezat untuk Dipilih dan Dinikmati
              </p>
            </div>
          <div class="container px-5 py-12 mx-auto">
            <div class="flex flex-wrap -m-4">
              <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{ease: "easeOut", duration: .5}} class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={Burger1}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      Burger
                    </h2>
                    <h1 class="title-font text-lg font-medium text-black dark:text-white mb-3">
                      Chicken Burger
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Daging ayam dipanggang, Selada, Mayones, Irisan tomat
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Rp.17.000
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{ease: "easeOut", duration: .6}} class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={Burger2}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      Burger
                    </h2>
                    <h1 class="title-font text-lg font-medium text-black dark:text-white mb-3">
                      Beef Burger
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Patty daging sapi, Keju cheddar, Selada, Tomat, Acar, Bawang bombay, Saus Mayones
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Rp.17.000
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{ease: "easeOut", duration: .7}} class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={Burger3}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      Burger
                    </h2>
                    <h1 class="title-font text-lg font-medium text-black dark:text-white mb-3">
                      Cheeseburger
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Patty daging sapi, Keju leleh mozzarella, Selada, Tomat, Saus
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Rp.17.000
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{ease: "easeOut", duration: .5}} class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={Burger4}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      Burger
                    </h2>
                    <h1 class="title-font text-lg font-medium text-black dark:text-white mb-3">
                      Chicken Burger
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Daging ayam dipanggang, Selada, Mayones, Irisan tomat
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Rp.17.000
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{ease: "easeOut", duration: .6}} class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={Burger5}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      Burger
                    </h2>
                    <h1 class="title-font text-lg font-medium text-black dark:text-white mb-3">
                      Beef Burger
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Patty daging sapi, Keju cheddar, Selada, Tomat, Acar, Bawang bombay, Saus Mayones
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Rp.17.000
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{ease: "easeOut", duration: .7}} class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={Burger6}
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      Burger
                    </h2>
                    <h1 class="title-font text-lg font-medium text-black dark:text-white mb-3">
                      ChesseBurger
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Patty daging sapi, Keju leleh mozzarella, Selada, Tomat, Saus
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Rp.17.000
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <section
          id="about"
          className="text-black dark:text-white bg-white dark:bg-black"
        >
          <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <motion.div initial={{scale: 1.2}} whileInView={{scale: 1}} transition={{duration: .7}} className="lg:max-w-lg lg:w-full md:w-1/2 w-full md:mb-0 mb-10">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={Burger7}
              />
            </motion.div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-justify">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black dark:text-white">
                Tentang kami
              </h1>
              <p className="mb-8 leading-relaxed lg:w-5/6">
                Kami adalah burger house lokal yang berdedikasi menghadirkan
                cita rasa internasional dengan bahan lokal terbaik. Sejak 2020,
                kami telah melayani ribuan pelanggan yang puas dengan kualitas,
                kecepatan layanan, dan rasa yang selalu konsisten. Visi kami:
                “Membuat burger terbaik yang bisa dinikmati semua orang.”
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="text-black dark:text-white bg-white dark:bg-black relative"
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black dark:text-white">
                Kontak
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Hubungi melalui form atau sosial media kami
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-black dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-white bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-black dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-black dark:text-white"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="w-full bg-white bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-black dark:text-white"
                    >
                      Total
                    </label>
                    <input
                      type="number"
                      id="number"
                      name="number"
                      className="w-full bg-white bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 mt-3 w-full">
                  <button class="flex mx-auto cursor-pointer text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-3xl text-lg">
                    Order Sekarang!
                  </button>
                </div>

                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                  <a className="text-indigo-400">Burgerenak@gmail.com</a>
                  <p className="leading-normal my-5">
                    Kebumen
                    <br />
                    Gemeksekti 54317
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer items-center sm:footer-horizontal bg-black dark:bg-indigo-500 justify-around text-white p-10">
          <aside className="grid-flow-col items-center">
            <svg
              className="w-12 fill-amber-50 stroke-0"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M14 6C7.480469 6 2.214844 11.183594 2.03125 17.65625L0.1875 20.21875C-0.121094 20.660156 -0.0273438 21.269531 0.40625 21.59375C0.910156 21.972656 1.445313 22.265625 2 22.5L2 26.5625C0.804688 27.253906 0 28.519531 0 30C0 31.480469 0.804688 32.746094 2 33.4375L2 39C2 41.746094 4.253906 44 7 44L43 44C45.746094 44 48 41.746094 48 39L48 33.4375C49.195313 32.746094 50 31.480469 50 30C50 28.519531 49.195313 27.253906 48 26.5625L48 22.59375C48.636719 22.351563 49.242188 22.023438 49.8125 21.59375C50.023438 21.433594 50.164063 21.195313 50.199219 20.929688C50.234375 20.664063 50.164063 20.398438 50 20.1875L47.96875 17.625C47.765625 11.167969 42.507813 6 36 6 Z M 14 8L36 8C41.226563 8 45.445313 11.914063 45.9375 17L4.0625 17C4.554688 11.914063 8.773438 8 14 8 Z M 17.5 9C16.671875 9 16 9.671875 16 10.5C16 11.328125 16.671875 12 17.5 12C18.328125 12 19 11.328125 19 10.5C19 9.671875 18.328125 9 17.5 9 Z M 12.5 10C11.671875 10 11 10.671875 11 11.5C11 12.328125 11.671875 13 12.5 13C13.328125 13 14 12.328125 14 11.5C14 10.671875 13.328125 10 12.5 10 Z M 15.5 13C14.671875 13 14 13.671875 14 14.5C14 15.328125 14.671875 16 15.5 16C16.328125 16 17 15.328125 17 14.5C17 13.671875 16.328125 13 15.5 13 Z M 3.53125 19L46.5 19L47.6875 20.5C45.789063 21.457031 43.582031 21.328125 41.8125 20C41.492188 19.761719 41.0625 19.738281 40.71875 19.9375L39.125 20.84375C39.113281 20.84375 39.105469 20.84375 39.09375 20.84375C37.191406 21.96875 35.003906 21.949219 33.21875 20.84375C33.207031 20.84375 33.199219 20.84375 33.1875 20.84375L31.59375 19.9375C31.304688 19.773438 30.953125 19.761719 30.65625 19.90625L27.6875 21.40625L27.65625 21.40625C26.042969 22.160156 24.175781 22.160156 22.5625 21.40625L22.53125 21.40625L19.5625 19.90625C19.265625 19.761719 18.914063 19.773438 18.625 19.9375L17 20.84375C15.097656 21.96875 12.910156 21.949219 11.125 20.84375C11.113281 20.84375 11.105469 20.84375 11.09375 20.84375L9.5 19.9375C9.15625 19.738281 8.726563 19.761719 8.40625 20C6.621094 21.339844 4.378906 21.453125 2.46875 20.46875 Z M 8.96875 21.90625L10.09375 22.53125L10.0625 22.5625C12.476563 24.058594 15.503906 24.039063 18 22.5625L19.125 21.9375L21.65625 23.1875C21.667969 23.199219 21.675781 23.207031 21.6875 23.21875C23.855469 24.246094 26.363281 24.246094 28.53125 23.21875C28.542969 23.207031 28.550781 23.199219 28.5625 23.1875L31.09375 21.9375L32.1875 22.5625L32.21875 22.5625C34.628906 24.042969 37.605469 24.03125 40.09375 22.5625L41.21875 21.90625C42.683594 22.808594 44.363281 23.175781 46 23.03125L46 26L4 26L4 23.03125C5.695313 23.230469 7.441406 22.847656 8.96875 21.90625 Z M 4 28L46 28C47.191406 28 48 28.808594 48 30C48 31.191406 47.191406 32 46 32L4 32C2.808594 32 2 31.191406 2 30C2 28.808594 2.808594 28 4 28 Z M 4 34L46 34L46 39C46 40.65625 44.65625 42 43 42L7 42C5.34375 42 4 40.65625 4 39Z"></path>
              </g>
            </svg>
            <p className="text-xl font-bold">Burger</p>
          </aside>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </ThemeProvider>
    </>
  );
}

export default App;
