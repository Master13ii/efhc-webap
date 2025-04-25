import Header from '../components/Header';
import Footer from '../components/Footer';

export default function News() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto p-8">
        <h2 className="text-3xl font-semibold">Новости</h2>
        <p className="mt-4">Здесь будут отображаться последние новости и акции проекта.</p>
      </main>
      <Footer />
    </div>
  );
}
