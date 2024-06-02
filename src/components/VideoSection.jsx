import Image from "next/image";
import thumbnail from "../../public/thumbnail.png";
import yt from "../../public/yt.png";
import checked from "../../public/checked.png";
const VideoSection = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[1316px] h-[623px] rounded-md bg-[#072F57] flex items-center justify-around">
        {/* Left Part */}
        <div className="relative">
          <Image
            src={thumbnail}
            alt="thumbnail"
            width={640}
            height={350}
            className=""
          />
          <Image
            src={yt}
            alt="youtube"
            width={106}
            height={75}
            className="absolute top-32 left-64 "
          />
        </div>

        {/* Right Part */}
        <div>
          <div className="flex gap-20">
            <h1 className="font-Poppins font-bold leading-8 text-[26px] text-[#EB7150] text-center w-[102px] border-b-4 border-[#EB7150]">
              Buyer
            </h1>
            <h1 className="font-Poppins font-bold leading-8 text-[26px] text-white">
              Supplier
            </h1>
          </div>

          <div className="flex flex-col mt-10 w-[461px] h-[156px]">
            <div className="flex justify-start items-center gap-5">
              <Image src={checked} alt="checked" width={18} height={18} />
              <p className="font-Poppins font-medium leading-10 text-[18px] text-white">
                Post your requirements.
              </p>
            </div>

            <div className="flex justify-start items-center gap-5">
              <Image src={checked} alt="checked" width={18} height={18} />
              <p className="font-Poppins font-medium leading-10 text-[18px] text-white">
                Sit back for multiple suppliers to contact you.
              </p>
            </div>

            <div className="flex justify-start items-center gap-5">
              <Image src={checked} alt="checked" width={18} height={18} />
              <p className="font-Poppins font-medium leading-10 text-[18px] text-white">
                Choose among the suppliers based on the ratings and reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
