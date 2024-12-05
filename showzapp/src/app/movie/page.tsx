import Toolbar from "@/components/Toolbar";
import HeroComp from "@/components/HeroComp"
import Search from "@/components/Search"
import Movies from "@/components/Movies";
const Page = () => {
    return (
    
      <div className="bg-main_blue w-full h-full">
        <Toolbar/>
        <HeroComp wallpaper="cinemahero.jpg" message="BOOK YOUR TICKETS FOR MOVIE" subtext="Safe, secure, reliable ticketing.Your ticket to live entertainment!"/>
        <Search/>
        <Movies />
      </div>
    );
  };
  
  export default Page;