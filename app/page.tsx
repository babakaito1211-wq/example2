'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Portfolio</h1>
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection('about')}
                className={`font-medium transition ${
                  activeSection === 'about'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                自己紹介
              </button>
              <button
                onClick={() => scrollToSection('research')}
                className={`font-medium transition ${
                  activeSection === 'research'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                研究内容
              </button>
              <button
                onClick={() => scrollToSection('career')}
                className={`font-medium transition ${
                  activeSection === 'career'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                経歴
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`font-medium transition ${
                  activeSection === 'contact'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                お問い合わせ
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 自己紹介セクション */}
        <section id="about" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">自己紹介</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  Photo
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">太郎 花子</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  こんにちは。私は、テクノロジーと研究に情熱を持つプロフェッショナルです。
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  機械学習と人工知能の分野で、約5年の実務経験があります。
                  複雑な問題を解決し、革新的なソリューションを提案することが得意です。
                </p>
                <div className="flex gap-4 mt-6">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    履歴書ダウンロード
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 研究内容セクション */}
        <section id="research" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">研究内容</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">深層学習モデルの最適化</h3>
                <p className="text-gray-700">
                  ニューラルネットワークの効率化と高速化に関する研究を行っています。
                  特にエッジデバイスでの実行を最適化する技術に注力しています。
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">自然言語処理</h3>
                <p className="text-gray-700">
                  日本語テキスト処理とセンチメント分析の研究を推進しています。
                  実務レベルのアプリケーション開発にも携わっています。
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">コンピュータビジョン</h3>
                <p className="text-gray-700">
                  画像認識および物体検出の実装と改善に関する研究を行っています。
                  医療画像解析への応用も検討中です。
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">データ分析</h3>
                <p className="text-gray-700">
                  大規模データセットの分析とビジュアライゼーションを專門としています。
                  ビジネスインサイトの抽出に貢献しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 経歴セクション */}
        <section id="career" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">経歴</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">職歴</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">Senior AI Engineer</h4>
                      <p className="text-blue-600 font-semibold">テックカンパニーA</p>
                    </div>
                    <span className="text-gray-600">2022年 - 現在</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    AI/ML プロダクトの開発と運用を担当。チームリードとして5名のエンジニアを管理。
                  </p>
                </div>
                
                <div className="border-l-4 border-green-600 pl-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">Machine Learning Engineer</h4>
                      <p className="text-blue-600 font-semibold">テックカンパニーB</p>
                    </div>
                    <span className="text-gray-600">2020年 - 2022年</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    推薦システムの開発と改善、データ分析パイプラインの構築を実施。
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">Data Analyst</h4>
                      <p className="text-blue-600 font-semibold">テックカンパニーC</p>
                    </div>
                    <span className="text-gray-600">2019年 - 2020年</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    顧客データの分析とレポート作成、ビジネスインサイトの提供。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">学歴</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-600 pl-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">修士号（情報科学）</h4>
                      <p className="text-blue-600 font-semibold">東京大学大学院</p>
                    </div>
                    <span className="text-gray-600">2019年</span>
                  </div>
                  <p className="text-gray-700 mt-2">専攻: 機械学習と自然言語処理</p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">学士号（情報工学）</h4>
                      <p className="text-blue-600 font-semibold">東京工業大学</p>
                    </div>
                    <span className="text-gray-600">2017年</span>
                  </div>
                  <p className="text-gray-700 mt-2">GPA: 3.8/4.0</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section id="contact" className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">お問い合わせ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">ご連絡先</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 font-semibold">メール</p>
                    <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
                      contact@example.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">電話</p>
                    <a href="tel:+81901234567" className="text-blue-600 hover:underline">
                      +81 (90) 1234-5678
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">SNS</p>
                    <div className="flex gap-4 mt-2">
                      <a href="#" className="text-blue-600 hover:underline">
                        LinkedIn
                      </a>
                      <a href="#" className="text-blue-600 hover:underline">
                        Twitter
                      </a>
                      <a href="#" className="text-blue-600 hover:underline">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">フォーム</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="お名前"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="email"
                    placeholder="メールアドレス"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <textarea
                    placeholder="メッセージ"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
                  >
                    送信
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
