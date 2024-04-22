import navItems from "@/utils/navItems";
import moment from "moment";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="min-h-[300px] bg-black flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="inline-block mx-auto">
          <div className="flex gap-5">
            <Link href={"/"}>
              <FaFacebookF className="text-2xl text-white" />
            </Link>
            <Link href={"/"}>
              <FaTwitter className="text-2xl text-white" />
            </Link>
            <Link href={"/"}>
              <FaLinkedin className="text-2xl text-white" />
            </Link>
            <Link href={"/"}>
              <FaInstagram className="text-2xl text-white" />
            </Link>
          </div>
        </div>

        <nav className="text-white uppercase text-center flex gap-6 flex-wrap justify-center px-6">
          {navItems?.map((item, index) => (
            <Link key={item + index + "footer"} href={item.pathname}>
              {item.route}
            </Link>
          ))}
        </nav>

        <p className="text-[#ccc]">
          @{moment().format("YYYY")} developed by{" "}
          <Link
            href={"https://rakibul-dev.web.app/"}
            target="blank"
            className="hover:text-white"
          >
            Rakibul Hasan
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
