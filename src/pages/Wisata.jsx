import React from 'react';

export default function Wisata() {
  // Nomor WA untuk pemesanan/pertanyaan paket wisata
  const WA_NUMBER = "6285141329483";

  const getWaUrl = (paketName) => {
    const message = `Halo Kak, saya ingin bertanya/reservasi mengenai ${paketName} Paket Wisata Pintar Torakur.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const packages = [
    {
      id: "A",
      title: "A. KUNJUNGAN PRODUKSI",
      desc: "Cocok untuk kunjungan singkat rombongan sekolah, instansi, maupun umum.",
      items: [
        { name: "Souvenir (1 pcs Torakur 225 gr) / peserta", price: "Rp 20.000" },
        { name: "Welcome Drink (Minuman Tradisional & Torakur) / peserta", price: "Rp 10.000" },
        { name: "Tip Pemandu (1 rombongan max 25 orang)", price: "Rp 50.000" },
      ],
      waMessage: "Paket Kunjungan Produksi"
    },
    {
      id: "B",
      title: "B. PEMBELAJARAN / PELATIHAN SEHARI",
      desc: "Program edukasi mendalam bersama pelaku usaha industri kreatif Torakur.",
      items: [
        { name: "Souvenir (1 pcs Torakur 225 gr) / peserta", price: "Rp 20.000" },
        { name: "Welcome Drink (Minuman Tradisional & Torakur) / peserta", price: "Rp 10.000" },
        { name: "Paparan Narasumber & Materi / Pelaku Usaha", price: "Biaya Menyesuaikan" },
        { name: "Biaya Kebersihan", price: "Rp 50.000" },
        { name: "Lokasi dan Kebersihan", price: "Rp 50.000" },
        { name: "Snack Dus + Minum", price: "Rp 10.000" },
        { name: "Makan (Nasi Dus) + Minum", price: "Rp 22.500" },
      ],
      waMessage: "Paket Pembelajaran / Pelatihan Sehari"
    },
    {
      id: "C",
      title: "C. MAGANG",
      desc: "Program pelatihan kerja/praktek industri secara intensif di rumah produksi.",
      items: [
        { name: "Souvenir (1 pcs Torakur 225 gr) / peserta", price: "Rp 20.000" },
        { name: "Snack 2× & Makan 3× / hari / peserta", price: "Rp 65.000" },
        { name: "Akomodasi / hari / peserta", price: "Rp 25.000" },
        { name: "Bahan Praktik (di luar waktu proses produksi)", price: "Rp 50.000" },
        { name: "Instruktur / Pendamping / Pelaku Usaha per hari", price: "Biaya Menyesuaikan" },
      ],
      waMessage: "Paket Magang"
    }
  ];

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header Halaman Wisata */}
      <div className="text-center space-y-3">
        <div>
          <span className="inline-block text-[#E65100] font-bold text-xs tracking-widest uppercase bg-orange-100 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            Agrowisata Edukasi Bandungan
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#800020] leading-tight">
          Paket Wisata Pintar TORAKUR
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Daftar biaya layanan kunjungan industri, pelatihan harian, hingga magang resmi di pusat produksi Torakur.
        </p>
        <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid Paket Wisata */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
          >
            <div>
              {/* Header Kartu */}
              <div className="bg-gradient-to-r from-[#800020] to-[#E65100] p-6 text-white space-y-1">
                <h2 className="text-xl font-bold tracking-wide">{pkg.title}</h2>
                <p className="text-orange-100 text-xs font-light">{pkg.desc}</p>
              </div>

              {/* Rincian Komponen Biaya */}
              <div className="p-6 space-y-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Rincian Biaya & Fasilitas:
                </h3>
                
                <ul className="space-y-3">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-start gap-3 text-sm pb-2.5 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="flex items-start gap-2">
                        <span className="text-[#E65100] font-bold">✓</span>
                        <span className="text-gray-700 font-medium">{item.name}</span>
                      </div>
                      <span className="font-bold text-[#800020] whitespace-nowrap text-right shrink-0">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tombol Booking WhatsApp */}
            <div className="p-6 pt-0">
              <a 
                href={getWaUrl(pkg.waMessage)}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 text-sm"
              >
                💬 Reservasi {pkg.title.split('.')[1]}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info Lokasi & Kontak Resmi Brosur */}
      <div className="bg-orange-50 border border-orange-200 rounded-3xl p-6 sm:p-8 space-y-4 text-center max-w-4xl mx-auto shadow-sm">
        <h3 className="font-bold text-lg text-[#800020]">📍 Alamat & Contact Person Resmi:</h3>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span className="font-semibold">081325333645 / 081238899595</span>
          </div>
          <span className="hidden sm:inline text-gray-300">•</span>
          <div className="flex items-center gap-2">
            <span>✉️</span>
            <span className="font-semibold">torakur.official@gmail.com</span>
          </div>
        </div>

        <p className="text-xs text-gray-500 pt-2 border-t border-orange-200">
          Ampelgading 5/6, Desa Kenteng, Kecamatan Bandungan, Kabupaten Semarang, Provinsi Jawa Tengah
        </p>
      </div>

    </div>
  );
}