import { IoIosCall } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import onisanobg from "../images/onisa-logo-no-bg.png";
import { MdEmail } from "react-icons/md";
function NavBar() {
  return (
    <div className="text-center">
      <nav className="bg-[#9e1b1d] w-100 h-14 flex justify-around">
       <div>
        <img src={onisanobg}  className=" bg-white pb-2 " style={{height:"60px"}} />
       </div>
        <ul className="flex justify-center text-center pt-3 text-white">
          <li className="flex flex-row   ">
            <p className="px-2">0740767577</p>{" "}
            <IoIosCall className="text-2xl" />
          </li>
          <li className="flex flex-row  ">
            <p className="px-2">onisa</p>{" "}
            <AiFillInstagram className="text-2xl" />
          </li>
          <li className="flex flex-row  ">
            <p className="px-2">info@onisadesigns.com</p>{" "}
            <MdEmail className="text-2xl" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
