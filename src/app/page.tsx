import Projects from "@/app/components/Projects";
import Header from "@/app/components/Header";
import Skills from "@/app/components/Skills";
import About from "@/app/components/About";
import WorkProgress from "@/app/components/WorkProgress";
import Footer from "@/app/components/Footer";
import ContactUs from "@/app/components/ContactUs";
import WhyChoosingUs from "@/app/components/WhyChoosingUs";

export default function Home() {
    return (
        //  bg-[#18181b]
        <main className="flex flex-col justify-center">
            <Header />

            <Projects />

            <About />

            <Skills />

            <WorkProgress />

            {/*<WhyChoosingUs />*/}

            <ContactUs />

            <Footer />

        </main>
    );
}
