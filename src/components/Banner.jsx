import banner from "../../public/banner.png";
import suitcase from '../../public/suitcase.png'
import placeholder from '../../public/placeholder.png'
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner.src})`,
        backgroundSize: "cover", // Optional: Adjusts the background image size
        backgroundPosition: "center", // Optional: Centers the background image
        width: "100%", // Optional: Sets the width of the div
        height: "500px", // Optional: Sets the height of the div
      }}
      className="flex flex-col justify-center items-center"
    >

        {/* Written Text */}
      <div className="w-[935px] h-[122px] flex flex-col gap-6 items-center">
        <h1 className="font-bold font-Poppins text-[55px]  text-center leading-10 text-white">
          Are You a Supplier?
        </h1>
        <h1 className="font-normal font-Poppins text-[55px]  text-center leading-10 text-white">
          Explore Matching Opportunities.
        </h1>
      </div>

{/* Search Input */}
<div className="w-[937px] h-[56px] flex gap-4 my-7">
<div className="flex items-center w-[400px] h-[56px] border border-solid bg-white border-[#D1D5DB] rounded-[5px]">
      <img src={suitcase.src} alt="Suitcase" className="ml-2 w-[20px] h-[20px] " />
      <input
        className="font-Poppins font-light text-[15px] leading-6 w-full h-full pl-3"
        style={{ color: '#6B7280', border: 'none', outline: 'none' }}
        placeholder="Search your required service here"
      />
    </div>

    <div className="flex items-center w-[400px] h-[56px] border border-solid bg-white border-[#D1D5DB] rounded-[5px]">
      <img src={placeholder.src} alt="Suitcase" className="ml-2 w-[20px] h-[20px] " />
      <input
        className="font-Poppins font-light text-[15px] leading-6 w-full h-full pl-3"
        style={{ color: '#6B7280', border: 'none', outline: 'none' }}
        placeholder="Search your required service here"
      />
    </div>

    <button className="w-[117px] h-[54px] border border-[#00732F] text-white bg-[#00732F] rounded-md font-Inter font-bold leading-6 text-[15px] text-center">Search</button>
</div>

<p className="font-Poppins font-bold text-[18px] text-center leading-7 text-white">Are you a buyer?<span className="font-normal underline ml-4">Click here if you are looking to post a requirements</span> </p>
    </div>
  );
};

export default Banner;
