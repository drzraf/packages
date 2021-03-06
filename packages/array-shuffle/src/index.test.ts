import { arrayShuffle } from './index'

it('a wrong type should return an error', () => {
  // @ts-ignore
  expect(() => arrayShuffle()).toThrow()
  // @ts-ignore
  expect(() => arrayShuffle({ name: 'Definitely not an array' })).toThrow()
  // @ts-ignore
  expect(() => arrayShuffle(null)).toThrow()
  // @ts-ignore
  expect(() => arrayShuffle(undefined)).toThrow()
  // @ts-ignore
  expect(() => arrayShuffle("I'm a string")).toThrow()
})

it('the processed array should have the same length as the original', () => {
  const myRandomArray = ['I', 'believe', 'I', 'can', 'fly']
  const myShuffledArray = arrayShuffle(myRandomArray)

  expect(myShuffledArray.length).toEqual(myRandomArray.length)
})

it('the processed array should contain the same values as the original', () => {
  const myRandomArray = ['I', 'believe', 'I', 'can', 'fly']
  const myShuffledArray = arrayShuffle(myRandomArray)

  expect(myShuffledArray.sort()).toEqual(myRandomArray.sort())
})
