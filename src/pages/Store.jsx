import React, { useState } from 'react';
import { products, getWaUrl } from '../data/torakurData';

// Detail informasi spesifik produk
const productDetails = {
  1: {
    ingredients: "Buah Tomat Segar Pilihan, Gula Murni, Air, dan Kapur Sirih.",
    serving: "Langsung dikonsumsi sebagai cemilan sehat khas Bandungan.",
    producer: "TORAKUR Bandungan, Kab. Semarang, 50614 - Indonesia",
    highlights: [
      "Tekstur kenyal dan manis pas mirip kurma asli",
      "100% Bebas pengawet sintetis dan zat pewarna buatan",
      "Kemasan kotak praktis & rapi, cocok untuk oleh-oleh"
    ]
  },
  2: {
    ingredients: "Buah Tomat Segar Pilihan, Gula Murni, Air, dan Kapur Sirih.",
    serving: "Langsung dikonsumsi sebagai cemilan sehat keluarga.",
    producer: "TORAKUR Bandungan, Kab. Semarang, 50614 - Indonesia",
    highlights: [
      "Porsi lebih hemat dan puas untuk konsumsi keluarga",
      "Kaya akan likopen dan nutrisi alami buah tomat"
    ]
  },
  3: {
    // INFORMASI DARI GAMBAR BROSUR SIRUP JAHE "BU NGESTI"
    ingredients: "Jahe, Gula Aren, Gula Pasir, Air, Serai, Kapulaga, Cengkeh, Kayu Manis, Daun Jeruk, Daun Pandan, Vanili, Garam.",
    serving: "Kocok dahulu, tuangkan dalam air panas, bisa tambahkan kopi, susu, atau sesuai selera.",
    producer: "TORAKUR Bandungan, Kab. Semarang, 50614 - Indonesia",
    highlights: [
      "Terbuat dari rempah segar pilihan",
      "Dapat meredakan mual & muntah",
      "Mengurangi nyeri sendi & otot",
      "Membantu mengatasi perut kembung",
      "Meredakan batuk, serta menghangatkan tubuh"
    ]
  }
};

export default function Store() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Page Header */}
    <div className="text-center space-y-3">
      <div>
        <span className="inline-block text-[#E65100] font-bold text-xs tracking-widest uppercase bg-orange-100 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
          Katalog Resmi
        </span>
      </div>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-[#800020] leading-tight">
        Toko Online Torakur
      </h1>
      <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
        Klik kartu produk untuk melihat detail komposisi, khasiat, dan cara penyajian.
      </p>
      <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
    </div>

      {/* Grid Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
            onClick={() => openDetail(product)}
          >
            <div>
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-4 right-4 bg-[#800020] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {product.weight}
                </span>
                <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  Klik untuk Detail Produk
                </span>
              </div>
              
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-2xl text-gray-800 group-hover:text-[#E65100] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#E65100] font-black text-2xl">{product.price}</p>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{product.desc}</p>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => openDetail(product)}
                className="w-full bg-orange-50 hover:bg-orange-100 text-[#E65100] font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors mb-2"
              >
                Lihat Komposisi & Khasiat →
              </button>
              
              <a 
                href={getWaUrl(product.waMessage)}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 text-sm"
              >
                💬 Pesan via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DETAIL PRODUK */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-orange-100 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="relative h-60 sm:h-64 w-full bg-gray-100">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={closeDetail}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition-all shadow-md"
              >
                ✕
              </button>
              <span className="absolute bottom-4 left-4 bg-[#800020] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                Kemasan: {selectedProduct.weight}
              </span>
            </div>

            {/* Isi Konten Modal */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#800020]">
                  {selectedProduct.name}
                </h2>
                <p className="text-[#E65100] font-black text-2xl mt-1">
                  {selectedProduct.price}
                </p>
              </div>

              {/* Manfaat / Khasiat */}
              <div className="space-y-2.5">
                <h3 className="font-bold text-sm text-gray-800 uppercase tracking-wider">
                  Manfaat & Khasiat
                </h3>
                <ul className="space-y-2">
                  {(productDetails[selectedProduct.id]?.highlights || []).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="text-[#E65100] font-bold">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Komposisi Bahan */}
              <div className="bg-orange-50/70 border border-orange-200/60 rounded-2xl p-4 space-y-1.5">
                <h3 className="font-bold text-sm text-[#800020] flex items-center gap-2">
                  <span>🌱</span> Komposisi
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {productDetails[selectedProduct.id]?.ingredients}
                </p>
              </div>

              {/* Cara Penyajian */}
              {productDetails[selectedProduct.id]?.serving && (
                <div className="bg-amber-50/80 border border-amber-200/60 rounded-2xl p-4 space-y-1.5">
                  <h3 className="font-bold text-sm text-[#800020] flex items-center gap-2">
                    <span>☕</span> Cara Penyajian
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {productDetails[selectedProduct.id]?.serving}
                  </p>
                </div>
              )}

              {/* Diproduksi Oleh */}
              <div className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                <strong>Diproduksi Oleh:</strong> {productDetails[selectedProduct.id]?.producer}
              </div>

              {/* Tombol Action Modal */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a 
                  href={getWaUrl(selectedProduct.waMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md text-sm text-center"
                >
                  💬 Beli Langsung via WhatsApp
                </a>
                <button
                  onClick={closeDetail}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3.5 px-6 rounded-xl text-sm transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}