'use client';

import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Hakkımızda</h1>
        
        <div className="space-y-6 text-gray-600">
          <p>
            Bu Todo uygulaması, modern web teknolojileri kullanılarak geliştirilmiş basit ve kullanışlı bir görev yönetim aracıdır.
          </p>
          
          <p>
            Kullanılan Teknolojiler:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Next.js 14</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Docker</li>
          </ul>

          <p>
            Özellikler:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Görev ekleme ve silme</li>
            <li>Görevleri tamamlandı olarak işaretleme</li>
            <li>Yerel depolama ile veri saklama</li>
            <li>Responsive tasarım</li>
            <li>Docker ile containerization</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </main>
  );
} 