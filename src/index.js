module.exports = function reverse (n) {
    return String(n).slice(0, 1) ? String(n).slice(1).split('').reverse().join('') : String(n).split('').reverse().join('');
};
