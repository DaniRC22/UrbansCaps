import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Collection from './components/Collection'
// import Testimonials from './components/Testimonials'
import About from './components/About'
import NewsletterCTA from './components/NewsletterCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Collection />
        {/* <Testimonials /> */}
        <About />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  )
}
