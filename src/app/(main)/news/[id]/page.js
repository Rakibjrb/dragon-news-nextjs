const page = ({ params }) => {
  return (
    <div className="my-10 max-w-7xl mx-auto px-3 xl:px-0">
      details of {params.id}
    </div>
  );
};

export default page;
