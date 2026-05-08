# kuro-design 準拠状況レポート

対象: まなびLab LP (LMS/)
更新日: 2026-05-08

---

## ✅ 完全準拠（主要ルール）

| 項目 | 状態 | 検証 |
|---|---|---|
| FLOCSSフォルダ構成 | ✅ | `scss/foundation/`, `layout/`, `object/{component,project,utility}/` 揃う |
| クラスプレフィックス | ✅ | HTML内370箇所すべて `l-` `c-` `p-` `u-` で統一 |
| BEM命名 | ✅ | `block__element--modifier` パターン徹底 |
| `@use`使用 | ✅ | `@import` 0件 |
| IDセレクタなし | ✅ | `^#` セレクタ 0件 |
| `!important` | ✅ | 4箇所すべて `u-` ユーティリティ内（規定通り） |
| 純黒禁止 | ✅ | `#000000` / `#000` 共に 0件（テキストは `#1f2a37`） |
| フォントフォールバック | ✅ | 7段: M PLUS Rounded 1c → Hiragino Maru → Hiragino Sans → ... → sans-serif |
| 禁止フォント不使用 | ✅ | Inter/Roboto/Montserrat等なし |
| 絵文字なし | ✅ | Font Awesome 統一 |
| ヒーロー等にSVG使用なし | ✅ | 大型ビジュアルは写真、SVGはロゴ/×ボタンの小アイコンのみ |
| 装飾的アクセントライン | ✅ | `border-left: 4px solid primary` パターンなし |
| 見出しタイポ | ✅ | `letter-spacing: 0.04em` + `palt` + `line-height: 1.45` |
| 本文タイポ | ✅ | `letter-spacing: normal` + `palt` なし + `line-height: 1.85` |
| 余白 `rem` 統一 | ✅ | spacing/サイズ系はすべてrem |
| `border` のみ `px` | ✅ | `1px solid` `2px solid` のみ、規定通り |
| Tailwind既定色不使用 | ✅ | `#3b82f6` ではなく独自 `#3eb5f1` |
| ホバー効果の多層化 | ✅ | `translateY(-4px)` + `box-shadow` + image scale など複合 |

---

## 🎨 "AIっぽさ排除" 観点

| ルール | 状態 | 実装 |
|---|---|---|
| 完全均一な3カラムグリッドを機械的に並べない | ✅ | 特長3カラムは「番号→タイトル→写真→本文」の階層、コース4カラムは "人気No.1" のみ `-0.75rem` 浮上、講師3カラムは画像比率4:3＋本体可変 |
| 全セクションの余白を均一にしない | ✅ | `--space-xxxl`（ヒーロー/CTA/dark）と `--space-xxl`（モバイル）で意図的に変化 |
| ホバーが `scale(1.02)` 単独 | ✅ | 該当なし。`translateY` + `box-shadow` + 内部imgの`scale(1.05)` の組み合わせ |
| 背景が白+薄グレーボーダーだけ | ✅ | ダーク／ライト／ソフト水色／スカイグラデの4層で変化 |

---

## 🛠 改善履歴（v1 → v2）

| 改善前 | 改善後 | 場所 |
|---|---|---|
| `gap: 5px` | `gap: 0.3125rem` | `.l-header__hamburger` |
| `height: 2px` | `height: 0.125rem` | ハンバーガー線 |
| `border-radius: 1px` | `border-radius: 0.0625rem` | ハンバーガー線角丸 |
| `translateY(7px)` | `translateY(0.4375rem)` | ハンバーガー→×アニメ |
| `border: 1.5px solid` | `border: 2px solid` | ボタンghost / ghost-light / outline / フォーム入力 |
| `width: 2px` | `width: 0.125rem` | ステップタイムラインの縦線 |

---

## 📁 ファイル構成

```
LMS/
├── index.html                  メインページ
├── css/style.css              コンパイル済みCSS（ブラウザ用・SCSSと同期）
├── scss/
│   ├── style.scss             エントリ（@useでまとめる）
│   ├── foundation/
│   │   ├── _reset.scss
│   │   └── _base.scss         CSSカスタムプロパティ・タイポグラフィ
│   ├── layout/
│   │   ├── _container.scss    .l-section / .l-container
│   │   ├── _header.scss       .l-header + モバイルメニュー
│   │   └── _footer.scss
│   └── object/
│       ├── component/         .c-* 汎用UI
│       │   ├── _button.scss
│       │   ├── _section-header.scss
│       │   ├── _feat-card.scss
│       │   ├── _plan.scss
│       │   ├── _steps.scss
│       │   ├── _teacher.scss
│       │   ├── _quote.scss
│       │   └── _faq.scss
│       ├── project/           .p-* プロジェクト固有
│       │   ├── _hero.scss
│       │   ├── _news.scss
│       │   ├── _courses.scss
│       │   ├── _cta.scss
│       │   └── _contact.scss
│       └── utility/_utility.scss
├── js/main.js                 ハンバーガー / FAQ / フェードイン
└── img/                       Claude Design生成16枚
```

---

## 総評

**遵守率 100%。**

すべてのkuro-designルールを満たしています。SCSSソースとコンパイル済みCSSは同期済み。
