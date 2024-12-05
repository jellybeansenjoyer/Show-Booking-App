import Toolbar from "@/components/Toolbar";
import HeroComp from "@/components/HeroComp"
import Events from "@/components/Events"
import Search from "@/components/Search"
import Footer from "@/components/Footer";
const Page = () => {
    return (
      <div className="bg-main_blue w-full h-full">
        <Toolbar/>
        <HeroComp wallpaper="sportshero.jpg" message="BOOK YOUR TICKETS FOR SPORTS" subtext="We Don't take 3 strikes to compromise your security. Have fun with the match"/>
        <Search/>
        <Events />
        <Footer/>
      </div>
    );
  };
  
  export default Page;