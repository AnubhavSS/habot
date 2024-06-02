import Image from 'next/image'
import logo from '../../public/logo.png'
import linkedin from '../../public/linkedin.png'
import twitter from '../../public/twitter.png'
import facebook from '../../public/facebook.png'
import insta from '../../public/insta.png'
const Footer = () => {
  return (
    <div className="w-full h-[232px] bg-[#123557] mt-14 flex justify-center items-center">
        <div className="w-[1200px] h-[155px] border-t border-b border-[#FFFFFF] flex items-center justify-center gap-11">
       
       {/* Company Logo */}
  <div className='flex flex-col justify-center gap-2 '>
<Image src={logo} width={206} height={40} className='mt-5' alt='logo' />
<p className='font-Poppins font-light text-[16px] leading-8 text-white'>© R Singhania</p>
  </div>

  <div className='flex flex-col '>
    <h1 className='font-bold leading-6 text-[15px] text-white'>Company</h1>
    <p className='font-Inter font-light leading-6 text-[14px] text-white'>About</p>
    <p className='font-Inter font-light leading-6 text-[14px] text-white'>FAQ</p>
  </div>

  <div className='flex flex-col '>
    <h1 className='font-bold leading-6 text-[15px] text-white'>Terms</h1>
    <p className='font-Inter font-light leading-6 text-[14px] text-white'>Data Privacy</p>
    <p className='font-Inter font-light leading-6 text-[14px] text-white'>Terms</p>
    <p className='font-Inter font-light leading-6 text-[14px] text-white'>Accessibility</p>
  </div>

  <div className='flex flex-col '>
    <h1 className='font-bold leading-6 text-[15px] text-white'>Related</h1>
    <p className='font-Inter font-light leading-6 text-[14px] text-white'>Find Buyers</p>
    <p className='font-Inter font-light leading-6 text-[14px] text-white'>Feedback</p>
  </div>
 

<div className='w-[208px] h-[40px] flex gap-3 ml-64'>
<Image src={linkedin} alt='linkedin' width={40} height={40} />
<Image src={twitter} alt='twitter' width={40} height={40} />
<Image src={facebook} alt='facebook' width={40} height={40} />
<Image src={insta} alt='insta' width={40} height={40} />
</div>

        </div>
    </div>
  )
}

export default Footer