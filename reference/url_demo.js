const url=require('url');

const myurl=new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized url
console.log(myurl.href);

// Host(root domain)
console.log(myurl.host);

// Only hostname without port number
console.log(myurl.hostname);

//Path name
console.log(myurl.pathname)

//Serailized query
console.log(myurl.search);

//Params
console.log(myurl.searchParams);

//Loop through params
myurl.searchParams.forEach((name,value) => console.log(`${name}: ${value}`));