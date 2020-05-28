const {add,mult,toArr,avg, areaOrPerimeter,getAges } = require('../helper')
const assert = require('assert');

const expect = require('chai').expect
describe('function add',() => {
it('should add 2 + 2 eq 4',()=>{
expect(add(2,5)).equal(7);
});

it('should add 20 -2 2 eq 4',()=>{
    expect(add(20,-2)).equal(18);
});

    it('should add 30 + -2',()=>{
        expect(add(30,-2)).equal(28);
    });
});
it('should mult 2 * 5 eq 10',()=>{
    expect(mult(2,5)).equal(10);
});

it('should toArr ',()=>{
    expect(toArr(2,5)).deep.equal([2,5]);
});



describe('Function AVG', () => {
    it('should calculate avg for positive numbers', () => {
        expect(avg([1, 2, 3])).eq(2);
        expect(avg([10, 20, 30])).eq(20);
    });
    it('should return avg 0 for empty array', () => {
        expect(avg([])).eq(0);
    });
    it('should return avg 0 without arguments', () => {
        expect(avg()).eq(0);
    });
    it('should return avg 0 if arg is not an array', () => {
        expect(avg({})).eq(0);
        expect(avg(123)).eq(0);
        expect(avg('aaa')).eq(0);
        expect(avg(null)).eq(0);
    });
    it('should ignore non numbers in avg calculation', () => {
        expect(avg([1, 2, 'a', 3])).eq(2);
        expect(avg(['a', 3])).eq(3);
    });
    it('should return 0 for all non numbers', () => {
        expect(avg(['a', '3', 'qwe'])).eq(0);
    });
});

describe('Function areaOrPerimeter', () => {
    it('should areaOrPerimeter l === w eq l * w', () => {
        expect(areaOrPerimeter(3, 3)).equal(9);
    });
    it('should areaOrPerimeter l !== w eq l*2+w*2', () => {
        expect(areaOrPerimeter(7, 3)).equal(20);
    });
});
describe('Function getAges',() => {
    it('should calculate getAges for positive numbers',() => {
        expect(getAges(30,8)).deep.eq([19,11]);
    });
    it('should  getAges return null if sum < 0',() => {
        expect(getAges(-2, 8)).eq(null);
    });
    it('should  getAges return null if difference < 0',() => {
        expect(getAges(30, -2)).eq(null);
    });
    it('should  getAges return null if a < 0',()=> {
        expect(getAges(-2, 8)).eq(null);
    });
    it('should  getAges return null if b < 0',()=> {
        expect(getAges(-2, 8)).eq(null);
    });
});