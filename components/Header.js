import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">EFHC Project</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Главная</Link></li>
            <li><Link href="/nft">NFT Коллекции</Link></li>
            <li><Link href="/about">О проекте</Link></li>
            <li><Link href="/news">Новости</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
