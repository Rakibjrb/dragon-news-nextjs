import HeaderLogo from "@/assets/the-dragon-news.png";
import moment from "moment";
import Image from "next/image";

const Header = () => {
  return (
    <div className="text-center mt-4 px-5 md:px-0 space-y-2">
      <Image
        className="mx-auto"
        src={HeaderLogo}
        width={500}
        height={200}
        alt="header logo"
        placeholder="blur"
        priority={true}
      />

      <h1 className="text-xl md:text-2xl">Journalism Without Fear or Favour</h1>
      <h2 className="text-xl">{moment().format("llll")}</h2>
    </div>
  );
};

export default Header;
