import Toolbar from "@/components/Toolbar";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Main from "@/components/Main"
import Footer from "@/components/Footer";
const Page = () => {
  return (
    <div className="bg-main_blue w-full h-full">
      <Toolbar />
      <Hero message="BOOK YOUR TICKETS FOR EVENTS" subtext="Safe, secure, reliable ticketing.Your ticket to live entertainment!" wallpaper="hero.jpg"/>
      <Search />
      <Main />
      <Footer/>
    </div>
  );
};

export default Page;
