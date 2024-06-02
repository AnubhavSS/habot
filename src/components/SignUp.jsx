import { cities } from "../../data"

const SignUp = () => {
  return (
    <div className="w-full flex justify-center items-center">
        <div  className="w-[1316px] h-[500px] flex justify-between items-center ">

 {/* Left Part */}
    <div className="flex flex-col gap-6">
        <h1 className="font-bold font-Poppins text-[37px] leading-10 w-[563px] text-black">Ready to dive into HABOT?</h1>
         <p className="font-Poppins font-light text-[17px] leading-7 text-black w-[620px] h-[120px]">Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
   <button className="font-Poppins font-bold text-[18px] leading-6 text-center text-white w-[317px] h-[54px] rounded-md bg-[#00732F] border border-[#00732F]">Sign up Today !</button>
    </div>
 
 {/* Right Part */}
 <div className="w-[541px] h-[244px] grid grid-cols-2">
    {cities.map((item,index)=>
<div key={index} className="w-[260px]  h-[65px] border border-[#E7760D] bg-white rounded-md font-Inter font-medium text-[18px] text-black flex justify-center items-center leading-8">
   {item}
</div>
)}
 </div>
        </div>
    </div>
  )
}

export default SignUp