import CatetorySidebar from "@/components/ui/categoryNews/sidebar/CatetorySidebar";

const Category = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 xl:px-0">
      <div className="my-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5 lg:col-span-4 md:pt-[76px]">
          <CatetorySidebar />
        </div>
        <div className="col-span-12 md:col-span-7 lg:col-span-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Category;
