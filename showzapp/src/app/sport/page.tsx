import Toolbar from "@/components/Toolbar";
import Hero from "@/components/Hero"
import Events from "@/components/Events"
import Search from "@/components/Search"
const Page = () => {
    return (
      <div className="bg-main_blue w-full h-full">
        <Toolbar/>
        <Hero wallpaper="sportshero.jpg" message="BOOK YOUR TICKETS FOR SPORTS" subtext="We Don't take 3 strikes to compromise your security. Have fun with the match"/>
        <Search/>
        <Events />
      </div>
    );
  };
  
  export default Page;