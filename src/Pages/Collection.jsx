import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')

  useEffect(() => {
    setFilterProducts(products) // Initial state is all products
  }, [])

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value))
    } else {
      setCategory((prev) => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value))
    } else {
      setSubCategory((prev) => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let filteredProductCopy = products.slice()

    if (showSearch && search) {
      filteredProductCopy = filteredProductCopy.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    }
    if (category.length > 0) {
      filteredProductCopy = filteredProductCopy.filter((product) =>
        category.includes(product.category)
      )
    }

    if (subCategory.length > 0) {
      filteredProductCopy = filteredProductCopy.filter((product) =>
        subCategory.includes(product.subCategory)
      )
    }
    setFilterProducts(filteredProductCopy)
  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  //Complete this line
  const sortProducts = () => {
    let fbCopy = filterProducts.slice()

    switch (sortType) {
      case 'lowHigh':
        setFilterProducts(fbCopy.sort((a, b) => a.price - b.price))
        break
      case 'highLow':
        setFilterProducts(fbCopy.sort((a, b) => b.price - a.price))
        break

      default:
        applyFilter()
        break
    }
  }

  useEffect(() => {
    sortProducts()
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=''
          />
        </p>

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'Men'}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'Women'}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'Kids'}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* Sub Category filter */}

        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'Topwear'}
                onChange={toggleSubCategory}
              />
              Top wear
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'Bottomwear'}
                onChange={toggleSubCategory}
              />
              Bottom wear
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'Winterwear'}
                onChange={toggleSubCategory}
              />
              Winter wear
            </p>
          </div>
        </div>
      </div>

      {/* Right side screen */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL '} text2={'COLLECTIONS'} />
          {/* Product Sort */}

          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2'
          >
            <option value='relevant'>Sort by: Relevant</option>
            <option value='lowHigh'>Sort by: Low to High</option>
            <option value='highLow'>Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Collection
