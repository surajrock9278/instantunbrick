import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import BookingForm from './components/BookingForm';
import Admin from './pages/Admin';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const BookingPage = () => (
  <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto min-h-screen">
    <BookingForm />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-slate-900 min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
};

export default App;