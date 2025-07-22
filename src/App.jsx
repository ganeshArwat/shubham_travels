import Header from './ui/Header';
import Home from './features/Home';
import AboutUs from './features/AboutUs';
import Services from './features/Services';
import Vehicles from './features/Vehicles';
import ContactUs from './features/ContactUs';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from './ui/Footer';

function App() {
  return(
    <HelmetProvider>
      <Helmet>
        <title>The Travel Empire | Trusted Travel Agency</title>
        <meta name="description" content="Travel in comfort with The Travel Empire - vehicle rentals and trip planning made easy." />
      </Helmet>
      <div className="flex flex-col min-h-screen">

        {/* Fixed Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 pt-[88px] overflow-x-hidden bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <Home />
            <AboutUs />
            <Services />
            <Vehicles />
            <ContactUs />
            <Footer />
          </div>
        </main>
      </div>
    </HelmetProvider>
  )
}

export default App;
