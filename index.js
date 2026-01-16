/**
 *  orchish - 👹 Generate a random orc name
 *  @version: v1.2.3
 *  @link: https://github.com/tutyamxx/orc-me
 *  @license: MIT
 **/

const pick = (src) => src?.[Math.random() * src.length | 0] ?? '';

const orcMe = () => {
    const onset = Math.random() < 0.5
        ? pick('gkrzbd')
        : pick(['gr', 'kr', 'th', 'sh']);

    const vowel = 'aou'[Math.random() * 3 | 0];
    const coda = Math.random() < 0.7
        ? pick(['g', 'k', 'r', 'z', 'sh'])
        : '';

    const extra = Math.random() < 0.4
        ? 'gkr'[Math.random() * 3 | 0]
        : '';

    return `${onset}${vowel}${coda}${extra}`?.replace?.(/^./, c => c.toUpperCase()) ?? '';
};

module.exports = orcMe;
