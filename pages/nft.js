// pages/nft.js
import React from 'react';
import Link from 'next/link';

const NftPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">NFT Серия "Энергетический Ваучер EFHC"</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">1. Назначение и концепция</h2>
        <p>
          Каждый NFT — это цифровой ваучер, дающий право на 3 600 EFHC (3 600 кВт·ч) энергии, которая разблокируется автоматически по 15 EFHC ежемесячно в течение 240 месяцев. 
          Утилитарная ценность: покупатель купил не токен как актив, а право на поставку энергии по текущей цене. 
          Отсутствие инвестиционной функции: нет обещаний прибыли, дивидендов или участия в управлении.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">2. Токеномика</h2>
        <p>
          Объём коллекции: 5 000 NFT. Цена единицы: 200 USDT. Общая выручка: 5 000 × 200 USDT = 1 000 000 USDT. 
          Общее количество EFHC: 18 000 000 EFHC (замораживается в контракте).
        </p>
        <p>
          График разблокировки: равномерно — 15 EFHC/мес. × 240 мес.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">3. Условия активации контракта</h2>
        <p>
          1. Депозит EFHC: Заказчик перечисляет ровно 18 000 000 EFHC на адрес контракта через стандартный transfer.<br />
          2. Проверка: Контракт проверяет поступление полной суммы и меняет флаг activated = true.<br />
          3. Продажа активируется: Только после установки activated в true доступны функции продажи NFT.
        </p>
      </section>

      {/* Здесь добавьте остальные разделы аналогичным образом */}

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">7. Метаданные</h2>
        <p>
          Формат: JSON.<br />
          Язык: только английский.<br />
          Требования: поля name, description, energy_total_kwh, unlock_per_month, unlock_months, unlock_start_date, collection_id, serial_number, efhc_contract_address, current_owner.
        </p>
        <pre className="bg-gray-100 p-4 rounded">
          {
            `{
  "name": "EFHC Voucher 1/0123",
  "description": "Energy voucher for 3,600 kWh, unlocking 15 EFHC/month over 240 months.",
  "energy_total_kwh": 3600,
  "unlock_per_month": 15,
  "unlock_months": 240,
  "unlock_start_date": "2025-05-13",
  "collection_id": 1,
  "serial_number": "0123",
  "efhc_contract_address": "EQC..."
}`
          }
        </pre>
      </section>

      {/* Добавьте другие разделы, например, описание привилегий, нумерацию NFT и т.д. */}

      <section className="text-center mt-8">
        <Link href="/buy-nft">
          <a className="text-xl text-blue-500">Купить NFT</a>
        </Link>
      </section>
    </div>
  );
};

export default NftPage;
