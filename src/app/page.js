import About from "@/components/aboutSection/About";
import Banner from "@/components/banner/Banner";
import MyWork from "@/components/myWorkSection/MyWork";
import SkillSection from "@/components/skillSection/SkillSection";


export default function Home() {
  return (
    <div>
      <main className="max-w-7xl mx-auto">
        <Banner />
        <SkillSection />
        <About />
        <MyWork/>
      </main>
    </div>
  );
}
