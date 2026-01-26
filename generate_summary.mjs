import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';

// --- 1. 경로 및 환경 설정 ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const POSTS_DIR = path.join(__dirname, './_posts');

// --- 2. Gemini 설정 ---
const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

// --- 3. 유틸리티 함수 (대기 시간) ---
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// --- 4. 텍스트 정제 객체 (쌍따옴표 금지) ---
const TextCleaner = {
  clean: (text) => {
    if (!text) return '';
    return text
      .trim()
      .replace(/'/g, '\'\'')    // YAML 이스케이프
      .replace(/"/g, '')        // 쌍따옴표 제거
      .replace(/\n/g, ' ')
      .replace(/\s+/g, ' ');
  }
};

// --- 5. 요약 생성 함수 ---
async function generateSummary(content) {
  const body = content.replace(/^---[\s\S]*?---/, '').substring(0, 5000);
  const prompt = '다음 블로그 글을 한국어로 2~3문장 요약해줘. 간결하게 \'~함\'체로 작성해줘:\n\n' + body;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return TextCleaner.clean(response.text());
  } catch (error) {
    console.error('❌ Gemini 호출 실패: ' + error.message);
    return null;
  }
}

// --- 6. 메인 실행 로직 ---
async function processPosts() {
  if (!fs.existsSync(POSTS_DIR)) {
    console.error('❌ 에러: _posts 폴더를 찾을 수 없습니다.');
    return;
  }

  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  console.log('🚀 총 ' + files.length + '개의 포스트를 검사합니다.');

  for (const file of files) {
    const filePath = path.join(POSTS_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 이미 summary가 설정되어 있는지 확인
    if (content.match(/\nsummary:\s*'/)) {
      console.log('⏩ 패스: ' + file);
      continue;
    }

    console.log('🤖 요약 생성 중: ' + file + '...');
    const summary = await generateSummary(content);

    if (summary) {
      const newContent = content.replace(
        /^(---\s*[\s\S]*?)(\n---)/,
        '$1\nsummary: \'' + summary + '\'$2'
      );

      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('✅ 완료: ' + file);

      // ★ 핵심: API 무료 티어 제한(RPM)을 피하기 위해 15초 대기
      console.log('💤 15초간 대기 후 다음 작업을 진행합니다...');
      await sleep(15000);
    }
  }
  console.log('✨ 모든 작업이 끝났습니다!');
}

processPosts();
