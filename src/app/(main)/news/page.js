import NewsCard from "@/components/shared/newsCard/NewsCard";
import getAllNews from "@/utils/news/getAllNews";

const page = async () => {
  const newses = await getAllNews();

  return (
    <div className="max-w-7xl mx-auto my-10 px-3 xl:px-0">
      <div className="flex justify-center">
        <h1 className="text-center text-3xl md:text-5xl font-bold border-b-red-500 border-b-4 inline-block px-4 pb-3">
          Today All News
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-6 mt-6">
        {newses?.map((news, index) => (
          <div
            key={news + index + "allNews"}
            className="col-span-12 md:col-span-6 lg:col-span-4"
          >
            <NewsCard news={news} showCategory={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
