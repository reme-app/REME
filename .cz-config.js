module.exports = {
  types: [
    { value: 'feat', name: 'feat:     ✨ 새로운 기능' },
    { value: 'fix', name: 'fix:      🐛 버그 수정' },
    { value: 'docs', name: 'docs:     📝 문서 수정' },
    { value: 'style', name: 'style:    💄 코드 포맷팅 (포매팅만)' },
    { value: 'refactor', name: 'refactor: ♻️  리팩토링 (기능변경 없음)' },
    { value: 'test', name: 'test:     ✅ 테스트 추가/수정' },
    { value: 'chore', name: 'chore:    🔧 기타 변경사항 (빌드/툴/CI 설정 등)' },
  ],
  scopes: ['web', 'api', 'mobile', 'shared', 'docs', 'infra'],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
};
