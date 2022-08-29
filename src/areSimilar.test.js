const solution = require('./areSimilar.js');

test('test 1', () => {
    expect(solution([1, 2, 3], [1, 2, 3])).toBe(true);
});

test('test 2', () => {
    expect(solution([1, 2, 3], [2, 1, 3])).toBe(true);
});

test('test 3', () => {
    expect(solution([1, 2, 2], [2, 1, 1])).toBe(false);
});

test('test 4', () => {
    expect(solution([1, 2, 1, 2], [2, 2, 1, 1])).toBe(true);
});

test('test 5', () => {
    expect(solution([1, 2, 1, 2, 2, 1], [2, 2, 1, 1, 2, 1])).toBe(true);
});

test('test 6', () => {
    expect(solution([1, 1, 4], [1, 2, 3])).toBe(false);
});

test('test 7', () => {
    expect(solution([1, 2, 3], [1, 10, 2])).toBe(false);
});

test('test 8', () => {
    expect(solution([2, 3, 1], [1, 3, 2])).toBe(true);
});

test('test 9', () => {
    expect(solution([2, 3, 9], [10, 3, 2])).toBe(false);
});

test('test 10', () => {
    expect(solution([832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 570, 148, 998, 533, 561, 455, 147, 894, 279])).toBe(false);
});
