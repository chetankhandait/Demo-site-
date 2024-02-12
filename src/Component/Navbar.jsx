import React from "react";
const Navbar = () => {
  return (
    <div className="bg-white w-full h-14 flex flex-1 items-center   gap-x-16 ">
      <div  className="translate-x-60 flex items-center">
      <img
        src="src/assets/dog.png"
        alt=""
        width={70}
       
      />
      <span>BarkBuddy</span>

      </div>
      <div className="flex translate-x-1/2 ">
        <div class=" flex  w-full items-center justify-center   ">
          <div class="group relative cursor-pointer py-2">
            <div class="flex items-center justify-between space-x-5   px-4">
              <a
                class="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
                onClick=""
              >
                Our Products
              </a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <div
              class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
              onClick=""
            >
              <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product One
              </a>

              <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Two
              </a>
              <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Three
              </a>
              <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Four
              </a>
            </div>
          </div>
        </div>
        <div class="mx-auto flex  w-full items-center justify-center   ">
          <div class="group relative cursor-pointer py-2">
            <div class="flex items-center justify-between space-x-5   px-4">
              <a
                class="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
                onClick=""
              >
                Our Products
              </a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <div
              class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
              onClick=""
            >
              <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product One
              </a>

              <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Two
              </a>
              <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Three
              </a>
              <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Four
              </a>
            </div>
          </div>
        </div>
        <div class="mx-auto flex  w-full items-center justify-center   ">
          <div class="group relative cursor-pointer py-2">
            <div class="flex items-center justify-between space-x-5   px-4">
              <a
                class="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
                onClick=""
              >
                Our Products
              </a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <div
              class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
              onClick=""
            >
              <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product One
              </a>

              <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Two
              </a>
              <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Three
              </a>
              <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Product Four
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
