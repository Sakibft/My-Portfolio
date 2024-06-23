import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main className="md:w-[1300px] mx-auto">
      <Banner></Banner>
      <Skills></Skills>
      {/* <Projects></Projects> */}
      <Contact></Contact>
    </main>
  );
}
