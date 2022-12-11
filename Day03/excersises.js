console.log('-------------- excersises 3 --------------')

let firstName = 'Ahmet'
let lastName = 'Sezgin'
let country = 'Turkey'
let city  = 'Istanbul'
let age = 22
let isMarried = false 
let year = 2022

console.log('-- 1.1 --')
console.log(firstName, typeof(firstName))
console.log(lastName, typeof(lastName))
console.log(country, typeof(country))
console.log(city, typeof(city))
console.log(age, typeof(age))
console.log(isMarried, typeof(isMarried))
console.log(year, typeof(year))

console.log('-- 1.2 --')
console.log('10' === 10) // false

console.log('-- 1.3 --')
console.log(parseInt('9.8') === 10) // false

console.log('-- 1.4 --')
console.log(55 > 2) // true
console.log('ahmet' === 'ahmet') // true
console.log('hede' != 42) // true

console.log(55 < 2) // false
console.log(4 === '4') // false
console.log('hede' == 42) // false

console.log('-- 1.5 --')
/*
4 > 3 --> true
4 >= 3 --> true
4 < 3 --> false
4 <= 3 --> false
4 == 4 --> true
4 === 4 --> true
4 != 4 --> false
4 !== 4 --> false
4 != '4' --> false
4 == '4' --> true
4 === '4' --> false
Find the length of python and jargon and make a falsy comparison statement. --> 'python'.length == 'jargon'.length
*/

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('python'.length != 'jargon'.length)

console.log('-- 1.6 --')
/*
4 > 3 && 10 < 12 --> true
4 > 3 && 10 > 12 --> false
4 > 3 || 10 < 12 --> true
4 > 3 || 10 > 12 --> true
!(4 > 3) --> false
!(4 < 3) --> true
!(false) --> true
!(4 > 3 && 10 < 12) --> false
!(4 > 3 && 10 > 12) --> true
!(4 === '4') --> true
There is no 'on' in both dragon and python --> false
*/
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!'python'.includes('on') && !'dragon'.includes('on'))

console.log('-- 1.7 --')
const nowDate = new Date()
// What is the year today?
console.log(nowDate.getFullYear())
// What is the month today as a number?
console.log(nowDate.getMonth()+1)
// What is the date today?
console.log(nowDate.getDate())
// What is the day today as a number?
console.log(nowDate.getDay())
// What is the hours now?
console.log(nowDate.getHours())
// What is the minutes now?
console.log(nowDate.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(nowDate.getTime())

console.log('-- 2.1 --')
let base = prompt('Enter base','base goes here')
let height = prompt('Enter height','height goes here')
console.log(`The area of the triangle is ${0.5 * base * height}`)


console.log('-- 2.2 --')
let a = prompt('Enter side a:','a goes here')
let b = prompt('Enter side b:','b goes here')
let c = prompt('Enter side c:','c goes here')
console.log(`The perimeter of the triangle is ${parseInt(a)+parseInt(b)+parseInt(c)}`)

console.log('-- 2.3 --')

let l = prompt('Enter length:','length goes here')
let w = prompt('Enter width:','width goes here')
console.log(`The perimeter of the rectangle  is ${w * l}`)

console.log('-- 2.4 --')
let r = prompt('Enter radius:','radius goes here')
console.log(`The area of the circle  is ${Math.PI * r * r}`)
console.log(`The circumference  of the circle  is ${2 * Math.PI * r}`)

console.log('-- 2.5 --')


