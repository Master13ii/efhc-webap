import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto p-8">
        <h2 className="text-3xl font-semibold">Добро пожаловать в EFHC!</h2>
        <p className="mt-4">
          Проект EFHC — экологически чистая энергетическая валюта для устойчивого будущего.
        </p>
        <button
          onClick={() => window.Telegram.WebApp.open()}
          className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Открыть в WebApp
        </button>
      </main>
      <Footer />
    </div>
  );
}
