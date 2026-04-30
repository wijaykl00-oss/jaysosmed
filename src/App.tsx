/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  Eye, 
  Share2, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Plus, 
  MessageCircle,
  Zap,
  ShieldCheck,
  Clock,
  Menu,
  X,
  TrendingUp,
  Instagram as InstagramIcon,
  Facebook,
  Twitter,
  Video
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import qrisImage from '../foto/qrisss.png';

// --- Data ---

const WHATSAPP_NUMBER = "6285773617352";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const INSTAGRAM_LINK = "https://www.instagram.com/jaysosmed";

const PRICE_LIST = [
  {
    category: "Followers TikTok",
    icon: Users,
    options: [
      { qty: "100", price: "6.000", value: 6000 },
      { qty: "200", price: "11.000", value: 11000 },
      { qty: "300", price: "16.000", value: 16000 },
      { qty: "400", price: "21.000", value: 21000 },
      { qty: "500", price: "26.000", value: 26000 },
      { qty: "600", price: "31.000", value: 31000 },
      { qty: "700", price: "36.000", value: 36000 },
      { qty: "800", price: "41.000", value: 41000 },
      { qty: "900", price: "46.000", value: 46000 },
      { qty: "1000", price: "51.000", value: 51000 },
    ]
  },
  {
    category: "Like TikTok",
    icon: Heart,
    options: [
      { qty: "100", price: "2.000", value: 2000 },
      { qty: "200", price: "4.000", value: 4000 },
      { qty: "300", price: "6.000", value: 6000 },
      { qty: "400", price: "8.000", value: 8000 },
      { qty: "500", price: "10.000", value: 10000 },
      { qty: "600", price: "12.000", value: 12000 },
      { qty: "700", price: "14.000", value: 14000 },
      { qty: "800", price: "16.000", value: 16000 },
      { qty: "900", price: "18.000", value: 18000 },
      { qty: "1000", price: "20.000", value: 20000 },
    ]
  },
  {
    category: "View TikTok & Instagram",
    icon: Eye,
    options: [
      { qty: "2.500", price: "2.500", value: 2500 },
      { qty: "5.000", price: "4.500", value: 4500 },
      { qty: "7.500", price: "6.500", value: 6500 },
      { qty: "10.000", price: "8.500", value: 8500 },
      { qty: "12.500", price: "10.500", value: 10500 },
      { qty: "15.000", price: "12.500", value: 12500 },
      { qty: "17.500", price: "14.500", value: 14500 },
      { qty: "20.000", price: "16.500", value: 16500 },
      { qty: "25.000", price: "18.500", value: 18500 },
      { qty: "30.000", price: "20.500", value: 20500 },
    ]
  },
  {
    category: "Share TikTok",
    icon: Share2,
    options: [
      { qty: "100", price: "3.000", value: 3000 },
      { qty: "200", price: "6.000", value: 6000 },
      { qty: "300", price: "9.000", value: 9000 },
      { qty: "400", price: "12.000", value: 12000 },
      { qty: "500", price: "15.000", value: 15000 },
      { qty: "600", price: "18.000", value: 18000 },
      { qty: "700", price: "21.000", value: 21000 },
      { qty: "800", price: "24.000", value: 24000 },
      { qty: "900", price: "27.000", value: 27000 },
      { qty: "1000", price: "30.000", value: 30000 },
    ]
  },
  {
    category: "Followers Instagram",
    icon: InstagramIcon,
    promo: "PAKET MURAH: 5.000 Followers • Rp 80.000",
    options: [
      { qty: "100", price: "3.000", value: 3000 },
      { qty: "200", price: "6.000", value: 6000 },
      { qty: "300", price: "9.000", value: 9000 },
      { qty: "400", price: "11.000", value: 11000 },
      { qty: "500", price: "14.000", value: 14000 },
      { qty: "600", price: "17.000", value: 17000 },
      { qty: "700", price: "19.000", value: 19000 },
      { qty: "800", price: "21.000", value: 21000 },
      { qty: "900", price: "24.000", value: 24000 },
      { qty: "1000", price: "27.000", value: 27000 },
      { qty: "5000 (PROMO)", price: "80.000", value: 80000 },
    ]
  },
  {
    category: "Followers IG (Indonesia)",
    icon: InstagramIcon,
    promo: "PAKET MURAH: 5.000 Followers • Rp 180.000",
    options: [
      { qty: "100", price: "11.000", value: 11000 },
      { qty: "200", price: "17.000", value: 17000 },
      { qty: "300", price: "23.000", value: 23000 },
      { qty: "400", price: "28.000", value: 28000 },
      { qty: "500", price: "34.000", value: 34000 },
      { qty: "600", price: "39.000", value: 39000 },
      { qty: "700", price: "44.000", value: 44000 },
      { qty: "800", price: "50.000", value: 50000 },
      { qty: "900", price: "56.000", value: 56000 },
      { qty: "1000", price: "61.000", value: 61000 },
      { qty: "5000 (PROMO)", price: "180.000", value: 180000 },
    ]
  },
  {
    category: "Like Instagram",
    icon: Heart,
    options: [
      { qty: "100", price: "4.000", value: 4000 },
      { qty: "200", price: "7.000", value: 7000 },
      { qty: "300", price: "10.000", value: 10000 },
      { qty: "400", price: "13.000", value: 13000 },
      { qty: "500", price: "16.000", value: 16000 },
      { qty: "600", price: "19.000", value: 19000 },
      { qty: "1000", price: "28.000", value: 28000 },
    ]
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Harga', href: '#harga' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold font-display text-purple-700">jay<span className="text-gray-900">sosmed</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-200"
            >
              Order Sekarang
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-purple-600 rounded-lg" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full mt-4 bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-center">
                Order di WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-16 text-center">
    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold font-display mb-4 text-gray-900">
      {title}
    </motion.h2>
    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg text-gray-600 max-w-2xl mx-auto">
      {subtitle}
    </motion.p>
  </div>
);

const PricingCard = ({ item, onOrder }: any) => {
  const [selectedOptIdx, setSelectedOptIdx] = useState(0);
  const [targetLink, setTargetLink] = useState('');
  const [error, setError] = useState(false);

  const selectedOpt = item.options[selectedOptIdx];

  const handleOrder = () => {
    if (!targetLink.trim()) {
      setError(true);
      return;
    }
    setError(false);
    onOrder({
      category: item.category,
      qty: selectedOpt.qty,
      price: selectedOpt.price,
      target: targetLink
    });
  };

  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col h-full border-b-4 border-b-purple-600">
      <div className="p-8 pb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
          <item.icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{item.category}</h3>
        
        {item.promo && (
          <div className="bg-purple-50 p-3 rounded-xl mb-6 text-xs font-bold text-purple-700 border border-purple-100">
            🔥 {item.promo}
          </div>
        )}

        <div className="space-y-4 mb-2">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Pilih Jumlah</label>
            <select 
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-purple-500 focus:border-purple-500 block p-3 outline-hidden"
              value={selectedOptIdx}
              onChange={(e) => setSelectedOptIdx(Number(e.target.value))}
            >
              {item.options.map((opt: any, idx: number) => (
                <option key={idx} value={idx}>
                  {opt.qty} - Rp {opt.price}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Username / Link Target</label>
            <input 
              type="text" 
              placeholder="@username atau URL" 
              value={targetLink}
              onChange={(e) => {
                setTargetLink(e.target.value);
                if (e.target.value) setError(false);
              }}
              className={`w-full bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-200'} text-gray-900 text-sm rounded-xl focus:ring-purple-500 focus:border-purple-500 block p-3 outline-hidden`}
            />
            {error && <span className="text-xs text-red-500 mt-1 block">Username/Link wajib diisi!</span>}
          </div>
        </div>
      </div>
      <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500 text-sm font-medium">Total Harga:</span>
          <span className="text-xl font-bold text-purple-700">Rp {selectedOpt.price}</span>
        </div>
        <button 
          onClick={handleOrder}
          className="w-full bg-white border-2 border-purple-600 text-purple-600 py-3 rounded-xl font-bold flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all shadow-sm cursor-pointer"
        >
          Checkout Sekarang
        </button>
      </div>
    </motion.div>
  );
};

const FloatingWhatsApp = () => (
  <motion.a 
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-200 flex items-center space-x-2"
  >
    <MessageCircle size={32} />
    <span className="hidden sm:inline font-bold pr-2">Chat Kami</span>
  </motion.a>
);

export default function App() {
  const [orderData, setOrderData] = useState<any>(null);

  const handleOrderConfirm = () => {
    if (!orderData) return;
    const text = `Halo JaySosmed, saya mau konfirmasi pembayaran order saya:
%0A
%0A*Layanan:* ${orderData.category}
%0A*Jumlah:* ${orderData.qty}
%0A*Target:* ${orderData.target}
%0A*Total Harga:* Rp ${orderData.price}
%0A
%0ASaya sudah melakukan transfer melalui QRIS. Mohon segera diproses, terima kasih!`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setOrderData(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FloatingWhatsApp />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 bg-linear-to-b from-purple-50 to-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl -z-10 opacity-50" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:w-1/2">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-6">
              🚀 Fast Respon • Aman • Terpercaya
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold font-display leading-tight text-gray-900 mb-8">
              Jasa Suntik <br /><span className="text-purple-600">SOSMED Murah</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Tingkatkan branding dan popularitas sosial media Anda dengan followers, likes, dan views berkualitas tinggi dalam sekejap. Tanpa login & password!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#harga" className="px-8 py-4 bg-purple-600 text-white rounded-2xl font-bold text-lg hover:bg-purple-700 shadow-xl shadow-purple-200 flex items-center">
                Lihat Harga <ArrowRight className="ml-2" />
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-2xl font-bold text-lg hover:border-purple-300 flex items-center">
                <InstagramIcon className="mr-2" /> @jaysosmed
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="lg:w-1/2 relative">
            <div className="glass-card rounded-[48px] p-4 p-8 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800" 
                alt="Social Media Growth"
                className="rounded-[32px] w-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl z-20 flex items-center border border-purple-50">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mr-4">
                <ShieldCheck size={28} />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-bold uppercase">Status</div>
                <div className="text-xl font-bold text-gray-900">100% Aman</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing List */}
      <section id="harga" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Daftar Harga Layanan" 
            subtitle="Pilih jumlah layanan yang diinginkan. Masukkan username/link, dan lakukan pembayaran instan."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRICE_LIST.map((item, idx) => (
              <PricingCard key={idx} item={item} onOrder={(data: any) => setOrderData(data)} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Jay Sosmed */}
      <section id="layanan" className="py-24 bg-purple-900 text-white px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold font-display mb-12">Kenapa Memilih Jay Sosmed?</h2>
            <div className="grid gap-8">
              {[
                { icon: Zap, title: "Proses Instan", desc: "Orderan Anda diproses segera setelah pembayaran dikonfirmasi." },
                { icon: ShieldCheck, title: "Keamanan Akun", desc: "Cukup Username/Link profil saja. Kami tidak pernah meminta password Anda." },
                { icon: Clock, title: "Layanan 24 Jam", desc: "Kami melayani kebutuhan suntik sosmed Anda kapan pun diperlukan." },
                { icon: TrendingUp, title: "Harga Paling Murah", desc: "Bandingkan harga kami dengan yang lain. Kami berikan harga grosir!" },
              ].map((f, i) => (
                <div key={i} className="flex space-x-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <f.icon className="text-purple-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{f.title}</h4>
                    <p className="text-purple-100/60">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
              className="rounded-[48px] shadow-3xl"
              alt="Social Media Expert"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-purple-50/50 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Ribuan Selebgram Puas" 
            subtitle="Bergabunglah dengan content creator lainnya yang sudah menggunakan jasa kami."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rian Pratama", role: "TikToker", content: "Awalnya iseng nyoba 100 followers, eh ternyata beneran masuk dan cepat. Langsung langganan!" },
              { name: "Maya Siska", role: "Online Shop Owner", content: "Bikin toko online saya jadi kelihatan jauh lebih terpercaya dengan jumlah like yang banyak." },
              { name: "Doni Hermawan", role: "Content Creator", content: "Followers IG Indonesia-nya mantap, akun asli semua kelihatannya. Gak nyesel order di sini." },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center">
                  <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&q=80&w=100&h=100`} className="w-12 h-12 rounded-full mr-4 object-cover" alt={t.name} />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="F.A.Q" subtitle="Beberapa hal yang sering ditanyakan pelanggan kami." />
          <div className="space-y-6">
            {[
              { q: "Bagaimana cara ordernya?", a: "Pilih paket yang Anda mau, lalu klik tombol Checkout. Anda akan diarahkan ke halaman pembayaran QRIS." },
              { q: "Apakah aman bagi akun saya?", a: "100% aman karena kami tidak butuh password. Metode yang kami gunakan aman dan tidak melanggar ketentuan sosmed." },
              { q: "Kapan followers saya masuk?", a: "Proses biasanya dimulai dalam hitungan menit setelah konfirmasi pembayaran via WhatsApp." },
              { q: "Ada paket lainnya?", a: "Tentu! Untuk request jumlah lain atau paket custom, langsung saja chat WhatsApp kami." }
            ].map((faq, i) => (
              <div key={i} className="bg-purple-50/50 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-24 pb-12 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <span className="text-3xl font-bold font-display text-purple-400 block mb-8">jay<span className="text-white">sosmed</span></span>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a href={WHATSAPP_LINK} className="flex items-center hover:text-purple-400"><MessageCircle className="mr-2" /> WhatsApp: {WHATSAPP_NUMBER}</a>
            <a href={INSTAGRAM_LINK} className="flex items-center hover:text-purple-400"><InstagramIcon className="mr-2" /> @jaysosmed</a>
          </div>
          <p className="text-gray-500 text-sm border-t border-white/10 pt-8">
            &copy; {new Date().getFullYear()} jaysosmed. Jasa Suntik Sosmed Tercepat & Terpercaya.
          </p>
        </div>
      </footer>

      {/* Payment Modal */}
      <AnimatePresence>
        {orderData && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50 sticky top-0">
                <h3 className="font-bold text-xl text-gray-900">Pembayaran QRIS</h3>
                <button onClick={() => setOrderData(null)} className="p-2 text-gray-400 hover:text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors cursor-pointer">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                <div className="bg-purple-50 rounded-2xl p-4 mb-6 border border-purple-100">
                  <div className="text-sm text-purple-800 font-medium mb-2">Ringkasan Pesanan:</div>
                  <div className="flex justify-between items-center mb-1 text-sm">
                    <span className="text-gray-600">Layanan:</span>
                    <span className="font-bold text-gray-900">{orderData.category}</span>
                  </div>
                  <div className="flex justify-between items-center mb-1 text-sm">
                    <span className="text-gray-600">Jumlah:</span>
                    <span className="font-bold text-gray-900">{orderData.qty}</span>
                  </div>
                  <div className="flex justify-between items-center mb-3 text-sm">
                    <span className="text-gray-600">Target:</span>
                    <span className="font-bold text-gray-900 truncate max-w-[150px]">{orderData.target}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-purple-200/50">
                    <span className="text-purple-900 font-medium">Total Bayar:</span>
                    <span className="text-xl font-bold text-purple-700">Rp {orderData.price}</span>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600 mb-4">Scan kode QRIS di bawah ini menggunakan aplikasi m-Banking atau e-Wallet Anda (Gopay, OVO, Dana, dll).</p>
                  <div className="bg-white p-4 rounded-3xl shadow-inner border-2 border-gray-100 inline-block">
                    <img src={qrisImage} alt="QRIS Payment" className="w-64 h-auto rounded-xl" />
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50 mt-auto sticky bottom-0">
                <p className="text-xs text-center text-gray-500 mb-4">
                  Pastikan nominal transfer sesuai dengan total bayar. Klik tombol di bawah ini <b>setelah</b> Anda berhasil transfer.
                </p>
                <button 
                  onClick={handleOrderConfirm}
                  className="w-full bg-purple-600 text-white py-3.5 rounded-xl font-bold text-lg hover:bg-purple-700 transition-all shadow-xl shadow-purple-200 flex items-center justify-center cursor-pointer"
                >
                  <CheckCircle2 className="mr-2" size={20} />
                  Konfirmasi Pembayaran
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
