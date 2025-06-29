import About from "@/components/aboutSection/About";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/contactSection/Contact";
import MyWork from "@/components/myWorkSection/MyWork";
import SkillSection from "@/components/skillSection/SkillSection";
import Loader from "./loading/page";


export default function Home() {
  return (
    <div>
      <main className="max-w-7xl mx-auto">
        <Banner />
        <SkillSection />
        <About />
        <MyWork />
        <Contact />
      </main>
    </div>
  );
}
