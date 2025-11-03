# ARGEN - Agent Rules Generator

プロジェクト構造を自動分析して、AIエージェント（GitHub Copilot、Windsurf、Cursor）用の指示書を生成するカスタムコマンドです。

## 🚀 使い方

### インストール（セットアップ）
プロジェクトにARGENをインストールしてプロンプトファイルを配置します：

```bash
# GitHub Copilot用（デフォルト）
npx argen

# または明示的に環境を指定
npx argen --copilot    # GitHub Copilot用
npx argen --windsurf   # Windsurf用
npx argen --cursor     # Cursor用
```

### Copilotカスタムコマンドとして実行
インストール後、以下のコマンドを実行してください：
```
/argen
```

このコマンドを実行すると、現在のプロジェクトを分析し、環境に応じた指示書を自動生成します：
- **GitHub Copilot**: `.github/copilot-instructions.md`
- **Windsurf**: `.windsurf/rules/instructions.md`
- **Cursor**: `.cursor/rules/instructions.md`

## 📊 生成される指示書の内容

ARGENは以下の7つのセクションを含む包括的な指示書を生成します：

### 1. 前提条件
- AIへの基本指示（日本語回答、大規模変更の事前確認など）
- コミュニケーションルール

### 2. アプリの概要
- プロジェクトの目的と特徴
- 主要な技術要素

### 3. 技術スタック（エコシステム）
- 検出された言語、フレームワーク、パッケージマネージャー
- バージョン互換性に関する注意事項

### 4. ディレクトリ構成
- 主要なディレクトリとその役割
- ファイル配置ルール

### 5. アーキテクチャ・設計指針
- 検出された設計パターン
- 設計原則とコード組織ルール

### 6. テスト方針
- 使用されているテストフレームワーク
- テスト記述方針と命名規則

### 7. アンチパターン
- 言語ごとの禁止事項
- コード品質とセキュリティに関するルール

## 🎯 カスタマイズ

生成された指示書は、プロジェクトの要件に合わせて手動で編集することをお勧めします。特に以下の点を調整すると効果的です：

- プロジェクト固有のコーディング規約
- チーム特有の開発ルール
- 特定のビジネスドメインに関する指示
- セキュリティポリシーの詳細

## 🌟 対応環境

ARGENは以下のAI開発環境をサポートしています：

### GitHub Copilot
- プロンプトファイル配置先: `.github/prompts/argen.prompt.md`
- 生成される指示書: `.github/copilot-instructions.md`

### Windsurf
- プロンプトファイル配置先: `.windsurf/workflows/argen.md`
- 生成される指示書: `.windsurf/rules/instructions.md`

### Cursor
- プロンプトファイル配置先: `.cursor/commands/argen.md`
- 生成される指示書: `.cursor/rules/instructions.md`

## 🤝 貢献

バグ報告や機能要望はGitHub Issuesで受け付けています。

## 📄 ライセンス

このプロジェクトはApache-2.0ライセンスの下で公開されています。