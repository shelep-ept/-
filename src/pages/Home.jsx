import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const products = [
    { name: 'Чехол для iPhone 14', price: 1290, image: '/images/case-1.jpg' },
    { name: 'Защитное стекло Samsung S23', price: 790, image: '/images/glass-1.jpg' },
    { name: 'Powerbank 10000mAh', price: 2490, image: '/images/pb-1.jpg' },
  ]

  return (
    <div>
      <Hero />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </section>
    </div>
  )
}
