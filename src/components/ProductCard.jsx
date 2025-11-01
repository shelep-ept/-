export default function ProductCard({ name, price, image }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{price} ₽</p>
      <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Купить
      </button>
    </div>
  )
}
