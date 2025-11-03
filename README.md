# AIGEN - GitHub Copilot Instructions Generator

プロジェクト構造を自動分析して、GitHub Copilot用の指示書を生成するカスタムコマンドです。

## 🚀 使い方

### Copilotカスタムコマンドとして実行
```
/aigen
```

このコマンドを実行すると、現在のプロジェクトを分析し、`.github/copilot-instructions.md` を自動生成します。

## 📊 生成される指示書の内容

AIGENは以下の7つのセクションを含む包括的な指示書を生成します：

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

## 🔧 対応技術

### 自動検出できる言語
- JavaScript/TypeScript
- Python
- Java
- C#
- Go
- Rust
- PHP
- Ruby
- Swift
- Kotlin
- Dart (Flutter)

### 自動検出できるフレームワーク
- **JavaScript/TypeScript**: React, Vue, Angular, Next.js, Express, etc.
- **Python**: Django, Flask, FastAPI, etc.
- **Java**: Spring, Spring Boot
- **C#**: .NET, ASP.NET Core
- **Go**: Gin, Echo, Fiber
- **Rust**: Actix, Rocket
- **PHP**: Laravel, Symfony
- **Ruby**: Rails, Sinatra
- **Flutter/Dart**: Flutter, Material Design, Provider, Riverpod, BLoC, GetX

### 自動検出できるテストフレームワーク
- **JavaScript/TypeScript**: Jest, Vitest, Mocha, Cypress, Playwright
- **Python**: pytest, unittest, Selenium
- **Java**: JUnit, TestNG
- **C#**: xUnit, NUnit
- **Go**: testing, testify
- **Ruby**: RSpec, Minitest
- **Flutter/Dart**: flutter_test, integration_test, mockito

## 📁 設定ファイル

このコマンドは以下のプロンプトファイルを使用します：
- `prompts/github-copilot/aigen.prompt.md` - メインの分析ロジック

## 🎯 カスタマイズ

生成された指示書は、プロジェクトの要件に合わせて手動で編集することをお勧めします。特に以下の点を調整すると効果的です：

- プロジェクト固有のコーディング規約
- チーム特有の開発ルール
- 特定のビジネスドメインに関する指示
- セキュリティポリシーの詳細

## 📝 使用例

### Reactプロジェクトの場合
```
/aigen
```
→ React、TypeScript、Jestに関する具体的な指示が生成されます。

### Python Djangoプロジェクトの場合
```
/aigen
```
→ Django、pytest、Pythonに関する指示が生成されます。

### Flutterプロジェクトの場合
```
/aigen
```
→ Flutter、Dart、Provider/BLoC、flutter_testに関する具体的な指示が生成されます。

## 🤝 貢献

バグ報告や機能要望はGitHub Issuesで受け付けています。

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。