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
    ratePerUnit: 50,
    minQty: 100,
  },
  {
    category: "Like TikTok",
    icon: Heart,
    ratePerUnit: 20,
    minQty: 100,
  },
  {
    category: "View TikTok & Instagram",
    icon: Eye,
    ratePerUnit: 1,
    minQty: 2500,
  },
  {
    category: "Share TikTok",
    icon: Share2,
    ratePerUnit: 30,
    minQty: 100,
  },
  {
    category: "Followers Instagram",
    icon: InstagramIcon,
    promo: "PAKET MURAH: 5.000 Followers • Rp 80.000",
    ratePerUnit: 27,
    minQty: 100,
    promoQty: 5000,
    promoPrice: 80000
  },
  {
    category: "Followers IG (Indonesia)",
    icon: InstagramIcon,
    promo: "PAKET MURAH: 5.000 Followers • Rp 180.000",
    ratePerUnit: 60,
    minQty: 100,
    promoQty: 5000,
    promoPrice: 180000
  },
  {
    category: "Like Instagram",
    icon: Heart,
    ratePerUnit: 28,
    minQty: 100,
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
            <a href="#admin" className="text-gray-700 font-bold hover:text-purple-600 flex items-center">
              Login
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
  const [qty, setQty] = useState<number | ''>(item.minQty);
  const [targetLink, setTargetLink] = useState('');
  const [error, setError] = useState(false);

  let currentPrice = 0;
  if (typeof qty === 'number' && qty >= item.minQty) {
    if (item.promoQty && qty >= item.promoQty) {
      if (qty === item.promoQty) {
        currentPrice = item.promoPrice;
      } else {
        currentPrice = qty * item.ratePerUnit;
      }
    } else {
      currentPrice = qty * item.ratePerUnit;
    }
  }

  const handleOrder = () => {
    if (!targetLink.trim() || !qty || qty < item.minQty) {
      setError(true);
      return;
    }
    setError(false);
    onOrder({
      category: item.category,
      qty: qty,
      price: currentPrice,
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
            <label className="block text-sm font-semibold text-gray-700 mb-1">Masukkan Jumlah (Min. {item.minQty})</label>
            <input 
              type="number"
              min={item.minQty}
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-purple-500 focus:border-purple-500 block p-3 outline-none"
              value={qty}
              onChange={(e) => setQty(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder={`Minimal ${item.minQty}`}
            />
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
              className={`w-full bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-200'} text-gray-900 text-sm rounded-xl focus:ring-purple-500 focus:border-purple-500 block p-3 outline-none`}
            />
            {error && <span className="text-xs text-red-500 mt-1 block">Data wajib diisi dengan benar!</span>}
          </div>
        </div>
      </div>
      <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500 text-sm font-medium">Total Harga:</span>
          <span className="text-xl font-bold text-purple-700">Rp {currentPrice.toLocaleString('id-ID')}</span>
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

const LoginMenu = ({ onAdminLogin, onUserLogin }: { onAdminLogin: () => void, onUserLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'jayjay12' && password === 'Zerotoher0') {
      onAdminLogin();
    } else if (username && password) {
      onUserLogin();
    } else {
      setError('Username atau password salah');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login Sistem</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Username</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full border rounded-xl p-3 outline-none focus:border-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border rounded-xl p-3 outline-none focus:border-purple-500" />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full bg-purple-600 text-white rounded-xl p-3 font-bold hover:bg-purple-700 cursor-pointer">Login</button>
          <button type="button" onClick={() => window.location.hash = ''} className="w-full bg-gray-100 text-gray-700 rounded-xl p-3 font-bold hover:bg-gray-200 cursor-pointer mt-2">Kembali ke Beranda</button>
        </form>
      </div>
    </div>
  );
};

const AdminDashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [orders, setOrders] = useState<any[]>([]);

  React.useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('jaysosmed_orders') || '[]');
    setOrders(savedOrders.reverse());
  }, []);

  const updateStatus = (id: string, status: string) => {
    const updated = orders.map(o => o.id === id ? { ...o, status } : o);
    setOrders(updated);
    localStorage.setItem('jaysosmed_orders', JSON.stringify([...updated].reverse()));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="space-x-4">
            <button onClick={() => window.location.hash = ''} className="text-purple-600 font-semibold hover:text-purple-700 cursor-pointer">Kembali ke Web</button>
            <button onClick={onLogout} className="text-red-600 font-semibold hover:text-red-700 cursor-pointer">Logout</button>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-semibold text-gray-600">ID</th>
                  <th className="p-4 font-semibold text-gray-600">Tanggal</th>
                  <th className="p-4 font-semibold text-gray-600">Layanan</th>
                  <th className="p-4 font-semibold text-gray-600">Target</th>
                  <th className="p-4 font-semibold text-gray-600">Jumlah</th>
                  <th className="p-4 font-semibold text-gray-600">Harga</th>
                  <th className="p-4 font-semibold text-gray-600">Bukti</th>
                  <th className="p-4 font-semibold text-gray-600">Status</th>
                  <th className="p-4 font-semibold text-gray-600">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o: any) => (
                  <tr key={o.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    <td className="p-4 text-sm text-gray-500">{o.id.substring(o.id.length - 6)}</td>
                    <td className="p-4 text-sm">{new Date(o.date).toLocaleDateString('id-ID')}</td>
                    <td className="p-4 font-medium text-gray-900">{o.category}</td>
                    <td className="p-4 text-purple-600 font-medium">{o.target}</td>
                    <td className="p-4 text-gray-900">{o.qty}</td>
                    <td className="p-4 font-medium text-gray-900">Rp {o.price.toLocaleString('id-ID')}</td>
                    <td className="p-4">
                      {o.proofUrl ? <a href={o.proofUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm font-semibold">Lihat</a> : '-'}
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        o.status === 'success' ? 'bg-green-100 text-green-700' :
                        o.status === 'process' ? 'bg-blue-100 text-blue-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {o.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-4">
                      <select 
                        value={o.status} 
                        onChange={e => updateStatus(o.id, e.target.value)}
                        className="text-sm border rounded-lg p-1 outline-none focus:border-purple-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="process">Process</option>
                        <option value="success">Success</option>
                      </select>
                    </td>
                  </tr>
                ))}
                {orders.length === 0 && (
                  <tr><td colSpan={8} className="p-8 text-center text-gray-500">Belum ada pesanan</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [orderData, setOrderData] = useState<any>(null);
  const [currentView, setCurrentView] = useState('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState('');

  // API ImgBB Key (Ganti dengan key asli milik Anda, dapat dari api.imgbb.com)
  const IMGBB_API_KEY = "67f677fb582e0e5a6d59c6316279fcc2"; // Default testing key

  React.useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setCurrentView('admin');
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    const adminAuth = localStorage.getItem('jaysosmed_admin');
    if (adminAuth === 'true') setIsAdminLoggedIn(true);
    const userAuth = localStorage.getItem('jaysosmed_user');
    if (userAuth === 'true') setIsUserLoggedIn(true);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOrderConfirm = async () => {
    if (!orderData) return;
    if (!paymentProof) {
      setPaymentError("Harap upload bukti pembayaran terlebih dahulu!");
      return;
    }
    
    setPaymentError('');
    setIsUploading(true);
    
    let proofUrl = '';
    
    try {
      const formData = new FormData();
      formData.append('image', paymentProof);
      
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        proofUrl = data.data.url;
      } else {
        throw new Error('Gagal upload gambar');
      }
    } catch (err) {
      console.error(err);
      proofUrl = "https://placeholder.com/gagal-upload-imgbb";
    }

    const txCode = "TRX-" + Date.now().toString().substring(5);
    
    const newOrder = {
      id: txCode,
      date: new Date().toISOString(),
      ...orderData,
      proofUrl: proofUrl,
      status: 'pending'
    };
    
    const existingOrders = JSON.parse(localStorage.getItem('jaysosmed_orders') || '[]');
    localStorage.setItem('jaysosmed_orders', JSON.stringify([...existingOrders, newOrder]));

    setIsUploading(false);
    setShowSuccess(true);
    
    setTimeout(() => {
      const text = `Halo JaySosmed, saya mau konfirmasi pembayaran order saya:
%0A
%0A*Kode Transaksi:* ${txCode}
%0A*Layanan:* ${orderData.category}
%0A*Jumlah:* ${orderData.qty}
%0A*Target:* ${orderData.target}
%0A*Total Harga:* Rp ${orderData.price.toLocaleString('id-ID')}
%0A*Bukti Pembayaran:* ${proofUrl}
%0A
%0AMohon segera diproses, terima kasih!`;
      
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
      setOrderData(null);
      setShowSuccess(false);
      setPaymentProof(null);
    }, 2500);
  };

  if (currentView === 'admin') {
    if (!isAdminLoggedIn && !isUserLoggedIn) {
      return <LoginMenu 
        onAdminLogin={() => {
          setIsAdminLoggedIn(true);
          localStorage.setItem('jaysosmed_admin', 'true');
        }} 
        onUserLogin={() => {
          setIsUserLoggedIn(true);
          localStorage.setItem('jaysosmed_user', 'true');
          window.location.hash = ''; // Redirect back
        }}
      />;
    }
    if (isAdminLoggedIn) {
      return <AdminDashboard onLogout={() => {
        setIsAdminLoggedIn(false);
        localStorage.removeItem('jaysosmed_admin');
      }} />;
    }
  }

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
        {showSuccess ? (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white rounded-3xl w-full max-w-sm shadow-2xl p-8 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pemesanan Berhasil!</h3>
              <p className="text-gray-600 mb-6">Order Anda telah masuk ke sistem. Mohon tunggu sebentar, Anda akan diarahkan ke WhatsApp Admin...</p>
              <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            </motion.div>
          </div>
        ) : orderData && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50 sticky top-0 z-10">
                <h3 className="font-bold text-xl text-gray-900">Pembayaran QRIS</h3>
                <button onClick={() => { setOrderData(null); setPaymentProof(null); setPaymentError(''); }} className="p-2 text-gray-400 hover:text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors cursor-pointer">
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
                    <span className="text-xl font-bold text-purple-700">Rp {orderData.price.toLocaleString('id-ID')}</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 mb-4">Scan kode QRIS di bawah ini menggunakan aplikasi m-Banking atau e-Wallet Anda (Gopay, OVO, Dana, dll).</p>
                  <div className="bg-white p-4 rounded-3xl shadow-inner border-2 border-gray-100 inline-block">
                    <img src={qrisImage} alt="QRIS Payment" className="w-64 h-auto rounded-xl" />
                  </div>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
                  <label className="block text-sm font-bold text-gray-900 mb-2">Upload Bukti Pembayaran <span className="text-red-500">*</span></label>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setPaymentProof(e.target.files[0]);
                        setPaymentError('');
                      }
                    }}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer"
                  />
                  {paymentError && <p className="text-red-500 text-xs mt-2 font-medium">{paymentError}</p>}
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50 mt-auto sticky bottom-0">
                <button 
                  onClick={handleOrderConfirm}
                  disabled={isUploading}
                  className="w-full bg-purple-600 text-white py-3.5 rounded-xl font-bold text-lg hover:bg-purple-700 transition-all shadow-xl shadow-purple-200 flex items-center justify-center cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isUploading ? (
                    <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div> Memproses...</>
                  ) : (
                    <><CheckCircle2 className="mr-2" size={20} /> Konfirmasi Pembayaran</>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
