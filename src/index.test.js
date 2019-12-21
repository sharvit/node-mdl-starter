import nodeMdlStarter, { namedExport } from './index';

test('output', () => {
  expect(nodeMdlStarter('🐰')).toBe('🐰');
  expect(nodeMdlStarter()).toBe('No args passed!');

  expect(namedExport('🐰')).toBe('🐰');
  expect(namedExport()).toBe('No args passed!');
});
