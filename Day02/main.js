console.log('--------------- MAIN JS ---------------') 
let hede = 'JS' 
let bidi = 'JS' 
let tede = 'JavaScript' 
        
console.log(hede == bidi) 
console.log(hede == tede) 

console.log('--- arrays ---');

let nums = [1,2,3]
nums[0] = 22
console.log('nums: ', nums);

let nums2 = nums
console.log('nums == nums2: ', nums==nums2)

console.log('--- math ---');

console.log(Math.round(5.5))


console.log('--- string işlemleri ---');
let a = 4
let b = 6
console.log(`${a} ile ${b} sayısının toplamı: ${a+b}'dir.`)

let firstStr = 'JavaScript'
console.log(firstStr.substr(4,6));
console.log(firstStr.substring(4,firstStr.length));

