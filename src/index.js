// @flow

/**
 * Verify if `hash` is a git-rev sha1 hash.
 */
const isGitRev = (hash: string): boolean => /^[0-9a-f]{7,40}$/i.test(hash)

export default isGitRev
