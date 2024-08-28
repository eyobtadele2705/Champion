import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)

  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
    // eslint-disable-next-line
  }, [])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST '} text2={'COLLECTION'} />
        <p className='W-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          There is no one who loves pain itself, who seeks after it and wants to
          have it, simply because it is pain
        </p>
      </div>
      {/* Rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}
export default LatestCollection
