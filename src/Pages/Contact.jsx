import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT '} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full max-w-[480px]' alt='' />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>
            Bole Bulbula Woreda 12 <br /> Addis Ababa, Ethiopia
          </p>
          <p>
            Tel: (+251) 913-561-981 <br />
            Email: eyob1810@gmail.com
          </p>
          <p className='font-semibold text-xl text-gray-600'>
            Careers at Forever
          </p>
          <p className='text-gray-500'>
            Learn more about our teams and job openings. <br />
          </p>
          <button className='border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-500 '>
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}
export default Contact
