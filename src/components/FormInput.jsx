import React from 'react';

export default function FormInput({ formData, handleChange, handleSubmit, loading }) {
  if (loading) return null;

  return (
    // Efek Kaca (Glassmorphism) dengan border menyala
    <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-emerald-900/20 p-8 border-2 border-white overflow-hidden mt-8">
      
      {/* Dekorasi Emoji Melayang Transparan di Background */}
      <div className="absolute top-5 left-5 text-5xl opacity-20 animate-bounce">🍎</div>
      <div className="absolute top-10 right-10 text-6xl opacity-20 animate-pulse">🌽</div>
      <div className="absolute bottom-10 left-10 text-6xl opacity-20 animate-pulse">🥕</div>
      <div className="absolute bottom-5 right-5 text-5xl opacity-20 animate-bounce">🍇</div>
      <div className="absolute top-1/2 left-2 text-4xl opacity-20">🥬</div>
      <div className="absolute top-1/3 right-2 text-4xl opacity-20">🍅</div>
      <div className="absolute bottom-1/2 right-4 text-5xl opacity-10">🌳</div>

      <div className="relative z-10 mb-10 text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 mb-3 flex items-center justify-center gap-3">
          <span>🌿</span> Parameter Uji Tanah <span>🌾</span>
        </h2>
        <p className="text-gray-500 font-medium">Masukkan hasil pengujian metrik tanah lahan pertanian Anda untuk rekomendasi terbaik.</p>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
        {/* N, P, K Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group">
            <label className="block text-sm font-black text-emerald-800 mb-2 uppercase tracking-wider flex items-center gap-2">
              <span className="text-xl">💨</span> Nitrogen (N)
            </label>
            <input 
              type="number" 
              name="n" 
              value={formData.n} 
              onChange={(e) => {
                if (e.target.value > 300) e.target.value = 300;
                if (e.target.value < 0) e.target.value = 0;
                handleChange(e);
              }} 
              required 
              min="0"
              max="300"
              placeholder="0 - 300"
              className="w-full px-5 py-4 bg-emerald-50/50 border-2 border-emerald-200 rounded-xl text-lg font-bold text-emerald-900 focus:bg-white focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 outline-none transition-all shadow-inner group-hover:border-emerald-400" 
            />
          </div>
          <div className="group">
            <label className="block text-sm font-black text-teal-800 mb-2 uppercase tracking-wider flex items-center gap-2">
              <span className="text-xl">✨</span> Fosfor (P)
            </label>
            <input 
              type="number" 
              name="p" 
              value={formData.p} 
              onChange={(e) => {
                if (e.target.value > 300) e.target.value = 300;
                if (e.target.value < 0) e.target.value = 0;
                handleChange(e);
              }} 
              required 
              min="0"
              max="300"
              placeholder="0 - 300"
              className="w-full px-5 py-4 bg-teal-50/50 border-2 border-teal-200 rounded-xl text-lg font-bold text-teal-900 focus:bg-white focus:ring-4 focus:ring-teal-500/30 focus:border-teal-500 outline-none transition-all shadow-inner group-hover:border-teal-400" 
            />
          </div>
          <div className="group">
            <label className="block text-sm font-black text-cyan-800 mb-2 uppercase tracking-wider flex items-center gap-2">
              <span className="text-xl">🪨</span> Kalium (K)
            </label>
            <input 
              type="number" 
              name="k" 
              value={formData.k} 
              onChange={(e) => {
                if (e.target.value > 300) e.target.value = 300;
                if (e.target.value < 0) e.target.value = 0;
                handleChange(e);
              }} 
              required 
              min="0"
              max="300"
              placeholder="0 - 300"
              className="w-full px-5 py-4 bg-cyan-50/50 border-2 border-cyan-200 rounded-xl text-lg font-bold text-cyan-900 focus:bg-white focus:ring-4 focus:ring-cyan-500/30 focus:border-cyan-500 outline-none transition-all shadow-inner group-hover:border-cyan-400" 
            />
          </div>
        </div>

        {/* pH and Moisture Ranges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100 shadow-sm">
          <div>
            <label className="flex justify-between text-sm font-black text-emerald-800 mb-4 uppercase tracking-wider">
              <span className="flex items-center gap-2"><span className="text-xl">🧪</span> Tingkat pH Tanah</span>
              <span className="bg-white text-emerald-700 px-3 py-1 rounded-lg shadow-md border border-emerald-200">{formData.ph}</span>
            </label>
            <input type="range" name="ph" min="0" max="14" step="0.1" value={formData.ph} onChange={handleChange}
              className="w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-emerald-600 hover:accent-emerald-500 transition-all shadow-inner" />
            <div className="flex justify-between text-xs font-bold text-gray-500 mt-2">
              <span>ASAM (0)</span><span className="text-emerald-600">NETRAL (7)</span><span>BASA (14)</span>
            </div>
          </div>

          <div>
            <label className="flex justify-between text-sm font-black text-teal-800 mb-4 uppercase tracking-wider">
              <span className="flex items-center gap-2"><span className="text-xl">💧</span> Kelembaban Lahan</span>
              <span className="bg-white text-teal-700 px-3 py-1 rounded-lg shadow-md border border-teal-200">{formData.moisture}%</span>
            </label>
            <input type="range" name="moisture" min="0" max="100" value={formData.moisture} onChange={handleChange}
              className="w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-teal-600 hover:accent-teal-500 transition-all shadow-inner" />
            <div className="flex justify-between text-xs font-bold text-gray-500 mt-2">
              <span>KERING (0%)</span><span className="text-teal-600">IDEAL (50%)</span><span>BASAH (100%)</span>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button type="submit"
            className="w-full relative overflow-hidden bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-400 hover:via-green-400 hover:to-teal-400 text-white font-black py-5 rounded-2xl shadow-xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transform hover:-translate-y-1 transition-all duration-300 text-xl tracking-widest flex items-center justify-center gap-3 group">
            {/* Efek cahaya mengkilap saat di-hover */}
            <span className="absolute w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            
            <span className="text-2xl group-hover:scale-125 transition-transform duration-300">🪄</span> 
            MULAI KLASIFIKASI AI
            <span className="text-2xl group-hover:scale-125 transition-transform duration-300">🚀</span>
          </button>
        </div>
      </form>
    </div>
  );
}