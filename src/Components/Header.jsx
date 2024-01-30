import { Menu, Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";

const navigation = [
  { name: "Work", id: "work" },
  { name: "Terminal", id: "terminal" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];
const Burger = () => {
  return (
    <div className="space-y-2 p-3">
      <div className="w-8 h-0.5 bg-secondarytext"></div>
      <div className="w-8 h-0.5 bg-secondarytext"></div>
      <div className="w-8 h-0.5 bg-secondarytext"></div>
    </div>
  );
};

function Header() {
  const [hstate, sethstate] = useState("top");
  const [menuOpen, setmenuOpen] = useState(false);

  useEffect(() => {
    var last = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > last) {
        sethstate("down");
      }
      if (y < last) {
        sethstate("up");
      }
      if (y == 0) {
        sethstate("top");
      }
      last = y;
    };
  }, []);

  return (
    <nav
      className={
        menuOpen
          ? "z-50 boxshadow md:translate-y-2 transition-all duration-1000  md:py-4 text-xl fixed w-full "
          : "z-50 boxshadow md:translate-y-2 transition-all duration-1000  md:py-4 text-xl fixed w-full " +
            hstate
      }
    >
      <div className="flex justify-between bg-transparent backdrop-brightness-0 md:backdrop-filter-none">
        <div
          className=""
          onClick={() => {
            document.documentElement.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img
            src="/logo.png"
            alt=""
            className="hover:scale-110 ease-out duration-300 w-[170px]"
          />
        </div>

        <div className="hidden md:flex justify-center items-center pr-5">
          <ul className="flex gap-3 font-bold text-[#ffffff80]">
            <li
              className="hover:text-text pointer_event"
              onClick={() => {
                document.documentElement.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Start <span className="text-[#494949] ">/&gt;</span>
            </li>
            {navigation.map((item) => (
              <li
                key={item.name}
                className="hover:text-text pointer_event"
                onClick={() => {
                  document
                    .getElementById(item.id)
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.name} <span className="text-[#494949] ">/&gt;</span>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile */}
        <div className="md:hidden flex justify-center items-center pr-5">
          <Menu>
            <Menu.Button onClick={() => setmenuOpen(!menuOpen)}>
              <Burger></Burger>
            </Menu.Button>
            <Transition
              enter="transition duration-300"
              enterFrom="opacity-0 translate-y-[-100%]"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-200 "
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className=" absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 navbar-mobile -z-50"
            >
              <Menu.Items>
                <Menu.Item>
                  <ul
                    className={
                      "min-w-[100vw] text-center flex gap-3 font-bold text-[#ffffff80] flex-col "
                    }
                  >
                    <li
                      className=""
                      onClick={() => {
                        document.documentElement.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Start <span className="text-[#494949] ">/&gt;</span>
                    </li>
                    {navigation.map((item) => (
                      <li
                        key={item.name}
                        onClick={() => {
                          document
                            .getElementById(item.id)
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        {item.name}{" "}
                        <span className="text-[#494949]">/&gt;</span>
                      </li>
                    ))}
                  </ul>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
}

export default Header;
