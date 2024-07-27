const curr = "  abcdefg hij klm   nopqrs  ";
const regexp = [
    /(\w+)\s+(\w+)/,
    /(\w+)\s+(\w+)/,
    /\s+/,
    /\s+/
];

const chunks = curr.slice(1).trim()
    .replace(regexp[0], '$1###$2')
    .replace(regexp[1], '$1###$2')
    .split(regexp[2]);

console.log(chunks);
