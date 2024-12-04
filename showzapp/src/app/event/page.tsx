import Toolbar from "@/components/Toolbar";
import Hero from "@/components/Hero"
import Events from "@/components/Events"
import Search from "@/components/Search"
const Page = () => {
    return (
    
      <div className="bg-main_blue w-full h-full">
        <Toolbar/>
        <Hero wallpaper="concert.jpg" message="BOOK YOUR TICKETS FOR EVENTS" subtext="Book Hot Events happening in your city at a promise of Security"/>
        <Search/>
        <Events />
      </div>
    );
  };
  
  export default Page;