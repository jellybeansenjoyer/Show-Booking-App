import Toolbar from "@/components/Toolbar";
import Hero from "@/components/Hero"
import Search from "@/components/Search"
import Movies from "@/components/Movies";
const Page = () => {
    return (
    
      <div className="bg-main_blue w-full h-full">
        <Toolbar/>
        <Hero wallpaper="cinemahero.jpg" message="BOOK YOUR TICKETS FOR MOVIE" subtext="Safe, secure, reliable ticketing.Your ticket to live entertainment!"/>
        <Search/>
        <Movies />
      </div>
    );
  };
  
  export default Page;