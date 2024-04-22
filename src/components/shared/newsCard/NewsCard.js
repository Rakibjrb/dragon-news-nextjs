import Image from "next/image";

const NewsCard = ({ news, showCategory }) => {
  return (
    <div className="space-y-4">
      <Image
        className="w-full rounded-xl"
        src={news?.thumbnail_url}
        width={820}
        height={520}
        alt={news?.title}
        priority={true}
      />
      {showCategory && (
        <div className="px-3 py-1 rounded-md bg-red-500 inline-block text-white">
          {news?.category}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold">{news?.title}</h2>
      <h3 className="text-sm">
        {news?.author?.name} - {news?.author?.published_date}
      </h3>
      <p>{news.details.slice(0, 50)} ....</p>
    </div>
  );
};

export default NewsCard;
