const getNewsByCategory = async (category) => {
  try {
    const res = await fetch(
      `https://dragon-news-nextjs-ivory.vercel.app/api/news/category/${category}`
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    return [];
  }
};

export default getNewsByCategory;
