import Toolbar from "@/components/Toolbar";
import Hero from "@/components/Hero"
import Main from "@/components/Main"
import Search from "@/components/Search"
const Page = () => {
    return (
    
      <div className="bg-main_blue w-full h-full">
        <Toolbar/>
        <Hero wallpaper="cinemahero.jpg" message="BOOK YOUR TICKETS FOR MOVIE" subtext="Safe, secure, reliable ticketing.Your ticket to live entertainment!"/>
        <Search/>
        <Main />
      </div>
    );
  };
  
  export default Page;