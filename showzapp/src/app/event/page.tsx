import Toolbar from "@/components/Toolbar";
import Hero from "@/components/Hero"
import Main from "@/components/Main"
import Search from "@/components/Search"
import Sports from "@/components/Sports";

const Page = () => {
    return (
    
      <div className="bg-main_blue w-full h-full">
        <Toolbar/>
        <Hero wallpaper="concert.jpg" message="BOOK YOUR TICKETS FOR EVENTS" subtext="Book Hot Events happening in your city at a promise of Security"/>
        <Search/>
        <Sports />
      </div>
    );
  };
  
  export default Page;