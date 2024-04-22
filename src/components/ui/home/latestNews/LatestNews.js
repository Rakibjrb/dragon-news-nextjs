import NewsCard from "@/components/shared/newsCard/NewsCard";
import getAllNews from "@/utils/news/getAllNews";

const LatestNews = async () => {
  const newses = await getAllNews();

  return (
    <div className="space-y-8">
      <h1 className="mb-6 text-3xl lg:text-4xl font-semibold border-b-red-500 border-b-4 inline-block px-4 pb-2">
        Latest News
      </h1>

      {/* banner news */}

      <NewsCard news={newses[0]} showCategory={true} />

      <div className="grid grid-cols-12 gap-4">
        {newses?.slice(2, 6)?.map((news, index) => (
          <div
            key={news + index + "news"}
            className="col-span-12 md:col-span-6"
          >
            <NewsCard news={news} showCategory={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
