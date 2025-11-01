import { motion } from 'framer-motion'

export default function ProductCard({ name, price, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition-all bg-white cursor-pointer"
    >
      <motion.img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-3">{price} ₽</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Купить
      </motion.button>
    </motion.div>
  )
}
