"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  "All",
  "Technology",
  "Sports",
  "Culture",
  "National",
  "Local",
];

const CatetorySidebar = () => {
  const categoryValue = usePathname().split("/")[2];

  return (
    <div className="bg-[#F3F3F3] p-10 rounded-xl md:sticky md:top-20">
      <h2 className="border-b border-b-[#151515] pb-4 text-4xl font-semibold">
        Category
      </h2>

      <ul className="mt-5 flex flex-col gap-4">
        {categories?.map((category, index) => (
          <Link
            key={category + index}
            href={`/category/${category}`}
            className="w-full"
          >
            <li
              className={`text-center rounded-lg  py-3 font-semibold border ${
                categoryValue === category
                  ? "bg-red-500 text-[#F3F3F3] border-red-500"
                  : " border-[#151515]"
              }`}
            >
              {category}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CatetorySidebar;
