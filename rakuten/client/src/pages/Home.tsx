import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Search, MessageSquare, Zap, BookOpen, Wifi, Lightbulb, Thermometer } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

  // Preload GIF for smooth animation
  useEffect(() => {
    const img = new Image();
    img.src = '/research_process.gif';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <Wifi className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-900">家電の部屋</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#market" className="text-sm text-slate-600 hover:text-blue-600 transition">市場分析</a>
            <a href="#methods" className="text-sm text-slate-600 hover:text-blue-600 transition">リサーチ手法</a>
            <a href="#tools" className="text-sm text-slate-600 hover:text-blue-600 transition">ツール紹介</a>
            <a href="#faq" className="text-sm text-slate-600 hover:text-blue-600 transition">よくある質問</a>
          </nav>
        </div>
      </header>

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663592682859/g2m6i7DCUY9TbyhpZ3PU9A/appliances_hero-LGkd2bdRZoKZkBRHkGXS84.webp"
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/60 to-transparent"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                スマートホーム家電で月3万円の報酬を実現
              </h2>
              <p className="text-lg text-slate-100 mb-8 leading-relaxed">
                楽天ROOMの家電カテゴリーで売れる商品を効率的にリサーチし、AIを活用したレビュー作成で収入を自動化する完全ガイド。スマートスピーカー、スマート照明、IoT家電から生活家電まで、すべてのカテゴリーを網羅しています。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white gap-2" onClick={() => document.getElementById('methods')?.scrollIntoView({ behavior: 'smooth' })}>
                  リサーチ手法を学ぶ <ArrowRight className="w-4 h-4" />
                </Button>
                <a href="/rakuten_room_automation_guide.pdf" download className="inline-flex">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full">
                    完全ガイドをダウンロード
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Research Process Animation Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="container">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">リサーチプロセスの流れ</h3>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              毎日のリサーチから投稿までの4つのステップを、わずか10分で完了できます。以下のアニメーションで流れを確認してください。
            </p>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-slate-200 max-w-2xl w-full">
                <img 
                  src="/research_process.gif" 
                  alt="リサーチプロセスのアニメーション" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">このガイドで学べること</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "家電市場の完全分析",
                  description: "スマートホーム、調理家電、生活家電の報酬率と市場需要を徹底解析"
                },
                {
                  icon: Search,
                  title: "ランキング活用法",
                  description: "楽天市場の日次・週間・月間ランキングから売れ筋を素早く発見"
                },
                {
                  icon: MessageSquare,
                  title: "SNSトレンド分析",
                  description: "X・Instagram・TikTokから次のトレンド家電を先読みする手法"
                },
                {
                  icon: Zap,
                  title: "ChatGPT活用術",
                  description: "AIを使った効率的なレビュー作成と複数バージョン生成"
                },
                {
                  icon: BookOpen,
                  title: "実践ルーティン",
                  description: "毎日10分のリサーチと週間タスクで月3万円を達成"
                },
                {
                  icon: Wifi,
                  title: "規約遵守と安全化",
                  description: "楽天アフィリエイトガイドラインに準拠した半自動化運用"
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-slate-200">
                    <Icon className="w-8 h-8 text-blue-600 mb-4" />
                    <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Market Analysis Section */}
        <section id="market" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">家電カテゴリーの市場分析</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 border-slate-200">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">市場規模と成長性</h4>
                <p className="text-slate-600 mb-4">
                  楽天市場の家電カテゴリーは、スマートホーム関連製品の急速な成長により、全カテゴリー中でも特に高い需要を示しています。スマートスピーカー、スマートリモコン、スマート照明などのIoT家電は、AI技術の進化に伴い、より自然な音声操作と複雑な指令への対応が可能になり、一般家庭への普及が加速しています。
                </p>
                <p className="text-slate-600">
                  生活家電は季節変動が比較的少なく、安定した需要が見込めます。特に春の新生活シーズン（3月～4月）と冬の買い替えシーズン（10月～12月）に売上が集中します。
                </p>
              </Card>

              <Card className="p-8 border-slate-200">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">報酬率と収益構造</h4>
                <p className="text-slate-600 mb-4">
                  楽天ROOMの家電カテゴリーは、通常、購入金額の<strong>2～4%</strong>の報酬率が適用されます。ただし、楽天アフィリエイトの「料率最大」キャンペーン対象商品では、最大<strong>20%</strong>の高い報酬率が提供される場合があります。
                </p>
                <p className="text-slate-600">
                  <strong>1商品あたりの報酬上限は1,000円</strong>に設定されています。ランクボーナスシステムにより、月間の売上が増加すると基本報酬率に加えてボーナスが付与されます。
                </p>
              </Card>
            </div>

            <Card className="p-8 border-slate-200 bg-gradient-to-r from-blue-50 to-cyan-50">
              <h4 className="text-xl font-semibold text-slate-900 mb-6">カテゴリー別の特性と売上予測</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-slate-900">スマート家電（高成長）</h5>
                    <p className="text-sm text-slate-600">スマートスピーカー、スマートリモコン、スマート照明。急速に成長しており、新商品が頻繁に登場。高い報酬率が期待できます。</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Thermometer className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-slate-900">調理家電（安定需要）</h5>
                    <p className="text-sm text-slate-600">炊飯器、電子レンジ、コーヒーメーカー。食生活の質を高めたいユーザーからの需要が強く、安定した売上が期待できます。</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Wifi className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-slate-900">生活家電（基本需要）</h5>
                    <p className="text-sm text-slate-600">掃除機、洗濯機、冷蔵庫。基本的な生活必需品として安定した需要があり、初心者向けのカテゴリーです。</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Research Methods Section */}
        <section id="methods" className="py-16 md:py-24 bg-white">
          <div className="container">
            <h3 className="text-3xl font-bold text-slate-900 mb-12">4つのリサーチ手法</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  num: "01",
                  title: "楽天市場ランキング分析",
                  description: "日次・週間・月間ランキングをチェックし、リアルタイムの売れ筋商品を特定。順位変動を追跡することで、トレンドの上昇・下降を予測できます。"
                },
                {
                  num: "02",
                  title: "SNSトレンド監視",
                  description: "X、Instagram、TikTokの#スマートホーム、#家電ハッシュタグを監視。インフルエンサーの投稿から、これからバイラルする可能性のある商品を先読みします。"
                },
                {
                  num: "03",
                  title: "ChatGPT活用術",
                  description: "商品情報をChatGPTに入力し、説得力のあるレビュー文を自動生成。複数バージョンを生成して最適なものを選択し、投稿時間を大幅に短縮できます。"
                },
                {
                  num: "04",
                  title: "楽天API統合",
                  description: "楽天Market APIを使用して、複数商品の情報を効率的に収集・整理。プログラムによる自動化で、リサーチの時間をさらに削減できます。"
                }
              ].map((method, idx) => (
                <Card key={idx} className="p-8 border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-blue-200 mb-4">{method.num}</div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">{method.title}</h4>
                  <p className="text-slate-600">{method.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Routine Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container">
            <h3 className="text-3xl font-bold text-slate-900 mb-12">毎日のリサーチルーティン</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 border-l-4 border-l-blue-600 bg-blue-50">
                <div className="text-3xl font-bold text-blue-600 mb-2">朝の3分</div>
                <h4 className="font-semibold text-slate-900 mb-3">ランキング確認</h4>
                <p className="text-sm text-slate-600">楽天市場の家電ランキングをチェック。昨日からの順位変動をメモします。</p>
              </Card>

              <Card className="p-6 border-l-4 border-l-cyan-600 bg-cyan-50">
                <div className="text-3xl font-bold text-cyan-600 mb-2">朝の3分</div>
                <h4 className="font-semibold text-slate-900 mb-3">SNS監視</h4>
                <p className="text-sm text-slate-600">Xの#スマートホーム、#家電ハッシュタグをチェック。新しく話題になっている製品を特定します。</p>
              </Card>

              <Card className="p-6 border-l-4 border-l-indigo-600 bg-indigo-50">
                <div className="text-3xl font-bold text-indigo-600 mb-2">朝の4分</div>
                <h4 className="font-semibold text-slate-900 mb-3">AI情報整理</h4>
                <p className="text-sm text-slate-600">ChatGPTで特定した2～3の有望な商品について、簡単な情報整理を行います。</p>
              </Card>
            </div>

            <Card className="mt-8 p-8 border-slate-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">週間タスク（30分）</h4>
              <div className="space-y-3 text-slate-700">
                <p><strong>・最初の15分：</strong> ChatGPTを使用してレビュー文を生成。複数バージョンを生成し、最も説得力のあるものを選択します。</p>
                <p><strong>・次の10分：</strong> 生成されたレビュー文を編集・確認し、楽天ROOMに投稿します。</p>
                <p><strong>・最後の5分：</strong> 先週投稿した商品の売上データを確認し、どのような特徴の商品が売れやすいかを分析します。</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="py-16 md:py-24 bg-white">
          <div className="container">
            <h3 className="text-3xl font-bold text-slate-900 mb-12">活用できるツール</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "楽天市場ランキング",
                  url: "https://ranking.rakuten.co.jp/daily/562637/",
                  description: "家電の日次・週間・月間ランキングを確認。売れ筋商品の最新情報源。",
                  icon: "📊"
                },
                {
                  name: "ChatGPT",
                  url: "https://chatgpt.com/",
                  description: "商品情報からレビュー文を自動生成。複数バージョン生成で効率化。",
                  icon: "🤖"
                },
                {
                  name: "Google Trends",
                  url: "https://trends.google.co.jp/",
                  description: "検索トレンドから市場の関心を分析。季節性を把握できます。",
                  icon: "📈"
                },
                {
                  name: "楽天ROOM",
                  url: "https://room.rakuten.co.jp/",
                  description: "商品を投稿・管理するメインプラットフォーム。",
                  icon: "🏠"
                },
                {
                  name: "Rakuten Market API",
                  url: "https://webservice.rakuten.co.jp/",
                  description: "プログラムによる商品情報の自動取得。リサーチの自動化に最適。",
                  icon: "⚙️"
                },
                {
                  name: "楽天アフィリエイト",
                  url: "https://affiliate.rakuten.co.jp/",
                  description: "報酬の管理と料率確認。ガイドラインの確認も重要です。",
                  icon: "💰"
                }
              ].map((tool, idx) => (
                <a key={idx} href={tool.url} target="_blank" rel="noopener noreferrer">
                  <Card className="p-6 border-slate-200 hover:shadow-lg transition-all hover:border-blue-400 cursor-pointer h-full">
                    <div className="text-3xl mb-3">{tool.icon}</div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{tool.name}</h4>
                    <p className="text-sm text-slate-600 mb-3">{tool.description}</p>
                    <div className="text-blue-600 text-sm font-medium flex items-center gap-1">
                      詳細を見る <ArrowRight className="w-3 h-3" />
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container">
            <h3 className="text-3xl font-bold text-slate-900 mb-12">よくある質問</h3>
            <div className="space-y-4">
              {[
                {
                  q: "月3万円の報酬を達成するには、どのくらいの期間が必要ですか？",
                  a: "平均的には、毎日のリサーチと週3～5件の投稿を継続した場合、2～3ヶ月で月3万円の報酬に到達することが期待できます。ただし、選択するカテゴリー、投稿の質、SNSでのバイラル効果などにより、期間は大きく変動します。"
                },
                {
                  q: "すべてのプロセスを自動化できますか？",
                  a: "いいえ。楽天アフィリエイトは、完全自動化を禁止しています。リサーチと文章作成にAIを活用することは許可されていますが、投稿は必ず手動で行い、各投稿を確認・編集する必要があります。"
                },
                {
                  q: "どのカテゴリーが最も利益性が高いですか？",
                  a: "スマートホーム関連製品は、高い報酬率と急速な市場成長により、現在最も利益性が高いカテゴリーです。ただし、競争も激しいため、詳細で信頼性の高いレビューが必須です。"
                },
                {
                  q: "初心者でも成功できますか？",
                  a: "はい。このガイドで紹介されているプロセスに従い、毎日のリサーチと週間タスクを継続することで、初心者でも月3万円の報酬を達成することは十分可能です。重要なのは、継続性と、ユーザーに価値を提供することへの意識です。"
                },
                {
                  q: "楽天アフィリエイトのガイドラインで禁止されていることは？",
                  a: "誤解を招く表現（「確実に稼げる」「必ず売れる」など）の使用、他のアフィリエイターのコンテンツの無断転載、過度に自動化されたコンテンツの大量投稿が禁止されています。各投稿の前に、これらのチェックを行うことが重要です。"
                },
                {
                  q: "複数のカテゴリーに同時に取り組むべきですか？",
                  a: "最初は1～2のカテゴリーに絞り、十分な知識と投稿数を確保してから、他のカテゴリーに展開することをお勧めします。各カテゴリーの特性を深く理解することで、より説得力のあるレビューが作成できます。"
                }
              ].map((item, idx) => (
                <Card key={idx} className="p-6 border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-3 text-lg">{item.q}</h4>
                  <p className="text-slate-600">{item.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">今すぐ家電リサーチを始めましょう</h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              このガイドで紹介されているプロセスに従い、毎日のリサーチと週間タスクを継続することで、月3万円以上の報酬を達成できます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://room.rakuten.co.jp/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 gap-2">
                  楽天ROOMを開く <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="/rakuten_room_automation_guide.pdf" download>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                  完全ガイドをダウンロード
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-12">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-white mb-4">ガイド</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#market" className="hover:text-white transition">市場分析</a></li>
                  <li><a href="#methods" className="hover:text-white transition">リサーチ手法</a></li>
                  <li><a href="#tools" className="hover:text-white transition">ツール紹介</a></li>
                  <li><a href="#faq" className="hover:text-white transition">よくある質問</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">リソース</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://ranking.rakuten.co.jp/daily/562637/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">楽天ランキング</a></li>
                  <li><a href="https://room.rakuten.co.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">楽天ROOM</a></li>
                  <li><a href="https://affiliate.rakuten.co.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">楽天アフィリエイト</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">ツール</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">ChatGPT</a></li>
                  <li><a href="https://trends.google.co.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Google Trends</a></li>
                  <li><a href="https://webservice.rakuten.co.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Rakuten API</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">ガイドラインと規約</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://affiliate.rakuten.co.jp/guideline/rule/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">アフィリエイト規約</a></li>
                  <li><a href="/rakuten_room_automation_guide.pdf" download className="hover:text-white transition">完全ガイド</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-8 text-center text-sm">
              <p>© 2026 家電の部屋 - 楽天ROOM家電リサーチガイド. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
