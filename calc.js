const date=require('date-and-time')
const now=new Date();
const value=date.format(now,'YYYY/MM/DD HH:mm:ss');
console.log('current date and time:' + value)
