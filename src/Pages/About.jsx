import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-center pt-8 text-2xl border-t'>
        <Title text1={'ABOUT '} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          className='w-full md:max-w-[450px]'
          src={assets.about_img}
          alt=''
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            There is no one who loves pain itself, who seeks after it and wants
            to have it, simply because it is pain. Morbi vulputate volutpat
            elementum. Integer quis dolor in sem hendrerit egestas. P
          </p>
          <p>
            Phasellus vel diam lorem. Nam sit amet laoreet risus. Integer
            hendrerit sollicitudin nisl sed placerat. Nulla lobortis consequat
            erat, sit amet ornare libero sollicitudin a. Proin iaculis volutpat
            elit id accumsan
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Vivamus varius, purus vitae tincidunt euismod, nisl risus cursus
            quam, vel varius elit mi vel felis. Proin eleifend, urna eget rutrum
            consectetur, sem tortor semper orci, sit amet suscipit nulla mi nec
            lorem. Sed scelerisque quam in libero fringilla, vel venenatis dui
            maximus. In mattis ac magna sit amet sollicitudin.
          </p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            Cras purus est, luctus vitae urna ac, facilisis porta lorem. Mauris
            aliquet turpis at massa varius, non volutpat dui congue. Donec urna
            nisl, volutpat nec auctor vitae, tempus in lacus. Cras diam felis
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ullamcorper gravida sollicitudin. Praesent odio purus, venenatis eu
            imperdiet in, placerat eu arcu.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Phasellus vel diam lorem. Nam sit amet laoreet risus. Integer
            hendrerit sollicitudin nisl sed placerat. Nulla lobortis consequat
            erat, sit amet ornare libero sollicitudin a.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}
export default About
