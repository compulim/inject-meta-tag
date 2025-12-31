import { expect } from 'expect';
import { injectMetaTag } from 'inject-meta-tag';
import { beforeEach, describe, test } from 'node:test';

describe('call injectMetaTag() with both arguments', () => {
  beforeEach(() => injectMetaTag('hello', 'World!'));

  test('should have <meta> with "content" attribute', () =>
    expect(document.head.querySelector('meta[name="hello"]')?.getAttribute('content')).toBe('World!'));
});
