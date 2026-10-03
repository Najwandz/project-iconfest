import React from 'react';

export default function HasilAnalisis({ result, formData, handleReset }) {
  if (!result) return null;

  return (
    <div className="w-full mt-8 transform transition-all duration-700 animate-[fadeIn_0.5s_ease-out]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white/80 backdrop-blur-lg p-5 rounded-2xl shadow-sm border border-emerald-100 mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-500">
            Dashboard Analisis Tanah
          </h2>
          <p className="text-gray-500 text-sm font-medium mt-1">Laporan komprehensif dihasilkan oleh mesin Weka J48</p>
        </div>
        <button onClick={handleReset} className="mt-4 md:mt-0 px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl shadow-md border border-emerald-200 hover:bg-emerald-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
          <span>🔄</span> Uji Lahan Baru
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* PANEL KIRI - HASIL KLASIFIKASI */}
        <div className="lg:w-1/3">
          <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-900 rounded-3xl p-8 shadow-2xl shadow-emerald-900/30 text-white relative overflow-hidden group h-full">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-400 opacity-20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-5xl mb-6 shadow-inner border border-white/30">
                🌱
              </div>
              <h3 className="text-emerald-100 font-bold uppercase tracking-widest text-xs mb-2 opacity-80">Klasifikasi Lahan (AI)</h3>
              <p className="text-3xl font-black mb-8 leading-tight">{result.kelas_tanah}</p>
              
              <div className="bg-black/20 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                <h4 className="text-xs font-bold text-teal-200 mb-4 uppercase tracking-wider">Metrik Tanah Input:</h4>
                <ul className="text-sm space-y-3 font-medium">
                  <li className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="opacity-80">Nitrogen (N)</span> <span className="bg-white/20 px-3 py-1 rounded-md">{formData.n}</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="opacity-80">Fosfor (P)</span> <span className="bg-white/20 px-3 py-1 rounded-md">{formData.p}</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="opacity-80">Kalium (K)</span> <span className="bg-white/20 px-3 py-1 rounded-md">{formData.k}</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="opacity-80">Tingkat pH</span> <span className="text-teal-200 font-bold">{formData.ph}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="opacity-80">Kelembaban</span> <span className="text-teal-200 font-bold">{formData.moisture}%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* PANEL KANAN - REKOMENDASI & PROYEKSI PANEN */}
        <div className="lg:w-2/3">
          <h3 className="text-xl font-extrabold text-gray-800 mb-6 flex items-center gap-3">
            <span className="bg-emerald-100 p-2 rounded-lg text-emerald-600">🎯</span> 
            Rekomendasi & Analisis Panen (Luas 100 m²)
          </h3>
          
          <div className="grid grid-cols-1 gap-6">
            {result.rekomendasi_tanaman.map((tanaman, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border-l-8 border-teal-500 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-emerald-900/10 transform hover:-translate-y-1 transition-all duration-300 group">
                
                {/* Header Tanaman */}
                <div className="flex flex-col sm:flex-row items-start gap-5 mb-5 border-b border-gray-100 pb-5">
                  <div className="text-6xl bg-gradient-to-br from-emerald-50 to-teal-100 w-24 h-24 rounded-2xl flex items-center justify-center shadow-inner border border-teal-100 shrink-0 group-hover:scale-105 transition-transform">
                    {tanaman.ikon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start w-full">
                      <h4 className="text-2xl font-black text-gray-800">{tanaman.nama}</h4>
                      <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-200 flex items-center gap-1">
                        <span>📈</span> Subur: {tanaman.potensi_subur}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2 font-medium leading-relaxed text-sm">{tanaman.deskripsi}</p>
                  </div>
                </div>
                
                {/* Strategi & Syarat */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-slate-500">🌍</span>
                      <span className="font-bold text-slate-700 text-xs uppercase tracking-wider">Karakter Lahan</span>
                    </div>
                    <span className="text-sm text-gray-600 leading-snug">{tanaman.jenis_tanah} <br/> {tanaman.kebutuhan}</span>
                  </div>
                  
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-amber-600">🧪</span>
                      <span className="font-bold text-amber-800 text-xs uppercase tracking-wider">Strategi Pupuk</span>
                    </div>
                    <span className="text-sm text-amber-700 font-medium leading-snug">{tanaman.rekomendasi_pupuk}</span>
                  </div>
                </div>

                {/* PROYEKSI PANEN (3 KOLOM DENGAN MANAJEMEN RISIKO) */}
                <div className="bg-gradient-to-r from-rose-50 via-slate-50 to-emerald-50 rounded-xl p-4 border border-gray-200 flex flex-col md:flex-row items-stretch justify-between gap-4">
                  
                  {/* Kolom 1: Risiko Tidak Cocok (Merah) */}
                  <div className="w-full md:w-1/3 flex flex-col justify-between">
                    <div>
                      <p className="text-[11px] font-black text-rose-800 uppercase tracking-widest mb-1 flex items-center gap-1">
                        <span>⚠️</span> Pemilihan Lahan Salah
                      </p>
                      <div className="flex items-end gap-1 mb-1">
                        <span className="text-xl font-black text-rose-600 leading-none">{tanaman.estimasi_buruk}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-rose-700/90 leading-snug font-medium bg-rose-100/50 p-2 rounded-lg border border-rose-100 mt-2">
                      <span className="font-bold">Akibat:</span> {tanaman.akibat_salah_lahan}
                    </p>
                  </div>
                  
                  <div className="hidden md:block w-px bg-gray-300"></div>

                  {/* Kolom 2: Normal (Abu-abu) */}
                  <div className="w-full md:w-1/3 flex flex-col justify-between pl-0 md:pl-2">
                    <div>
                      <p className="text-[11px] font-black text-slate-600 uppercase tracking-widest mb-1">Panen Normal</p>
                      <div className="flex items-end gap-1">
                        <span className="text-xl font-black text-slate-700 leading-none">{tanaman.estimasi_normal}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug mt-2">Lahan sesuai standar. Tanpa perlakuan khusus.</p>
                  </div>
                  
                  <div className="hidden md:block w-px bg-emerald-200"></div>

                  {/* Kolom 3: Optimal (Hijau) */}
                  <div className="w-full md:w-1/3 flex flex-col justify-between pl-0 md:pl-2">
                    <div>
                      <p className="text-[11px] font-black text-emerald-800 uppercase tracking-widest mb-1 flex items-center gap-1">
                        <span>🚀</span> Potensi Optimal
                      </p>
                      <div className="flex items-end gap-1">
                        <span className="text-xl font-black text-emerald-600 leading-none">{tanaman.estimasi_optimal}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-emerald-700/90 leading-snug font-medium bg-emerald-100/50 p-2 rounded-lg border border-emerald-100 mt-2">
                      Target dengan pemupukan & perawatan intensif.
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}