const body = document.body;
const placeHolder = document.querySelector("#quote");
const author = document.querySelector("#author");

var partNumber = Math.floor(Math.random() * 7335) + 1;

let scriptTag = document.createElement('script');
scriptTag.src = "./quotes/part-" + partNumber + ".js";
body.appendChild(scriptTag)

setTimeout(()=> {
  let quoteArray = window[`quotes${partNumber}`];
  let quoteNumber = Math.floor(Math.random() * quoteArray.length);
  placeHolder.innerText = quoteArray[quoteNumber];
  author.innerText = window[`author${partNumber}`]
}, 100)
