/**
 *  orchish - 👹 Generate a random orc name
 *  @version: v1.1.5
 *  @link: https://github.com/tutyamxx/orc-me
 *  @license: MIT
 **/

const randomOrcnameStrings = [
    'ach', 'adz', 'ak', 'ark', 'az', 'balg', 'bilg', 'blid', 'blig', 'blok', 'blot', 'bolg', 'bot', 'bug', 'burk', 'dokh', 'drik', 'driz', 'duf', 'flug', 'ga', 'gad', 'gag', 'gah',
    'gak', 'gar', 'gat', 'gaz', 'ghag', 'ghak', 'git', 'glag', 'glak', 'glat', 'glig', 'gliz', 'glok', 'gnat', 'gog', 'grak', 'grat', 'guk', 'hig', 'irk', 'kak', 'khad', 'krig', 'lag',
    'lak', 'lig', 'likk', 'loz', 'luk', 'mak', 'maz', 'miz', 'mub', 'nad', 'nag', 'naz', 'nig', 'nikk', 'nogg', 'nok', 'nukk', 'rag', 'rak', 'rat', 'rok', 'shrig', 'shuk', 'skrag', 'skug',
    'slai', 'slig', 'slog', 'sna', 'snag', 'snark', 'snat', 'snig', 'snik', 'snit', 'sog', 'spik', 'stogg', 'tog', 'urf', 'vark', 'yad', 'yagg', 'yak', 'yark', 'yarp', 'yig', 'yip', 'zat',
    'zib', 'zit', 'ziz', 'ag', 'aug', 'bad', 'bag', 'bakh', 'bash', 'baz', 'blag', 'brag', 'brog', 'bruz', 'dag', 'dakk', 'darg', 'dob', 'dog', 'drab', 'dug', 'dur', 'gash', 'ghaz', 'glakh',
    'glaz', 'glob', 'glol', 'gluf', 'glur', 'gnarl', 'gnash', 'gnub', 'gob', 'gokh', 'gol', 'golk', 'gor', 'grakh', 'grash', 'grath', 'graz', 'grot', 'grub', 'grud', 'gud', 'gut', 'hag',
    'hakk', 'hrat', 'hrog', 'hrug', 'khag', 'khar', 'krag', 'krud', 'lakh', 'lash', 'lob', 'lub', 'lud', 'luf', 'luk', 'molk', 'muk', 'muz', 'nar', 'ogg', 'olg', 'rag', 'rash', 'rogg', 'rorg',
    'rot', 'rud', 'ruft', 'rug', 'rut', 'shad', 'shag', 'shak', 'shaz', 'shog', 'skar', 'skulg', 'slur', 'snar', 'snorl', 'snub', 'snurr', 'sod', 'stulg', 'thak', 'trog', 'ug', 'umsh', 'ung',
    'uth', 'yakh', 'yash', 'yob', 'zahk', 'zog', 'argh', 'barsh', 'bog', 'burz', 'dof', 'drok', 'drub', 'drug', 'dub', 'dug', 'dul', 'dursh', 'dush', 'duz', 'faug', 'fug', 'ghakh', 'ghar', 'ghash',
    'ghol', 'ghor', 'ghukk', 'ghul', 'glub', 'glud', 'glug', 'gluz', 'gom', 'grad', 'grash', 'grob', 'grogg', 'grok', 'grol', 'gru', 'gruf', 'gruk', 'grul', 'grum', 'grumf', 'grut', 'gruz', 'guhl',
    'gulv', 'hai', 'hrung', 'hur', 'hurg', 'kai', 'klob', 'krod', 'kug', 'kulk', 'kur', 'lorg', 'lug', 'lukh', 'lum', 'lurz', 'lush', 'luz', 'makh', 'maug', 'molg', 'mud', 'mug', 'mul', 'murk', 'muzd',
    'nakh', 'narg', 'obb', 'rolb', 'rukh', 'ruz', 'sharg', 'shruf', 'shud', 'shug', 'shur', 'shuz', 'slub', 'slud', 'slug', 'snad', 'snog', 'thrag', 'thulk', 'thurk', 'trug', 'ulg', 'ur', 'urd', 'urgh',
    'urkh', 'uz', 'yug', 'yur', 'zud', 'zug', 'xug', 'grug'
];

module.exports = () => randomOrcnameStrings[Math.floor(Math.random() * randomOrcnameStrings.length)];
