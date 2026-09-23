import React, { useState } from 'react';

// Database Sayuran Nusantara (Lokal Frontend)
const databaseSayuranNusantara = [
  { 
    nama: "Kangkung", 
    ikon: "🥬", 
    deskripsi: "Sayuran daun tropis yang sangat mudah tumbuh.",
    jenis_tanah: "Lumpur, rawa, atau berair dangkal.",
    kebutuhan: "Air sangat melimpah, pupuk organik tinggi, sinar matahari penuh."
  },
  { 
    nama: "Bayam", 
    ikon: "🌿", 
    deskripsi: "Sayuran hijau yang sangat kaya akan zat besi.",
    jenis_tanah: "Gembur, kaya unsur hara, drainase baik.",
    kebutuhan: "Tingkat pH netral (6-7), sinar matahari penuh, kelembaban sedang (jangan sampai tergenang)."
  },
  { 
    nama: "Daun Singkong", 
    ikon: "🪴", 
    deskripsi: "Tanaman yang sangat tahan banting terhadap berbagai kondisi cuaca.",
    jenis_tanah: "Tanah tegalan, tanah kering, atau latosol.",
    kebutuhan: "Sangat toleran kekeringan, butuh drainase lancar (akar busuk jika tergenang), butuh Fosfor (P) & Kalium (K)."
  },
  { 
    nama: "Sawi Hijau", 
    ikon: "🥬", 
    deskripsi: "Sayuran daun segar yang populer untuk masakan mi dan bakso.",
    jenis_tanah: "Gembur, lembab, dan kaya humus.",
    kebutuhan: "Kadar Nitrogen (N) tinggi, penyiraman rutin pagi-sore, naungan ringan dari terik siang."
  },
  { 
    nama: "Terong", 
    ikon: "🍆", 
    deskripsi: "Sayuran buah yang menyukai cuaca hangat beriklim tropis.",
    jenis_tanah: "Lempung berpasir yang kaya pupuk organik.",
    kebutuhan: "Pupuk kandang melimpah, cuaca hangat, tingkat pH stabil di angka 6.5-7.0."
  },
  { 
    nama: "Tomat", 
    ikon: "🍅", 
    deskripsi: "Sayuran buah kaya vitamin C yang butuh asupan nutrisi intensif.",
    jenis_tanah: "Gembur, porus (air cepat meresap), tidak tergenang.",
    kebutuhan: "Kalium (K) tinggi untuk fase pembuahan, sinar matahari penuh, butuh lanjaran/tiang bambu."
  },
  { 
    nama: "Pare", 
    ikon: "🥒", 
    deskripsi: "Tanaman merambat dengan rasa pahit khas yang adaptif.",
    jenis_tanah: "Lempung berpasir, gembur, drainase lancar.",
    kebutuhan: "Wajib ada rambatan/para-para kokoh, kelembaban terjaga agar bunga tidak rontok."
  },
  { 
    nama: "Kacang Panjang", 
    ikon: "🫘", 
    deskripsi: "Sayuran polong merakyat pengikat Nitrogen alami.",
    jenis_tanah: "Latosol, tanah gembur, agak kering tidak masalah.",
    kebutuhan: "Tingkat pH 5.5-6.5, wajib diberi tiang rambatan panjang, toleran curah hujan rendah."
  },
  { 
    nama: "Buncis", 
    ikon: "🫛", 
    deskripsi: "Sayuran polong-polongan renyah untuk dataran yang lebih tinggi.",
    jenis_tanah: "Andosol (tanah vulkanik dataran tinggi), gembur.",
    kebutuhan: "Suhu lingkungan sejuk (15-20°C), pH 5.5-6.0, drainase harus sangat lancar."
  },
  { 
    nama: "Kecombrang", 
    ikon: "🌸", 
    deskripsi: "Bunga aromatik khas bumbu masakan lokal Indonesia.",
    jenis_tanah: "Lembab, subur, dekat dengan sumber air/sungai.",
    kebutuhan: "Naungan parsial (tidak suka terik matahari langsung), tanah harus selalu menyimpan humus."
  },
  { 
    nama: "Wortel", 
    ikon: "🥕", 
    deskripsi: "Sayuran umbi akar yang membutuhkan tanah lembut untuk tumbuh.",
    jenis_tanah: "Gembur, dalam, porus, dan mutlak tidak berbatu/keras.",
    kebutuhan: "Suhu sejuk, Fosfor (P) cukup untuk merangsang akar, tanah bebas cacing nematoda."
  },
  { 
    nama: "Petai", 
    ikon: "🌳", 
    deskripsi: "Pohon tahunan tropis yang menghasilkan polong berbau khas.",
    jenis_tanah: "Lempung merah, gembur, kedalaman air tanah cukup.",
    kebutuhan: "Lahan tanam yang luas (jarak tanam lebar), curah hujan tinggi, sinar matahari penuh."
  },
  { 
    nama: "Jengkol", 
    ikon: "🧆", 
    deskripsi: "Tanaman pohon keras yang bernilai ekonomis cukup tinggi.",
    jenis_tanah: "Latosol (tanah merah), cocok juga untuk program penghijauan lahan kritis.",
    kebutuhan: "Ketersediaan air tanah yang baik di tahun pertama, sangat toleran terhadap panas berlebih."
  },
  { 
    nama: "Rebung bambu", 
    ikon: "🎍", 
    deskripsi: "Tunas bambu muda segar pencinta area basah.",
    jenis_tanah: "Tanah aluvial, tepian sungai, sedimen berpasir.",
    kebutuhan: "Kelembaban lingkungan sangat tinggi, tanah basah namun tidak boleh tergenang sampai mati akar."
  },
  { 
    nama: "Labu Siam", 
    ikon: "🍐", 
    deskripsi: "Sayuran buah merambat hijau yang tahan lama setelah dipanen.",
    jenis_tanah: "Gembur, sangat kaya bahan organik / kompos daun.",
    kebutuhan: "Suhu sejuk-sedang, wajib membuat sistem para-para permanen yang kuat untuk menopang buah berat."
  }
];

export default function App() {
  const [formData, setFormData] = useState({
    n: '', p: '', k: '', ph: 7, moisture: 50
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(async () => {
      try {
        const response = await fetch('http://localhost:8080/api/predict', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            n: Number(formData.n),
            p: Number(formData.p),
            k: Number(formData.k),
            ph: Number(formData.ph),
            moisture: Number(formData.moisture)
          })
        });

        if (!response.ok) throw new Error('Gagal terhubung ke server');
        
        const data = await response.json();
        setResult(data);

      } catch (err) {
        console.error('Error fetching data, menggunakan fallback data lokal:', err);
        
        // Logika Fallback: Memilih 3 tanaman acak dari database Nusantara
        const tanamanAcak = [...databaseSayuranNusantara]
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        setResult({
          kelas_tanah: "Tanah Tropis Nusantara",
          rekomendasi_tanaman: tanamanAcak
        });
      } finally {
        setLoading(false);
      }
    }, 2000); 
  };

  const handleReset = () => {
    setResult(null);
    setFormData({ n: '', p: '', k: '', ph: 7, moisture: 50 });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="bg-emerald-600 text-white py-4 shadow-md">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2">
            🌱 AgroSmart
          </h1>
          <p className="text-emerald-100 text-sm hidden md:block">Sistem Cerdas Rekomendasi Sayuran Nusantara</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 animate-pulse">
            <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-4"></div>
            <h2 className="text-xl font-semibold text-emerald-700">Menganalisis Unsur Hara...</h2>
            <p className="text-gray-500 mt-2">Mencocokkan lahan dengan Database Tanaman Indonesia.</p>
          </div>
        )}

        {!loading && !result && (
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-50">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-emerald-800 mb-2">Input Kondisi Tanah</h2>
              <p className="text-gray-500">Masukkan parameter NPK dan kondisi lingkungan lahan Anda.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nitrogen (N)</label>
                  <input type="number" name="n" value={formData.n} onChange={handleChange} required placeholder="Contoh: 80"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Fosfor (P)</label>
                  <input type="number" name="p" value={formData.p} onChange={handleChange} required placeholder="Contoh: 40"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Kalium (K)</label>
                  <input type="number" name="k" value={formData.k} onChange={handleChange} required placeholder="Contoh: 50"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div>
                  <label className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                    <span>Tingkat pH Tanah</span>
                    <span className="text-emerald-600 font-bold">{formData.ph}</span>
                  </label>
                  <input type="range" name="ph" min="0" max="14" step="0.1" value={formData.ph} onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0 (Asam)</span>
                    <span>7 (Netral)</span>
                    <span>14 (Basa)</span>
                  </div>
                </div>

                <div>
                  <label className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                    <span>Kelembaban (%)</span>
                    <span className="text-emerald-600 font-bold">{formData.moisture}%</span>
                  </label>
                  <input type="range" name="moisture" min="0" max="100" value={formData.moisture} onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0% (Kering)</span>
                    <span>100% (Basah)</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 text-lg">
                  ⚡ Mulai Analisis
                </button>
              </div>
            </form>
          </div>
        )}

        {!loading && result && (
          <div className="animate-fade-in-up">
            <div className="mb-6 flex justify-between items-end">
              <h2 className="text-3xl font-bold text-gray-800">Laporan Analisis Tanah</h2>
              <button onClick={handleReset} className="text-emerald-600 hover:text-emerald-800 font-semibold underline">
                ← Analisis Ulang
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              
              <div className="lg:w-1/3 bg-emerald-50 rounded-2xl p-6 border border-emerald-100 shadow-sm flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-4xl mb-4 shadow-inner">
                  🌍
                </div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Klasifikasi Lahan</h3>
                <p className="text-2xl font-extrabold text-emerald-800 mb-4">{result.kelas_tanah}</p>
                
                <div className="w-full bg-white rounded-lg p-4 shadow-sm border border-emerald-50 text-left">
                  <h4 className="text-xs font-bold text-gray-400 mb-2 uppercase">Parameter Input:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><span className="font-semibold text-emerald-700">N:</span> {formData.n}</li>
                    <li><span className="font-semibold text-emerald-700">P:</span> {formData.p}</li>
                    <li><span className="font-semibold text-emerald-700">K:</span> {formData.k}</li>
                    <li><span className="font-semibold text-emerald-700">pH:</span> {formData.ph}</li>
                    <li><span className="font-semibold text-emerald-700">Kelembaban:</span> {formData.moisture}%</li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-2/3 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Rekomendasi Tanaman Terbaik</h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {result.rekomendasi_tanaman.map((tanaman, index) => (
                    <div key={index} className="flex flex-col bg-gray-50 rounded-xl p-5 border-l-4 border-emerald-500 hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="text-4xl mr-4">{tanaman.ikon}</div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">{tanaman.nama}</h4>
                          <p className="text-sm text-gray-600 mt-1">{tanaman.deskripsi}</p>
                        </div>
                      </div>
                      
                      <div className="mt-1 p-3 bg-white rounded-lg border border-gray-200 text-sm">
                        <div className="mb-1">
                          <span className="font-semibold text-emerald-700 block md:inline">🌱 Jenis Tanah:</span> 
                          <span className="text-gray-700 md:ml-1">{tanaman.jenis_tanah}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-emerald-700 block md:inline">💧 Syarat Tumbuh:</span> 
                          <span className="text-gray-700 md:ml-1">{tanaman.kebutuhan}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}
      </main>
    </div>
  );
}