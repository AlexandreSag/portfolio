<div align="center">

**Langue / Language / 言語**  
[FR](./README.md) · [EN](./README.en.md) · **JA**

</div>

<div align="center">
  <h1>/ Alexandre Sage — ポートフォリオ</h1>
  <p>フルスタック開発者のポートフォリオ · Web · ブロックチェーン · 自動化</p>

  <p>
    <a href="https://react.dev/" target="_blank">
      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    </a>
    <a href="https://vitejs.dev/" target="_blank">
      <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    </a>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
    <a href="https://eslint.org/" target="_blank">
      <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
    </a>
  </p>
</div>

---

## / 概要

このリポジトリは、個人のプロフェッショナル・ポートフォリオのソースコードです。  
大きなフレームワーク（Next.js 等）を使わずに構築した Single Page Application（SPA）で、**高速**で**保守しやすく**、アーキテクチャとパフォーマンスを完全にコントロールすることを目的としています。

## / 主な機能

- **完全な多言語対応（i18n）** — フランス語、英語、日本語に対応。コンテンツはロジックと UI から完全に分離されています。
- **ダイナミックテーマ** — ライト / ダークモードのネイティブサポート。CSS 変数のみで制御し、JS による重い再レンダリングは発生しません。
- **レスポンシブ＆モバイルファースト** — `clamp()`、`min()` と最適化されたブレイクポイントによる、あらゆる画面サイズに対応するデザインです。
- **分離されたアーキテクチャ** — カスタムフック（`usePortfolioApp`）を使い、状態管理ロジックと表示コンポーネントを完全に分離しています。
- **スマートナビゲーション** — ネイティブのハッシュ履歴 API とスクロール復元により、ページのリロードなしにプロジェクトを切り替えられます。
- **SEO 対応** — `lang` 属性とメタデータの動的な更新を行います。

## / 技術スタック

- **コア** : [React 19](https://react.dev/)
- **ビルドツール** : [Vite](https://vitejs.dev/)
- **スタイリング** : Vanilla CSS（CSS Variables、Flexbox、CSS Grid）
- **デプロイ** : 静的ホスティング対応（Vercel、Netlify、Nginx、GitHub Pages）

## / プロジェクト構成

```
src/
├── assets/       # 画像、動画、ドキュメント（履歴書）
├── components/   # UI コンポーネント（Header、PortfolioHome、ProjectDetail…）
├── content/      # 静的データと翻訳（siteContent.js）
├── hooks/        # フロントエンドロジック（usePortfolioApp.js）
├── App.jsx       # アプリケーションのエントリーポイント（オーケストレーション）
├── main.jsx      # React マウントポイント
└── index.css     # デザインシステム、CSS トークン、メディアクエリ
```

## / ローカルでの起動

[Node.js](https://nodejs.org/en/) が必要です。

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/YOUR_USER/YOUR_REPO.git
   cd YOUR_REPO
   ```

2. **依存関係をインストール**
   ```bash
   npm install
   ```

3. **開発サーバーを起動**
   ```bash
   npm run dev
   ```
   `http://127.0.0.1:5184` でアクセスできます。

4. **本番ビルド**
   ```bash
   npm run build
   ```
   出力は `dist/` フォルダに生成されます。

## / 開発方針

1. **明快なフロントエンド** — 明確なビジュアルヒエラルキー、可読性、タイポグラフィの仕上げ。
2. **拡張性のある構造** — データ（`siteContent.js`）とフックを厳密に分離し、将来的にヘッドレス CMS への接続も想定した設計です。
3. **UI ライブラリ非依存** — Material-UI や Bootstrap は不使用。デザインシステムは完全にカスタムで構築しています。

## / お問い合わせ

- **メール** : [alexandre.sagepro@gmail.com](mailto:alexandre.sagepro@gmail.com)
- **LinkedIn** : [Alexandre Sage](https://www.linkedin.com/in/alexandre-sage-08aa57227/)

---
<div align="center">
  <sub>Alexandre Sage が丁寧に制作しました</sub>
</div>
