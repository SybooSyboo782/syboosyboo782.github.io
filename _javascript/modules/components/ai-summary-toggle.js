/**
 * AI Summary Toggle Logic
 */
export function initAiSummary() {
  const header = document.getElementById('ai-summary-header');
  const content = document.getElementById('ai-summary-content');
  const chevron = document.getElementById('summary-chevron');

  if (header && content) {
    header.addEventListener('click', () => {
      // 클래스 토글 (CSS로 애니메이션 처리)
      content.classList.toggle('hidden');

      // 화살표 회전
      if (chevron) {
        chevron.classList.toggle('rotate-180');
      }
    });
  }
}
