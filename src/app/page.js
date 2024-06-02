import Banner from "@/components/Banner";
import BottomSection from "@/components/BottomSection";
import GetVerified from "@/components/GetVerified";
import Header from "@/components/Header";
import SignUp from "@/components/SignUp";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <>
   <Header/>
   <Banner/>
   <SignUp/>
   <VideoSection/>
   <GetVerified/>
   <BottomSection/>
   <Footer/>
   </>
  );
}
