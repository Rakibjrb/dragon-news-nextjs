const getNewsById = async (id) => {
  try {
    const res = await fetch(
      `https://dragon-news-nextjs-ivory.vercel.app/api/news/${id}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
};
export default getNewsById;
