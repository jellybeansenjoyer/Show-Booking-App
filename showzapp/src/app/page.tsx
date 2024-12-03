import Toolbar from "@/components/Toolbar";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Main from "@/components/Main";
const Page = () => {
  return (
    <div className="bg-main_blue w-full h-full">
      <Toolbar />
      <Hero />
      <Search />
      <Main />
    </div>
  );
};

export default Page;
