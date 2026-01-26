import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';

// --- 1. 경로 및 환경 설정 ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const POSTS_DIR = path.join(__dirname, './_posts');

// --- 2. Gemini 설정 ---
// process.env를 사용하여 환경 변수에서 키를 가져옵니다.
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error('❌ 에러: GEMINI_API_KEY 환경 변수가 설정되지 않았습니다.');
  process.exit(1);
}
const genAI = new GoogleGenerativeAI(API_KEY);

/**
 * ★핵심 포인트★
 * 예전 패키지에서는 모델 이름에 'models/'를 붙이지 않는 것이 기본입니다.
 * 1.5 Flash가 안 되면 'gemini-pro'로 바꿔서 계정 권한을 확인해 보세요.
 */
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

// --- 3. 텍스트 정제 객체 (쌍따옴표 금지) ---
const TextCleaner = {
  clean: (text) => {
    if (!text) return '';
    return text
      .trim()
      .replace(/'/g, '\'\'')    // YAML 홑따옴표 이스케이프
      .replace(/"/g, '')        // 쌍따옴표 제거
      .replace(/\n/g, ' ')
      .replace(/\s+/g, ' ');
  }
};

// --- 4. 요약 생성 함수 ---
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

// --- 5. 메인 실행 로직 ---
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
    }
  }
  console.log('✨ 모든 작업이 끝났습니다!');
}

processPosts();
