const getAllNews = async () => {
  try {
    const res = await fetch(
      "https://dragon-news-nextjs-ivory.vercel.app/api/news",
      { next: { revalidate: 120 } }
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    return [];
  }
};

export default getAllNews;
