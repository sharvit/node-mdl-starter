import nodeMdlStarter from '.';

test('output', () => {
  expect(nodeMdlStarter('🐰')).toBe('🐰');
  expect(nodeMdlStarter()).toBe('No args passed!');
});
