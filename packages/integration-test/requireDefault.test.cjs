const { expect } = require('expect');
const { injectMetaTag } = require('inject-meta-tag');
const { beforeEach, describe, test } = require('node:test');

describe('call injectMetaTag() with both arguments', () => {
  beforeEach(() => injectMetaTag('hello', 'World!'));

  test('should have <meta> with "content" attribute', () =>
    expect(document.head.querySelector('meta[name="hello"]')?.getAttribute('content')).toBe('World!'));
});
