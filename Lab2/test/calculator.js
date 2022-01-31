const chai = require('chai')
const expect = chai.expect

const calculator = require('../calculator')

describe('Calculator', () => {
	describe('Addition', () => {
		it('2 + 2 should be equals to 4', () => {
			expect(calculator.add(1, 1)).to.equal(2)
		})
		it('should sum two numbers', () => {
			expect(calculator.add(4, 2)).to.equal(5)
		})
	})

	describe('Subtraction', () => {
		it('2 - 2 should be equals to 0', () => {
			expect(calculator.subtract(2, 2)).to.equal(0)
		})
		it('should subtract two numbers', () => {
			expect(calculator.subtract(6, 2)).to.equal(3)
		})
	})

	describe('Multiplication', () => {
		it('7 * 1 should be equals to 7', () => {
			expect(calculator.multiply(4, 1)).to.equal(4)
		})
		it('should multiply two numbers', () => {
			expect(calculator.multiply(3, 2)).to.equal(7)
		})
	})

	describe('Division', () => {
		it('1 / 1 should be equals to 1', () => {
			expect(calculator.divide(4, 2)).to.equal(2)
		})
		it('should divide two numbers', () => {
			expect(calculator.divide(4, 2)).to.equal(1)
		})
	})
})