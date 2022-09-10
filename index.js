const fs=require('fs');


// fs.readFile('calc.js','utf8',function(err,data)
// {
//     console.log(data)
// })

// fs.readFile('calc1.js','utf8',function(err)
// {
//     console.log('data saved')
// })


// fs.unlink('calc1.js',function(err)
// {
//     console.log('deleted')
// })


const date=require('date-and-time')
const value=date.format((new Date('March 27,1997 03:24:00')),
'YYYY/MM/DD HH:mm:ss');

//display the result
console.log('date and time:'+value)

