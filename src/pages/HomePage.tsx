
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

interface HomePageProps {
    loading: boolean;
}

const HomePage = ({ loading }: HomePageProps) => {
    return (
        <div className="w-full relative overflow-x-clip bg-white selection:bg-blue-100 selection:text-blue-900 min-h-screen">
            <Navbar />
            <Hero startAnimation={!loading} />
            <About />
            <Projects />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default HomePage;
