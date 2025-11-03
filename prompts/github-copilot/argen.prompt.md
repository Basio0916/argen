# ARGEN - GitHub Copilot Instructions Generator

このコマンドを実行すると、現在のプロジェクトを分析してGitHub Copilot用の指示書(.github/copilot-instructions.md)を自動生成します。

## 実行方法
`/argen` と入力して実行してください。

---

# プロジェクト分析と指示書生成

あなたはプロジェクト分析エキスパートです。以下の手順で現在のプロジェクトを分析し、GitHub Copilot用の包括的な指示書を生成してください。

## ステップ1: プロジェクト構造の分析

まず、現在のプロジェクトのルートディレクトリとサブディレクトリをスキャンし、以下の情報を収集してください：

### 検出するファイルとパターン
- `package.json` - Node.js/JavaScript/TypeScriptプロジェクト
- `requirements.txt`, `Pipfile`, `pyproject.toml` - Pythonプロジェクト  
- `Cargo.toml` - Rustプロジェクト
- `go.mod` - Goプロジェクト
- `pom.xml`, `build.gradle` - Javaプロジェクト
- `composer.json` - PHPプロジェクト
- `Gemfile` - Rubyプロジェクト
- `*.csproj`, `*.sln` - C#/.NETプロジェクト
- `pubspec.yaml` - Flutter/Dartプロジェクト

### データベース関連ファイルの検出
- `schema.sql`, `*.sql` - SQLスキーマファイル
- `schema.hcl`, `atlas.hcl` - Atlasスキーマファイル
- `migrations/` - データベースマイグレーションディレクトリ
- `prisma/schema.prisma` - Prisma ORMスキーマ
- `drizzle/`, `*.drizzle.ts` - Drizzle ORM設定
- `sequelize/`, `models/` - Sequelizeモデル
- `typeorm/`, `*.entity.ts` - TypeORMエンティティ
- `django/`, `models.py` - Django ORMモデル
- `sqlalchemy/`, `models.py` - SQLAlchemyモデル
- `alembic/` - Alembicマイグレーション
- `flyway/` - Flywayマイグレーション
- `liquibase/` - Liquibase変更セット

### ディレクトリ構成の分析
- `src/`, `lib/`, `app/` - メインソースコード
- `components/`, `views/`, `pages/` - UI関連
- `controllers/`, `models/`, `services/` - アーキテクチャ層
- `utils/`, `helpers/`, `common/` - 共通コード
- `tests/`, `test/`, `__tests__/`, `spec/` - テストコード
- `config/`, `settings/` - 設定ファイル
- `docs/`, `documentation/` - ドキュメント
- `assets/`, `static/`, `public/` - 静的リソース
- `lib/` - Flutter/Dartのメインソースコード
- `android/`, `ios/` - Flutterプラットフォーム固有コード
- `web/` - Flutter Web対応コード
- `test/` - Flutterテストコード
- `integration_test/` - Flutter統合テスト
- `db/`, `database/` - データベース関連ファイル
- `migrations/` - データベースマイグレーション
- `seeds/`, `seeders/` - データベースシード

## ステップ2: 技術スタックの特定

検出したファイルから以下の情報を抽出：

### 言語の検出
- JavaScript/TypeScript (.js, .ts, .jsx, .tsx)
- Python (.py)
- Java (.java)
- C# (.cs)
- Go (.go)
- Rust (.rs)
- PHP (.php)
- Ruby (.rb)
- Swift (.swift)
- Kotlin (.kt)
- Dart (.dart) - Flutter

### フレームワークとライブラリ
- **JavaScript/TypeScript**: React, Vue, Angular, Next.js, Nuxt.js, Express, Fastify, Koa, Svelte, Astro
- **Python**: Django, Flask, FastAPI, SQLAlchemy, Pandas, NumPy
- **Java**: Spring, Spring Boot, Jakarta EE
- **C#**: .NET, ASP.NET Core, Entity Framework
- **Go**: Gin, Echo, Fiber
- **Rust**: Actix, Rocket, Tokio
- **PHP**: Laravel, Symfony
- **Ruby**: Rails, Sinatra
- **Flutter/Dart**: Flutter, Material Design, Cupertino (iOS-style), Provider, Riverpod, Bloc, GetX, Dio

### データベースとORM
- **JavaScript/TypeScript**: Prisma, Drizzle ORM, Sequelize, TypeORM, Mongoose, Knex.js
- **Python**: SQLAlchemy, Django ORM, Peewee, Tortoise ORM
- **Java**: Hibernate, JPA, MyBatis, Spring Data JPA
- **C#**: Entity Framework Core, Dapper, NHibernate
- **Go**: GORM, sqlx, ent, SQLBoiler
- **Rust**: Diesel, sqlx, sea-orm
- **PHP**: Eloquent (Laravel), Doctrine ORM
- **Ruby**: ActiveRecord (Rails), Sequel
- **データベース管理ツール**: Atlas, Flyway, Liquibase, Alembic

### テストフレームワーク
- **JavaScript/TypeScript**: Jest, Vitest, Mocha, Jasmine, Cypress, Playwright, Testing Library
- **Python**: pytest, unittest, nose, Selenium
- **Java**: JUnit, TestNG, Mockito
- **C#**: xUnit, NUnit, Moq
- **Go**: testing, testify
- **Ruby**: RSpec, Minitest
- **Flutter/Dart**: flutter_test, integration_test, mockito

## ステップ3: アーキテクチャパターンの推測

ディレクトリ構成からアーキテクチャパターンを特定：

### 検出するパターン
- **Component-Based**: `components/` ディレクトリの存在
- **MVC/MVP**: `models/`, `views/`, `controllers/` の構成
- **Clean Architecture**: `domain/`, `usecases/`, `interfaces/`, `infrastructure/`
- **Atomic Design**: `atoms/`, `molecules/`, `organisms/`, `templates/`, `pages/`
- **Layered Architecture**: `layers/` や `presentation/`, `business/`, `data/`
- **Microservices**: 複数の独立したサービスディレクトリ
- **Monorepo**: `packages/`, `apps/`, `libs/` の構成
- **Flutter Architecture**: `lib/screens/`, `lib/widgets/`, `lib/models/`, `lib/services/`, `lib/repositories/` の構成
- **BLoC Pattern**: `lib/blocs/`, `lib/events/`, `lib/states/` の構成
- **Provider Pattern**: `lib/providers/` ディレクトリの存在
- **Riverpod**: `lib/providers/` または `lib/` 内の `*_provider.dart` ファイル
- **Repository Pattern**: `repositories/` ディレクトリの存在
- **Data Mapper**: `mappers/` ディレクトリの存在
- **Active Record**: `models/` ディレクトリとデータベース操作の混在

## ステップ4: 指示書の生成

以下の7つのセクションを含む `.github/copilot-instructions.md` を生成してください：

### 1. 前提条件
```
# 前提条件

## 基本ルール
- 回答は必ず日本語でしてください
- 大規模な変更（例: 200行以上）を行う前には、まず変更計画を提案してください
- エラーメッセージや例外が発生した場合は、日本語で説明してください
- コードを生成する際は、必ず既存のコードスタイルに合わせてください
- 新しいライブラリを導入する前には、必ず確認してください

## コミュニケーション
- 質問や不明点がある場合は、必ず確認してください
- 複数の解決策がある場合は、それぞれの長所と短所を説明してください
```

### 2. アプリの概要
```
# アプリの概要

## プロジェクト目的
このプロジェクトは[検出された主要言語]を使用して開発されています。

## 主要な技術要素
[検出された言語とフレームワークをリストアップ]

## プロジェクトの特徴
- 構造化されたコードベース
- モダンな開発ツールチェーン
- 保守性と拡張性を考慮した設計
```

### 3. 技術スタック（エコシステム）
```
# 技術スタック（エコシステム）

## 使用技術
**言語**: [検出された言語]
**フレームワーク**: [検出されたフレームワーク]
**パッケージマネージャー**: [検出されたパッケージマネージャー]
**テストフレームワーク**: [検出されたテストフレームワーク]
**データベース**: [検出されたデータベース]
**ORM**: [検出されたORM]
**マイグレーションツール**: [検出されたマイグレーションツール]

## 重要事項
- プロジェクトで使用されていないライブラリはimportしないでください
- 既存のバージョンに合わせてライブラリを使用してください
- 新しい依存関係を追加する際は、互換性を確認してください
- データベーススキーマの変更はマイグレーションファイルで管理してください
- ORMのベストプラクティスに従ってください
```

### 4. ディレクトリ構成
```
# ディレクトリ構成

## 主要ディレクトリ
[検出された主要ディレクトリとその説明をリストアップ]

## ファイル配置ルール
- 新しいファイルは適切なディレクトリに配置してください
- 機能ごとにファイルを整理してください
- 共通コードは共有ディレクトリに配置してください
```

### 5. アーキテクチャ・設計指針
```
# アーキテクチャ・設計指針

## 採用している設計パターン
[検出されたアーキテクチャパターン]

## 設計原則
- 単一責任の原則を守ってください
- コンポーネントの再利用性を高めてください
- 依存関係を明確にしてください
- 一貫性のある命名規則を使用してください

## コード組織
- 関連する機能はまとめて配置してください
- インターフェースと実装を分離してください
```

### 6. テスト方針
```
# テスト方針

## 使用テストフレームワーク
[検出されたテストフレームワーク]

## テスト記述方針
- テストコードは適切なテストディレクトリに配置してください
- 単体テストと統合テストをバランスよく作成してください
- カバレッジを意識したテストを作成してください
- リファクタリングの際は、既存テストを維持してください

## テスト命名規則
- テストファイルには適切な接尾辞を使用してください
- テストメソッドは分かりやすい名前にしてください
```

### 7. アンチパターン
```
# アンチパターン

## 禁止事項
[言語特有のアンチパターンをリストアップ]

## コード品質
- 未使用の変数やimportは削除してください
- 重複コードは避けて関数化してください
- 適切なエラーハンドリングを実装してください
- パフォーマンスを考慮したコードを記述してください

## セキュリティ
- ユーザー入力は必ず検証してください
- 機密情報をコードに直接記述しないでください
- 適切な認証・認可を実装してください
```

## 言語特有のアンチパターン例

### JavaScript/TypeScript
- default exportは避けてnamed exportを使用してください
- any型は原則使用しないでください
- varは使用せず、letまたはconstを使用してください
- ==ではなく===を使用してください

### Python
- グローバル変数の使用は避けてください
- * importは避けて明示的なimportを使用してください
- リスト内包表記を優先してください
- withステートメントでファイルを扱ってください

### Java
- 生の型を使用せず、ジェネリクスを使用してください
- マジックナンバーは定数にしてください
- try-with-resourcesを使用してください

### C#
- varを適切に使用してください
- null条件演算子を活用してください
- usingステートメントでリソースを管理してください

### Dart/Flutter
- BuildContextを不適切に保存しないでください
- setState()を過度に使用せず、状態管理ライブラリを活用してください
- グローバルなBuildContextへの参照を避けてください
- constコンストラクタを可能な限り使用してください
- StatelessWidgetとStatefulWidgetを適切に使い分けてください
- Navigator.pushを直接使用せず、GoRouterや同様のルーティングソリューションを検討してください
- print()の代わりにdebugPrint()を使用してください
- FutureBuilderを過度に使用せず、状態管理ソリューションを検討してください

### データベース/ORM共通
- N+1クエリ問題を避けてください（eager loadingやjoinを適切に使用）
- 生のSQL文字列の結合は避けて、パラメータ化クエリを使用してください
- データベーストランザクションを適切に使用してください
- インデックスを考慮したクエリを記述してください
- マイグレーションファイルは常に可逆的（rollback可能）にしてください

### Prisma (TypeScript/JavaScript)
- select句を指定して必要なフィールドのみ取得してください
- includeとselectを適切に使い分けてください
- トランザクションはprisma.$transactionを使用してください

### SQLAlchemy (Python)
- lazy loadingを理解して適切にrelationshipを設定してください
- session.commit()とsession.rollback()を適切に使用してください
- クエリ結果のキャッシュを考慮してください

### Entity Framework (C#)
- Include()によるeager loadingを適切に使用してください
- ChangeTrackerのパフォーマンスを考慮してください
- AsNoTracking()を読み取り専用クエリで使用してください

## 実行指示

上記の手順でプロジェクトを分析し、`.github/copilot-instructions.md` ファイルを生成してください。ファイルが既に存在する場合は上書きしてください。

生成が完了したら、「✅ copilot-instructions.md を生成しました。検出された技術: [言語], [フレームワーク]」のような形式で完了を報告してください。