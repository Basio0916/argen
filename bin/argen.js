#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 ARGEN - Agent Rules Generator');
console.log('プロジェクト構造を自動分析してAIエージェントの指示書を生成します\n');

// 現在のワーキングディレクトリを取得
const cwd = process.cwd();

// コマンドライン引数を解析
const args = process.argv.slice(2);
let targetEnvironment = 'copilot'; // デフォルト

if (args.includes('--cursor')) {
  targetEnvironment = 'cursor';
} else if (args.includes('--windsurf')) {
  targetEnvironment = 'windsurf';
} else if (args.includes('--copilot')) {
  targetEnvironment = 'copilot';
}

// 環境を検出（オプション指定のみで判定）
const isCursor = targetEnvironment === 'cursor';
const isWindsurf = targetEnvironment === 'windsurf';
const isGitHubCopilot = targetEnvironment === 'copilot';

let targetDir, targetFile, sourceFile, environmentName;

if (isCursor) {
  // Cursor環境
  targetDir = path.join(cwd, '.cursor', 'commands');
  targetFile = path.join(targetDir, 'argen.md');
  sourceFile = path.join(__dirname, '..', 'prompts', 'cursor', 'argen.md');
  environmentName = 'Cursor';
} else if (isWindsurf) {
  // Windsurf環境
  targetDir = path.join(cwd, '.windsurf', 'workflows');
  targetFile = path.join(targetDir, 'argen.md');
  sourceFile = path.join(__dirname, '..', 'prompts', 'windsurf', 'argen.md');
  environmentName = 'Windsurf';
} else {
  // GitHub Copilot環境
  targetDir = path.join(cwd, '.github', 'prompts');
  targetFile = path.join(targetDir, 'argen.prompt.md');
  sourceFile = path.join(__dirname, '..', 'prompts', 'github-copilot', 'argen.prompt.md');
  environmentName = 'GitHub Copilot';
}

// ターゲットディレクトリを作成
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`✅ ${targetDir} ディレクトリを作成しました`);
}

// プロンプトファイルをコピー
if (fs.existsSync(sourceFile)) {
  fs.copyFileSync(sourceFile, targetFile);
  console.log(`✅ ${environmentName}用のargenファイルを ${path.relative(cwd, targetDir)} に配置しました`);
  console.log(`📍 配置先: ${targetFile}`);
} else {
  console.error('❌ ソースファイルが見つかりません:', sourceFile);
  process.exit(1);
}

console.log('\n🚀 セットアップ完了！');
console.log(`${environmentName}で /argen コマンドが使用できるようになりました。`);
