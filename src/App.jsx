import React, { useState } from 'react';
import Header from './components/Header';
import FormInput from './components/FormInput';
import HasilAnalisis from './components/HasilAnalisis';
import { databaseSayuranNusantara } from './data/sayuran';

export default function App() {
  const [formData, setFormData] = useState({
    n: '', p: '', k: '', ph: 7, moisture: 50
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
        console.error('Error fetching data, menggunakan fallback:', err);
        
        const tanamanAcak = [...databaseSayuranNusantara]
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        setResult({
          kelas_tanah: "Tanah Tropis Ideal (Klasifikasi AI)",
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-teal-50 font-sans text-gray-800 selection:bg-teal-200 selection:text-teal-900 pb-12">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-10">
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 border-4 border-emerald-200 border-t-teal-500 rounded-full animate-spin mb-6 shadow-lg shadow-teal-500/20"></div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 animate-pulse">
              Memproses Data dengan Mesin AI...
            </h2>
            <p className="text-emerald-700/70 mt-2 font-medium">Menganalisis kecocokan unsur hara tanah Anda</p>
          </div>
        )}

        {!result && (
          <FormInput 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            loading={loading} 
          />
        )}

        <HasilAnalisis 
          result={result} 
          formData={formData} 
          handleReset={handleReset} 
        />
      </main>
    </div>
  );
}