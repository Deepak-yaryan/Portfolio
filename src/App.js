import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import { useState} from 'react';
import ScrollReveal from 'scrollreveal'

function App() {
  const [darkMode, setDarkMode] = useState(true);
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200,
      mobile: false
    });


return (
  <>
    <div className={darkMode && "dark"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className='px-4 dark:bg-gradient-to-b dark:from-black dark:via-black dark:to-gray-800 dark:text-white bg-white text-black'>
        <Home ScrollReveal={ScrollReveal} />
      </section>

      <section className='px-4 dark:bg-gradient-to-b dark:to-black dark:via-black dark:from-gray-800 dark:text-white bg-white text-black'>
        <About ScrollReveal={ScrollReveal} />
      </section>

      <section className='px-4 dark:bg-gradient-to-b dark:from-black dark:via-black dark:to-gray-800 dark:text-white bg-white text-black'>
        <Experience ScrollReveal={ScrollReveal} />
      </section>

      <section className='px-4 dark:bg-gradient-to-b dark:to-black dark:via-black dark:from-gray-800 dark:text-white bg-white text-black'>
        <Portfolio ScrollReveal={ScrollReveal} />
      </section>

      <section className='px-4 dark:bg-gradient-to-b dark:from-black dark:via-black dark:to-gray-800 dark:text-white bg-white text-black'>
        <Contact ScrollReveal={ScrollReveal} />
      </section>

      <section className='px-4 dark:bg-gradient-to-b dark:to-black dark:via-black dark:from-gray-800 dark:text-white bg-white text-black'>
        <Footer />
      </section>

      <SocialLinks />

    </div>
  </>
);
}

export default App;
