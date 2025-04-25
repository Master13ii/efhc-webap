import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto p-8">
        <h2 className="text-3xl font-semibold">О проекте EFHC</h2>
        <p className="mt-4">
          EFHC — это экологически чистая энергетическая валюта, обеспеченная солнечной энергией.
        </p>
        <h3 className="mt-8 text-xl font-semibold">Токеномика</h3>
        <p className="mt-4">
          Токен EFHC будет использоваться для поддержания глобального фонда базового дохода.
        </p>
      </main>
      <Footer />
    </div>
  );
}
