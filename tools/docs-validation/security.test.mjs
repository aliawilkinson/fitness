import assert from 'node:assert/strict';
import test from 'node:test';
import katex from 'katex';

test('KaTeX ignores an inherited trust flag (GHSA-238p-pmpm-9mq7)', () => {
  // Only inspect generated text. No HTML insertion or script execution occurs.
  const options = Object.create({ trust: true });
  const html = katex.renderToString(String.raw`\href{javascript:alert(1)}{synthetic}`, options);
  assert.doesNotMatch(html, /href="javascript:/);
});

test('normal math and explicitly permitted HTTPS links retain their contract', () => {
  assert.match(katex.renderToString(String.raw`\frac{1}{2} + \sqrt{4}`), /class="katex"/);
  const html = katex.renderToString(String.raw`\href{https://example.invalid}{synthetic}`, { trust: true });
  assert.match(html, /href="https:\/\/example.invalid"/);
});
