/**
 *  orc-me - 👹 Generate a random orc name
 *  @version: v1.2.7
 *  @link: https://github.com/tutyamxx/orc-me
 *  @license: MIT
 **/

const pick = (src) => src?.[Math.random() * src.length | 0] ?? '';

/**
 * Generate a random Orc-style name.
 *
 * @returns A randomly generated orc name as a string
 */
const orcMe = () => {
    // --| Onset: single or double harsh consonants
    const onset = Math.random() < 0.5
        ? pick('gkrzbdh')   // --| Single consonants
        : pick(['gr', 'kr', 'th', 'sh', 'br', 'dr', 'gl', 'gh']);

    // --| Vowels: single or diphthong for variety
    const vowel = pick(['a', 'o', 'u', 'aa', 'oo', 'au']);

    // --| Coda: optional, mostly harsh consonants or clusters
    const coda = Math.random() < 0.7
        ? pick(['g', 'k', 'r', 'z', 'sh', 'rg', 'kk', 'zz', 'th'])
        : '';

    // --| Extra ending letter sometimes
    const extra = Math.random() < 0.4
        ? pick('gkrz')
        : '';

    // --| Optional second syllable sometimes to make longer names
    const secondSyllable = Math.random() < 0.3
        ? pick(['', '', 'g', 'k', 'r', 'z', 'sh']) + pick(['a', 'o', 'u'])
        : '';

    return `${onset}${vowel}${coda}${extra}${secondSyllable}`?.replace?.(/^./, c => c.toUpperCase()) ?? '';
};

module.exports = orcMe;
