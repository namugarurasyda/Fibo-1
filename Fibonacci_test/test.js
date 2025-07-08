import {assert} from 'chai';
import {fibonacci} from fibonacci;
describe('fibonacci', () => {
    it('Check zeroth value', () => {
        assert.equal(fibonacci(0), 1)
    });

    it('Check fib 1', () => {
        assert.equal(fibonacci(1), 1)
    });
        
    it('Check fib 2', () => {
        assert.equal(fibonacci(2), 3)
    });

    it('Check fib 3', () => {
        assert.equal(fibonacci(3), 6)
    });

    it('Check fib 5', () => {
        assert.equal(fibonacci(5), 15)
    });

    it('Check fib 10', () => {
        assert.equal(fibonacci(10), 55)
    });
});