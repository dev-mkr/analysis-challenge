const AnalysisLoader = () => {
  return (
    <div className="  flex animate-pulse gap-x-3 ">
      <div className="flex-1 py-1 ">
        <div className="flex w-full flex-col justify-between gap-3 py-10 lg:flex-row">
          <div className="flex h-10 w-full items-center justify-between gap-x-4 rounded bg-gray-400 "></div>
          <div className="flex h-10 w-full items-center justify-between gap-x-4 rounded bg-gray-400 "></div>
          <div className="flex h-10 w-full items-center justify-between gap-x-4 rounded bg-gray-400 "></div>
        </div>
        <div className="flex flex-wrap justify-between pb-10">
          <div className="mt-6 flex h-80 basis-full rounded-md  bg-gray-400 lg:basis-4/6 "></div>
          <div className="mt-6  flex  h-80  basis-full flex-col gap-y-5 rounded-md bg-gray-400 lg:order-2 lg:basis-1/4 "></div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisLoader;
