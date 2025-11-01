import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Все')

  const allProducts = [
    { name: 'Чехол для iPhone 14', price: 1290, image: '/images/case-1.jpg', category: 'Чехлы' },
    { name: 'Защитное стекло Samsung S23', price: 790, image: '/images/glass-1.jpg', category: 'Стекла' },
    { name: 'Powerbank 10000mAh', price: 2490, image: '/images/pb-1.jpg', category: 'Зарядки' },
  ]

  const categories = ['Все', 'Чехлы', 'Стекла', 'Зарядки']

  const filteredProducts = selectedCategory === 'Все' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory)

  return (
    <div>
      <Hero />
      <section className="p-6">
        <div className="mb-8 flex gap-3 justify-center flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg transition ${
                selectedCategory === cat
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProducts.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </motion.div>
      </section>
    </div>
  )
}
