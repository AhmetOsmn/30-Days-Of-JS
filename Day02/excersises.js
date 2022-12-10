let challange = '30 Days Of JavaScript'
let hedebidi = 'hedebidi'

console.log('2',hedebidi)
console.log('3',hedebidi.length)
console.log('4',hedebidi.toUpperCase())
console.log('5',hedebidi.toLowerCase())
console.log('6',hedebidi.substring(1,hedebidi.length))
console.log('7',challange.substring(3,challange.length))
console.log('7',challange.substring(0,3))
console.log('8',challange.includes('word'))
console.log('9',challange.split())
console.log('10',challange.split(' '))
console.log('11','Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','))
console.log('12',challange.replace('JavaScript','Python'))
console.log('13',challange.charAt(15))
console.log('14',challange.charCodeAt('J'))
console.log('15',challange.indexOf('a'))
console.log('16',challange.lastIndexOf('a'))
console.log('17','You cannot end a sentence with because because because is a conjunction'.indexOf('because'))
console.log('18','You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'))
console.log('19','You cannot end a sentence with because because because is a conjunction'.search('because'))
console.log('20',challange.trim())
console.log('21',challange.startsWith('3'))
console.log('22',challange.endsWith('t'))
console.log('23',challange.match('\\a'))
console.log('24','30 Days Of'.concat(' JavaScript'))
console.log('25',challange.repeat(2))

console.log('2.1',"The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log('2.2',"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
console.log('2.3',typeof('10') == typeof(10));
console.log('2.3',typeof(10) == typeof(10));
console.log('2.4',Math.ceil(parseFloat('9.8')) == 10);
console.log('2.5',`is on found in python ${'python'.includes('on')}, is on found in jargon ${'jargon'.includes('on')}`)
console.log('2.6','I hope this course is not full of jargon.'.includes('jargon'))
console.log('2.7',Math.floor(Math.random() * 111))
console.log('2.8',Math.abs(Math.floor(Math.random() * 111)-50))
console.log('2.9',Math.floor(Math.random() * 256))
console.log('2.10','JavaScript'.charAt(Math.floor(Math.random() * 11)))
console.log('2.11','1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125')

let hedee = 'You cannot end a sentence with because because because is a conjunction'
console.log('2.12',hedee.substr(hedee.indexOf('because'),('because'.repeat(3)).length+2))

let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log('3.1',sentence.split('love').length)

let temp = 'You cannot end a sentence with because because because is a conjunction'
console.log('3.2', temp.match(/because/gi).length)

let cost = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let tempArray = cost.split(' ')
console.log('3.4',parseInt(tempArray[2]) + parseInt(tempArray[8]) + parseInt(tempArray[12]))



