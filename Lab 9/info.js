const par = document.querySelector("p.p2");
for(let i=0;i<par.length;i++)
{
    par[i].style.color ="red";
}
const title = document.querySelector("title");
title.innerHTML ="welcome to javascript";
let link1=document.querySelector("#link1");
link1.href="http://www.google.com"

let tag =document.createElement("p");
let content = document.createTextNode("this is new content");
tag.appendChild(content);

let divtag = document.querySelector(".container");
let tagbefore = document.querySelector(".p3");
divtag.insertBefore(tag,tagbefore);
divtag.removeChild(tagbefore);

let tag2 =document.createElement("p");
let content2 = document.createTextNode("First line");
tag2.appendChild(content2);
let divtag2 = document.querySelector(".container");
let old = document.querySelector(".p1");
divtag2.replaceChild(tag2.old);


const button = document.querySelector("button")
button.addEventListener('Click',onClick);
function onClick()
{
    let tag = document.createElement("p");
    let content = document.createTextNode("button click");
    tag.appendChild(content);
    let divtag= document.querySelector("#new_content");
    divtag.appendChild(tag);

}
