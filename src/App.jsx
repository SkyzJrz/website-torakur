import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sejarah from './pages/Sejarah';
import Store from './pages/Store';
import Wisata from './pages/Wisata';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />
      
      <main className="flex-1">
        {currentPage === 'home' && <Home navigateTo={navigateTo} />}
        {currentPage === 'sejarah' && <Sejarah navigateTo={navigateTo} />}
        {currentPage === 'store' && <Store />}
        {currentPage === 'wisata' && <Wisata />}
      </main>

      <Footer />
    </div>
  );
}