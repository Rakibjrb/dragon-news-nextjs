import getNewsById from "@/utils/news/getNewsById";
import Image from "next/image";

const page = async ({ params }) => {
  const news = await getNewsById(params.id);

  return (
    <div className="my-10 max-w-7xl mx-auto px-3 xl:px-0 grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-6">
        <div className="grid grid-cols-12 gap-6">
          <Image
            className="w-full rounded-lg col-span-12"
            src={news?.thumbnail_url}
            width={820}
            height={520}
            alt="news details picture"
            priority={true}
          />
          <Image
            className="w-full rounded-lg col-span-6"
            src={news?.thumbnail_url}
            width={820}
            height={520}
            alt="news details picture"
            priority={true}
          />
          <Image
            className="w-full rounded-lg col-span-6"
            src={news?.image_url}
            width={820}
            height={520}
            alt="news details picture"
            priority={true}
          />
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold">{news?.title}</h2>
        <div className="px-3 py-1 rounded-md bg-red-500 inline-block text-white">
          {news?.category}
        </div>
        <div className="flex items-center gap-3">
          <Image
            className="rounded-full w-[50px]"
            src={news?.author?.img}
            width={820}
            height={520}
            alt="news details picture"
            priority={true}
          />
          <h3 className="text-xl">
            {news?.author?.name} - {news?.author?.published_date}
          </h3>
        </div>
        <p>{news?.details}</p>
      </div>
    </div>
  );
};

export default page;
