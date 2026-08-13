import React, { useState, useEffect } from 'react';

// Import foto-foto pendukung dari folder assets
import foto1 from '../assets/foto1.jpeg';
import foto2 from '../assets/sejarah1.jpeg';
import foto3 from '../assets/sejarah2.jpeg';

export default function Sejarah({ navigateTo }) {
  const sejarahImages = [foto1, foto2, foto3];
  const [currentIdx, setCurrentIdx] = useState(0);

  // Slideshow otomatis
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % sejarahImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sejarahImages.length]);

  const prosesProduksi = [
    { no: 1, title: "Sortasi & Trimming", desc: "Memisahkan tomat yang bagus dan membuang bagian yang cacat/busuk serta memotong tangkai." },
    { no: 2, title: "Penusukan Buah", desc: "Melakukan penusukan tomat dengan garpu/alat khusus sebelum proses perendaman." },
    { no: 3, title: "Perendaman", desc: "Proses perendaman tomat menggunakan air kapur sirih selama 4 jam." },
    { no: 4, title: "Pengambilan Biji", desc: "Memisahkan biji secara manual dari daging buah tomat." },
    { no: 5, title: "Pencucian", desc: "Mencuci bersih tomat agar sisa air kapur dan biji benar-benar hilang." },
    { no: 6, title: "Perebusan", desc: "Perebusan dilakukan hingga kadar air dalam tomat berkurang." },
    { no: 7, title: "Penambahan Gula", desc: "Penambahan gula pasir murni pada saat tahap perebusan berlangsung." },
    { no: 8, title: "Penirisan & Penjemuran", desc: "Penirisan di atas nyiru (tampah) lalu dijemur dalam rumah kaca memanfaatkan sinar matahari." },
    { no: 9, title: "Pembentukan", desc: "Membentuk olahan manisan tomat hingga menyerupai buah kurma." },
    { no: 10, title: "Penjemuran Ulang", desc: "Penjemuran tahap kedua hingga tekstur menjadi kering dan kenyal." },
    { no: 11, title: "Pengemasan", desc: "Produk dikemas rapi sesuai dengan ukuran kemasan masing-masing." },
  ];

  return (
    <div className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header Halaman */}
      <div className="text-center space-y-3">
        <div>
          <span className="inline-block text-[#E65100] font-bold text-xs tracking-widest uppercase bg-orange-100 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            Company Profile & Sejarah
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#800020] leading-tight">
          Sejarah Pendirian Torakur
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Inovasi olahan tomat segar rasa kurma khas Kabupaten Semarang sejak tahun 2002.
        </p>
        <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Hero Slideshow */}
      <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-orange-100 bg-gray-900">
        {sejarahImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all ease-in-out ${
              index === currentIdx ? 'opacity-100 scale-105 duration-1000' : 'opacity-0 scale-100 duration-1000'
            }`}
            style={{
              backgroundImage: `url('${img}')`,
              transitionDuration: '1.8s'
            }}
          />
        ))}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 z-10">
          {sejarahImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-2 rounded-full transition-all duration-500 shadow-md ${
                idx === currentIdx ? 'w-8 bg-amber-400' : 'w-2 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Ringkasan Sejarah */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm space-y-4">
        <h2 className="text-2xl font-bold text-[#800020] border-b pb-3">Sejarah Pendirian</h2>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          UMKM <strong>Torakur (Tomat Rasa Kurma)</strong> didirikan oleh <strong>Bp. Adiarso</strong> bersama istrinya, <strong>Ibu Ngesti</strong>, di Bandungan pada tahun <strong>2002</strong>. Berawal dari rendahnya harga tomat saat panen raya, mereka berinovasi mengolah tomat menjadi manisan bercita rasa kurma sebagai solusi meningkatkan nilai jual hasil panen.
        </p>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Produk tersebut mendapat sambutan positif dari masyarakat dan melahirkan merek <strong>Torakur</strong>, yang kini telah dikenal luas sebagai oleh-oleh khas Bandungan. Dengan menggunakan tomat segar berkualitas dari hasil pertanian lokal, Torakur berkomitmen menghasilkan produk yang bermutu tinggi sekaligus mendukung pemberdayaan petani dan potensi pertanian daerah.
        </p>
      </section>

      {/* Visi & Misi */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 border-t-8 border-[#800020] border-x border-b border-gray-100 shadow-sm space-y-3">
          <h3 className="text-xl font-bold text-[#800020]">VISI</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Terwujudnya kesejahteraan masyarakat melalui peningkatan produksi, produktivitas, dan mutu produk olahan hasil pertanian.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border-t-8 border-[#E65100] border-x border-b border-gray-100 shadow-sm space-y-3">
          <h3 className="text-xl font-bold text-[#E65100]">MISI</h3>
          <ul className="text-gray-700 text-sm space-y-2">
            <li className="flex items-start gap-2">
              <span>✓</span>
              <span>Peningkatan taraf hidup petani dan keluarganya melalui pola kemitraan dengan petani tomat lokal.</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✓</span>
              <span>Mewujudkan makanan khas yang merupakan identitas daerah Bandungan.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Dasar Pemikiran & Tujuan */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-bold text-[#800020] border-b pb-3">Dasar Pemikiran & Tujuan</h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-bold text-[#E65100] text-base">Dasar Pemikiran Pasca Panen:</h4>
            <ul className="text-sm text-gray-700 space-y-1.5 list-disc list-inside">
              <li>Sifat produk sayuran mudah rusak & cepat busuk.</li>
              <li>Kondisi musim panen yang tidak menentu.</li>
              <li>Melimpahnya hasil panen yang memicu harga anjlok.</li>
              <li>Memberikan nilai tambah & memperpanjang masa simpan.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-[#E65100] text-base">Tujuan Pemberdayaan:</h4>
            <ul className="text-sm text-gray-700 space-y-1.5 list-disc list-inside">
              <li>Pemanfaatan Sumber Daya Alam & energi matahari.</li>
              <li>Pemanfaatan SDM: Membuka lapangan kerja lokal.</li>
              <li>Menciptakan makanan khas sebagai identitas daerah.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 11 Tahapan Proses Pembuatan */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#800020]">
            Proses Pembuatan Tradisional (11 Tahap)
          </h2>
          <p className="text-gray-500 text-sm">
            Diproduksi secara higienis dengan menerapkan prinsip-prinsip keamanan pangan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {prosesProduksi.map((step) => (
            <div key={step.no} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#800020] text-amber-300 font-bold flex items-center justify-center text-sm">
                {step.no}
              </div>
              <h3 className="font-bold text-gray-800 text-base">{step.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Belanja */}
      <div className="text-center pt-6">
        <button 
          onClick={() => navigateTo && navigateTo('store')} 
          className="bg-[#E65100] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all active:scale-95 inline-flex items-center gap-2"
        >
          Beli Oleh-Oleh Torakur Sekarang
        </button>
      </div>

    </div>
  );
}