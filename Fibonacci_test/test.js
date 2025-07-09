import {assert} from 'chai';
import {fibonacci} from fibonacci;
describe('fibonacci', () => {
    it('F(0)=0', () => {
        assert.equal(fibonacci(0), 0)
    });
    
    it('F(1) = 1, () => {
        assert.equal(fibonacci(1), 1)
    });
   //F(2)= F(1) + F(0)    
    it('F(2) = 1', () => {
        assert.equal(fibonacci(2), 1)
    });
    // F(3) = F(2) + F(1)
    it('F(3) = 2', () => {
        assert.equal(fibonacci(3), 2)
    });
    // F(5) = F(4) + F(3)
    it('F(5) = 5', () => {
        assert.equal(fibonacci(5), 5)
    });

    it('F(10) = 1', () => {
        assert.equal(fibonacci(10), 34)
    });
});
