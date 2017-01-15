import isGitRev from '../src'

test('isGitRev', () => {
  expect(isGitRev('f9b9150f71db48a49a2e3de5f817cec120334d81')).toBe(true)
  expect(isGitRev('f9b9150f71db48a49a2e3de5f817cec120334d8z')).toBe(false)
  expect(isGitRev('f9b9150f71db')).toBe(true)
  expect(isGitRev('f9b9150')).toBe(true)
  expect(isGitRev('f9b915z')).toBe(false)
})
