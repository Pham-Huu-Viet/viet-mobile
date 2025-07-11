export default function ProductCategoriesItem({ item }) {
  return (
    <div className="card aspect-square flex-1 cursor-pointer justify-end overflow-hidden">
      <div
        className="transition-base absolute inset-0 h-full w-full bg-cover bg-center hover:scale-110"
        style={{ backgroundImage: `url(${item?.image})` }}
      ></div>

      <div className="flex-col-start to-gray-20 z-1 w-full bg-gradient-to-b from-transparent from-0% to-50% p-4">
        <h3>{item?.name}</h3>
        <p>{item?.count} products</p>
      </div>
    </div>
  );
}
