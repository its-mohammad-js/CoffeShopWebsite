const fakeArray = Array.from({ length: 32 }, (_, i) => i);

export default function ProductsLoader(params) {
  return (
    <div className="w-full py-4 my-4 flex flex-wrap items-center gap-8 px-16 justify-center">
      {fakeArray.map((product) => (
        <div
          onClick={() => {
            navigate(`/product/${product.id}`);
            window.scroll({ top: 0, behavior: "smooth" });
          }}
          className="flex flex-col flex-none items-center justify-center cursor-pointer animate-pulse"
        >
          <div className="size-64 rounded-xl bg-gray-200 flex-none mb-2 overflow-hidden"></div>
          <h4 className="text-lg text-gray-900 font-semibold w-24 h-4 bg-gray-300 my-1 rounded-md"></h4>
          <p className="text-gray-600 my-2 font-semibold w-16 h-2 bg-gray-300 rounded-md"></p>
        </div>
      ))}
    </div>
  );
}
