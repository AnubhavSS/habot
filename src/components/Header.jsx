import Image from "next/image"
import habot from "../../public/habot.png"

const Header = () => {
  return (
    <div className="w-full h-[86px] flex flex-wrap justify-between items-center">
        <Image src={habot} width={181} height={43} alt="logo " className="ml-10"/>

        <div className="flex items-center gap-11 mr-10">
            <p className="font-Poppins font-normal text-[15px] leading-6 text-[#6D6E71]">Find Suppliers</p>
            <p className="font-Poppins font-normal text-[15px] leading-6 text-[#6D6E71]">Find Service Tags</p>
            <button className="md:w-[193px] w-[93px] h-[50px] bg-white font-Inter font-bold text-[15px] text-center text-[#00732F] border border-[#00732F] rounded-md">Login / Sign Up</button>
        </div>
    </div>
  )
}

export default Header