import LatestNews from "@/components/ui/home/latestNews/LatestNews";
import SideBar from "@/components/ui/home/sideBar/SideBar";

const page = async () => {
  return (
    <div className="max-w-7xl mx-auto px-2 xl:px-0 py-6 lg:py-10">
      <div className="grid grid-cols-12 gap-6 lg:gap-4">
        <div className="col-span-12 lg:col-span-8">
          <LatestNews />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default page;
