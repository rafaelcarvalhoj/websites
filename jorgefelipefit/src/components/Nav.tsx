import React from "react";
import NavList from "./Navlist";
import {
  Navbar,
  Collapse,
  IconButton,
} from "@material-tailwind/react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../assets/logo_descritiva_preta.png";
 
export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <div className="bg-white">
      <Navbar className="bg-transparent max-w-6xl backdrop-saturate-1 border-0 shadow-none w-full lg:px-6 mx-auto px-2 py-3" placeholder="">
        <div className="flex items-center justify-between">
          <img src={logo} className="xl:w-72 w-64"/>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            placeholder=""
            onClick={() => setOpenNav(!openNav)}
            >
            {openNav ? (
              <XMarkIcon className="h-6 w-6 text-gray-900" strokeWidth={2} />
              ) : (
                <Bars3BottomRightIcon className="h-6 w-6 text-gray-900" strokeWidth={2} />
                )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}