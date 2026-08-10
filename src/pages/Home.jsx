import React, { useState, useEffect } from 'react';
import { products, getWaUrl } from '../data/torakurData';

// 1. Import foto Anda dari folder assets
// (Sesuaikan nama file dengan nama foto yang Anda masukkan ke folder src/assets/)
import foto1 from '../assets/foto1.jpeg';
import foto2 from '../assets/foto2.jpeg';
import foto3 from '../assets/foto3.jpeg';

export default function Home({ navigateTo }) {
  // 2. Masukkan variabel foto ke dalam array slideshow
  const backgroundImages = [foto1, foto2, foto3];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Berganti setiap 5 detik

    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Banner Section dengan Background Foto Sendiri */}
      <section className="relative bg-gradient-to-br from-[#800020] via-[#9e0d29] to-[#E65100] text-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        
        {/* Render Slideshow Background */}
        {backgroundImages.map((img, index) => {
          const isActive = index === currentBg;
          return (
            <div 
              key={index}
              className={`absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay transition-all ease-in-out ${
                isActive ? 'opacity-40 scale-105 duration-1000' : 'opacity-0 scale-100 duration-1000'
              }`}
              style={{ 
                backgroundImage: `url('${img}')`,
                transitionDuration: '1.5s'
              }} 
            />
          );
        })}
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
            <span>✨</span> Oleh-Oleh Khas Bandungan, Kabupaten Semarang
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-none">
            Manisnya Sejarah <br className="hidden sm:block"/>
            <span className="text-amber-300">di Setiap Gigitan!</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-orange-100 max-w-2xl mx-auto font-normal leading-relaxed">
            Inovasi olahan manisan tomat rasa kurma pertama khas kaki Gunung Merbabu. Diproses higienis, tanpa pengawet buatan, dan penuh cita rasa autentik.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button 
              onClick={() => navigateTo('store')} 
              className="w-full sm:w-auto bg-[#E65100] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              Belanja Produk Torakur
            </button>
            <button 
              onClick={() => navigateTo('sejarah')} 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-md transition-all active:scale-95"
            >
              Pelajari Sejarah →
            </button>
          </div>

          {/* Indikator Titik Slideshow */}
          <div className="flex justify-center items-center gap-2 pt-4">
            {backgroundImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentBg(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentBg ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-orange-50/50 border border-orange-100 p-6 rounded-2xl text-center space-y-2">
            <div className="text-3xl">🌱</div>
            <h3 className="font-bold text-lg text-[#800020]">100% Bahan Alami</h3>
            <p className="text-sm text-gray-600">Dibuat dari buah tomat segar pilihan petani Bandungan.</p>
          </div>
          <div className="bg-orange-50/50 border border-orange-100 p-6 rounded-2xl text-center space-y-2">
            <div className="text-3xl">🍯</div>
            <h3 className="font-bold text-lg text-[#800020]">Rasa Legit Khas Kurma</h3>
            <p className="text-sm text-gray-600">Tekstur dan rasa manis pas tanpa pemanis sintetis.</p>
          </div>
          <div className="bg-orange-50/50 border border-orange-100 p-6 rounded-2xl text-center space-y-2">
            <div className="text-3xl">📦</div>
            <h3 className="font-bold text-lg text-[#800020]">Siap Kirim Se-Indonesia</h3>
            <p className="text-sm text-gray-600">Kemasan aman dan tahan lama untuk oleh-oleh keluarga.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#800020]">Varian Produk Favorit</h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
            Pesan mudah melalui tombol WhatsApp di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div 
              key={p.id} 
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-3 right-3 bg-[#800020] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {p.weight}
                  </span>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-xl text-gray-800">{p.name}</h3>
                  <p className="text-[#E65100] font-black text-2xl">{p.price}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a 
                  href={getWaUrl(p.waMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 text-sm"
                >
                  💬 Pesan via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}