import React from 'react';

export default function Header() {
  return (
    // PERUBAHAN UI: Gradient Navbar, Sticky top, Backdrop blur, Shadow colored
    <header className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 text-white py-5 shadow-lg shadow-emerald-600/30 sticky top-0 z-50 backdrop-blur-md bg-opacity-90 border-b border-white/20">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <h1 className="text-3xl font-extrabold tracking-wide flex items-center gap-3 drop-shadow-md">
          <span className="text-4xl bg-white/20 p-2 rounded-xl backdrop-blur-sm">🌱</span> 
          AgroSmart
        </h1>
        <div className="hidden md:flex flex-col items-end">
          <p className="text-white font-bold tracking-wider text-sm">SISTEM CERDAS REKOMENDASI</p>
          <p className="text-emerald-100 text-xs font-medium bg-emerald-800/40 px-3 py-1 rounded-full mt-1 border border-emerald-400/30">
            Powered by Machine Learning
          </p>
        </div>
      </div>
    </header>
  );
}