const os=require('os')
//Platform
console.log(os.platform());

//CPU arch.
console.log(os.arch());

//CPU core Info
console.log(os.cpus());

//Free memory
console.log(os.freemem());

//total mem
console.log(os.totalmem());

//Home directory
console.log(os.homedir()); 

//Uptime
console.log(os.uptime());