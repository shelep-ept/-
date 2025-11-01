export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b bg-white shadow-sm">
      <h1 className="text-2xl font-semibold">Accessory Store</h1>
      <nav className="flex gap-4 text-gray-700">
        <a href="#" className="hover:text-blue-500 transition">Главная</a>
        <a href="#" className="hover:text-blue-500 transition">Каталог</a>
        <a href="#" className="hover:text-blue-500 transition">Контакты</a>
      </nav>
    </header>
  )
}
