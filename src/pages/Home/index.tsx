import AboutMe from "../../components/AboutMe";
import Header from "../../components/Header";
import Projects from "../../components/Projects";

export default function Home() {
    return (
        <main className="w-full min-h-screen">
            <Header />
            <AboutMe />
            <Projects />
        </main>
    )
}