import NewsCard from "@/components/shared/newsCard/NewsCard";
import getNewsByCategory from "@/utils/news/getNewByCategory";

const page = async ({ params }) => {
  const newses = await getNewsByCategory(params.category);

  return (
    <>
      <h1 className="mb-6 text-3xl lg:text-4xl font-semibold border-b-red-500 border-b-4 inline-block px-6 pb-2">
        {params.category} News
      </h1>

      <div className="grid grid-cols-12 gap-6">
        {newses?.length < 1 ? (
          <h2 className="text-3xl text-center font-semibold col-span-12">
            No {params.category} News Available
          </h2>
        ) : (
          <>
            {newses?.map((news, index) => (
              <div
                key={`categorynews${news + index}`}
                className="col-span-12 lg:col-span-6"
              >
                <NewsCard news={news} showCategory={false} />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default page;
