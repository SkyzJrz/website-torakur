import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#800020] via-[#900024] to-[#E65100] text-white pt-12 pb-8 border-t-4 border-amber-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10 text-sm">
        
        {/* Col 1 */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <img 
            src="/logo-torakur.png" 
            alt="Logo Torakur" 
            className="h-9 sm:h-11 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
          />
          
            <span className="font-bold text-lg text-amber-300">TORAKUR OFFICIAL</span>
          </div>
          <p className="text-orange-100 leading-relaxed text-xs sm:text-sm">
            Ampelgading 5/6, Desa Kenteng, Kecamatan Bandungan, Kabupaten Semarang, Provinsi Jawa Tengah
          </p>
        </div>

        {/* Col 2 */}
        <div className="space-y-3">
          <h4 className="font-bold text-amber-300 uppercase tracking-wider text-xs">Kontak & Order</h4>
          <p className="text-orange-100">WhatsApp : +62 851-4132-9483</p>
          <p className="text-orange-100">Contact Person : </p>
          <p className="text-orange-100">+62 813-2533-3645 </p>
          <p className="text-orange-100">+62 812-3889-9595 </p>
          <p className="text-orange-100">Email: torakur.official@gmail.com</p>
        </div>

        <div className="space-y-3">
            <h4 className="font-bold text-amber-300 uppercase text-xs tracking-wider">Media Sosial</h4>
            <div className="flex flex-col space-y-2 text-sm text-orange-100">
              <a 
                href="https://www.instagram.com/torakur.id" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors"
              >
                • Instagram: @torakur.id
              </a>
              <a 
                href="https://www.facebook.com/TorakurOfficial" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors"
              >
                • Facebook: Pusat Oleh-Oleh Torakur
              </a>
            </div>
          </div>

      </div>

      <div className="text-center pt-6 text-xs text-orange-200">
        &copy; 2026 Torakur Official. All Rights Reserved.
      </div>
    </footer>
  );
}