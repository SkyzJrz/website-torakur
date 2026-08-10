import React, { useState } from 'react';

export default function Navbar({ currentPage, navigateTo }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (page) => {
    navigateTo(page);
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'sejarah', label: 'Tentang Kami' },
    { id: 'store', label: 'Katalog Produk' },
    { id: 'wisata', label: 'Paket Wisata' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#800020] via-[#940027] to-[#E65100] text-white shadow-md backdrop-blur-md">
      {/* Menggunakan w-full dan padding horizontal agar pas di ujung layar full screen */}
      <div className="w-full px-6 sm:px-10 h-24 flex items-center justify-between">
        
        {/* Brand Logo & Teks Bawah di Pojok Kiri */}
        <div 
          onClick={() => handleNav('home')} 
          className="flex flex-col items-start justify-center cursor-pointer group select-none"
        >
          <img 
            src="/logo-torakur.png" 
            alt="Logo Torakur" 
            className="h-9 sm:h-11 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
          />
          <span className="text-[10px] sm:text-xs text-amber-200 tracking-widest uppercase mt-1.5 font-bold font-sans drop-shadow-sm">
            Tomat Rasa Kurma
          </span>
        </div>

        {/* Desktop Navigation di Pojok Kanan */}
        <nav className="hidden md:flex items-center space-x-1 bg-black/10 p-1.5 rounded-full border border-white/10">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-[#800020] shadow-md font-bold scale-105'
                    : 'text-orange-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 transition-all focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#800020] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`w-full text-left px-5 py-3.5 rounded-xl text-base font-medium flex items-center justify-between transition-all ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-[#E65100] to-orange-600 text-white font-bold shadow-md'
                  : 'text-orange-100 hover:bg-white/5'
              }`}
            >
              <span>{item.label}</span>
              {currentPage === item.id && <span>•</span>}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}