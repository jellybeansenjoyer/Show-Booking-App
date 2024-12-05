import Toolbar from "@/components/Toolbar";
import HeroComp from "@/components/HeroComp"
import Search from "@/components/Search"
import Sports from "@/components/Sports";
import Footer from "@/components/Footer"
const Page = () => {
    return (
    
      <div className="bg-main_blue w-full h-full">
        <Toolbar/>
        <HeroComp wallpaper="concert.jpg" message="BOOK YOUR TICKETS FOR EVENTS" subtext="Book Hot Events happening in your city at a promise of Security"/>
        <Search/>
        <Sports />
        <Footer />
      </div>
    );
  };
  
  export default Page;