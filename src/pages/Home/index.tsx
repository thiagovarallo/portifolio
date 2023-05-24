import AboutMe from "../../components/AboutMe";
import Header from "../../components/Header";

export default function Home() {
    return (
        <main className="w-full min-h-screen">
            <Header />
            <AboutMe />
        </main>
    )
}