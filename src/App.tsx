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

// --- Data ---

const WHATSAPP_NUMBER = "6285773617352";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const INSTAGRAM_LINK = "https://www.instagram.com/jaysosmed";

const PRICE_LIST = [
  {
    category: "Followers TikTok",
    icon: Users,
    prices: [
      { qty: "100", price: "6.000" },
      { qty: "500", price: "26.000" },
      { qty: "1000", price: "51.000" },
    ],
    fullList: [
      "100 • Rp 6.000", "200 • Rp 11.000", "300 • Rp 16.000", "400 • Rp 21.000", "500 • Rp 26.000", "600 • Rp 31.000", "700 • Rp 36.000", "800 • Rp 41.000", "900 • Rp 46.000", "1000 • Rp 51.000"
    ]
  },
  {
    category: "Like TikTok",
    icon: Heart,
    prices: [
      { qty: "100", price: "2.000" },
      { qty: "500", price: "10.000" },
      { qty: "1000", price: "20.000" },
    ],
    fullList: [
      "100 • Rp 2.000", "500 • Rp 10.000", "1000 • Rp 20.000"
    ]
  },
  {
    category: "Views TikTok & IG",
    icon: Eye,
    prices: [
      { qty: "2.500", price: "2.500" },
      { qty: "10.000", price: "8.500" },
      { qty: "30.000", price: "20.500" },
    ],
    fullList: [
      "2.500 • Rp 2.500", "10.000 • Rp 8.500", "30.000 • Rp 20.500"
    ]
  },
  {
    category: "Share TikTok",
    icon: Share2,
    prices: [
      { qty: "100", price: "3.000" },
      { qty: "500", price: "15.000" },
      { qty: "1000", price: "30.000" },
    ],
    fullList: [
      "100 • Rp 3.000", "500 • Rp 15.000", "1000 • Rp 30.000"
    ]
  },
  {
    category: "Followers Instagram",
    icon: InstagramIcon,
    promo: "Paket Murah: 5.000 Followers • Rp 80.000",
    prices: [
      { qty: "100", price: "3.000" },
      { qty: "500", price: "14.000" },
      { qty: "1000", price: "27.000" },
    ],
    fullList: [
      "100 • Rp 3.000", "500 • Rp 14.000", "1000 • Rp 27.000"
    ]
  },
  {
    category: "Followers IG (Indonesia)",
    icon: InstagramIcon,
    promo: "Paket Murah: 5.000 Followers • Rp 180.000",
    prices: [
      { qty: "100", price: "11.000" },
      { qty: "500", price: "34.000" },
      { qty: "1000", price: "61.000" },
    ],
    fullList: [
      "100 • Rp 11.000", "500 • Rp 34.000", "1000 • Rp 61.000"
    ]
  },
  {
    category: "Like Instagram",
    icon: Heart,
    prices: [
      { qty: "100", price: "4.000" },
      { qty: "500", price: "16.000" },
      { qty: "1000", price: "28.000" },
    ],
    fullList: [
      "100 • Rp 4.000", "500 • Rp 16.000", "1000 • Rp 28.000"
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

const PricingCard = ({ item }: any) => (
  <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col h-full border-b-4 border-b-purple-600">
    <div className="p-8">
      <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
        <item.icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{item.category}</h3>
      <div className="space-y-3 mb-6">
        {item.prices.map((p, idx) => (
          <div key={idx} className="flex justify-between items-center text-sm">
            <span className="text-gray-600 font-medium">{p.qty} {item.category.includes('View') ? '' : 'Qty'}</span>
            <span className="text-purple-700 font-bold">Rp {p.price}</span>
          </div>
        ))}
      </div>
      {item.promo && (
        <div className="bg-purple-50 p-3 rounded-xl mb-6 text-xs font-bold text-purple-700 border border-purple-100">
          🔥 {item.promo}
        </div>
      )}
    </div>
    <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100">
      <a 
        href={`${WHATSAPP_LINK}?text=Halo JaySosmed, saya mau order ${item.category}...`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-white border-2 border-purple-600 text-purple-600 py-3 rounded-xl font-bold flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all shadow-sm"
      >
        Order Sekarang
      </a>
    </div>
  </motion.div>
);

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
            subtitle="Paling murah dan berkualitas. Proses cepat tanpa perlu password akun Anda."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRICE_LIST.map((item, idx) => (
              <PricingCard key={idx} item={item} />
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
              { q: "Bagaimana cara ordernya?", a: "Pilih paket yang Anda mau, lalu klik tombol Order Sekarang. Anda akan diarahkan ke WhatsApp kami untuk proses selanjutnya." },
              { q: "Apakah aman bagi akun saya?", a: "100% aman karena kami tidak butuh password. Metode yang kami gunakan aman dan tidak melanggar ketentuan sosmed." },
              { q: "Kapan followers saya masuk?", a: "Proses biasanya dimulai dalam hitungan menit setelah konfirmasi pembayaran." },
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
            <a href={WHATSAPP_LINK} className="flex items-center hover:text-purple-400"><MessageCircle className="mr-2" /> WhatsApp: 085773617352</a>
            <a href={INSTAGRAM_LINK} className="flex items-center hover:text-purple-400"><InstagramIcon className="mr-2" /> @jaysosmed</a>
          </div>
          <p className="text-gray-500 text-sm border-t border-white/10 pt-8">
            &copy; {new Date().getFullYear()} jaysosmed. Jasa Suntik Sosmed Tercepat & Terpercaya.
          </p>
        </div>
      </footer>
    </div>
  );
}
