import foto1 from '../assets/torakurkecil.jpg';
import foto2 from '../assets/torakurbesar.jpg';
import foto3 from '../assets/sirupjahe.jpg';

export const WA_NUMBER = "6285141329483"; // Nomor WhatsApp resmi Torakur

export const products = [
  {
    id: 1,
    name: "Torakur Kecil (225 gr)",
    price: "Rp 20.000",
    weight: "225 gr",
    image: foto1, 
    desc: "Manisan tomat rasa kurma kemasan kotak premium, cocok untuk oleh-oleh spesial keluarga.",
    waMessage: "Halo Kak, saya ingin memesan Torakur Kecil (225 gr)."
  },
  {
    id: 2,
    name: "Torakur Besar (500 gr)",
    price: "Rp 40.000",
    weight: "500 gr",
    image: foto2,
    desc: "Porsi lebih puas dengan kemasan besar, nikmat disantap bersama keluarga tercinta.",
    waMessage: "Halo Kak, saya ingin memesan Torakur Besar (500 gr)."
  },
  {
    id: 3,
    name: 'Sirup Jahe "Bu Ngesti"',
    price: "Rp 25.000",
    weight: "460mL",
    image: foto3, // Atau ganti dengan foto khusus Sirup Jahe jika ada
    desc: "Sirup jahe hangat herbal alami terbuat dari rempah segar pilihan khsasis Bandungan.",
    waMessage: 'Halo Kak, saya ingin memesan Sirup Jahe "Bu Ngesti".'
  }
];

export const tourPackages = [
  {
    id: 1,
    name: "Paket Kunjungan Produksi",
    subtitle: "Kunjungan singkat untuk rombongan sekolah/instansi",
    waMessage: "Halo Kak, saya tertarik booking Paket Kunjungan Produksi."
  }
];

export const getWaUrl = (message) => {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
};