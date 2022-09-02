function solution(a, b) {
    if (a.join('') === b.join('')) return true;
    let array1 = [];
    let array2 = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            array1.push(a[i]);
            array2.push(b[i]);
        }
    }
    array2 = array2.reverse().join('');
    array1 = array1.join('');
    if (array1 === array2) return true;
    return false;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test areSimilar

// alternative solution
// function solution(a, b) {
//     const ad = a.filter((v, i) => v != b[i]);
//     const bd = b.filter((v, i) => v != a[i]);
//     return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''));
// }

// alternative solution
// function solution(a, b) {
//     let i = 0,
//         length = a.length,
//         diff = [];
//     for (; i < length; i++) {
//         if (a[i] !== b[i]) {
//             diff.push(i);
//         }
//     }
//     if (diff.length === 0) {
//         return true;
//     }
//     if (diff.length === 2) {
//         if (a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]]) {
//             return true;
//         }
//     }
//     return false;
// }

// alternative solution
// function solution(A, B) {
//     for (let r = [], i = 0; i < A.length; i++) if (A[i] != B[i]) r.push(A[i], B[i]);
//     return r.length < 5 && new Set(r).size < 3;
// }
