import Image from "next/image";
import man from "../../public/man.png";
import { gridInfo } from "../../data";
const BottomSection = () => {
  return (
    <div className="w-full h-[809px] flex flex-col justify-center items-center gap-14">
      {/* Text Part */}
      <h1 className="font-Poppins font-bold leading-10 text-[37px] text-[#222222] text-center mt-10">
        How it works?
      </h1>
      <p className="w-[839px] font-Poppins font-normal leading-6 text-center text-[17px] text-black">
        Buyers post their needs and review top suppliers, while suppliers
        complete profiles, connect with potential buyers, and build successful
        business relationships, sharing valuable feedback.
      </p>

      {/* Grid Part */}
      <div className="w-[1200px] h-[508px] grid grid-cols-2  md:grid-cols-3">
      {gridInfo.map((item, index) => {
        return (
          <div
            className={`w-[400px] h-[254px] ${index%2===0?"bg-[#E8FBFF]":"bg-white"} flex flex-col justify-center items-center gap-4`}
            key={index}
          >
            <Image src={item.image} alt="man" width={74} height={74} />
            <p className="font-Poppins font-medium leading-7 text-center text-[20px] w-[206px]">
              {item.text}
            </p>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default BottomSection;
