import NewsCard from "@/components/shared/newsCard/NewsCard";
import sideBarBottomImage from "@/assets/side-bottom-img.png";
import getAllNews from "@/utils/news/getAllNews";
import Image from "next/image";

const SideBar = async () => {
  const newses = await getAllNews();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl lg:text-4xl font-semibold border-b-red-500 border-b-4 inline-block px-4 pb-2">
        Random News
      </h1>

      <NewsCard news={newses[2]} showCategory={true} />

      <Image
        className="w-full rounded-xl"
        src={sideBarBottomImage}
        width={820}
        height={520}
        alt={"sidebarbottom image"}
        priority={true}
      />
    </div>
  );
};

export default SideBar;
