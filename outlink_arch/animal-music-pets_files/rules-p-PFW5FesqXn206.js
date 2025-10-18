/*
 Quantcast measurement tag
 Copyright (c) 2008-2022, Quantcast Corp.
*/
'use strict';(function(n,k,l){var p=function(d){return d.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};k=function(d,c,f){c=document.getElementsByTagName("meta");for(var a,g,e=[],m=0;m<c.length;m++)if(a=c[m],g=a.getAttribute("name")||a.getAttribute("property"),g==f){g=e;e=g.concat;var b=f;if(a=a.getAttribute("content")){var h=b;h=-1!==h.toLowerCase().indexOf("tag")||-1!==h.toLowerCase().indexOf("keyword")||0===h.toLowerCase().indexOf("qc:");-1===b.toLowerCase().indexOf("tag")&&-1===b.toLowerCase().indexOf("keyword")&&
0===b.toLowerCase().indexOf("qc:")||(a=a.replace(/\.+/g," "));if(h)for(b=a.split(","),a=0;a<b.length;a++)b[a]=p(b[a]);else b=p(a.replace(/,+/g," "))}else b=a;e=e.call(g,b)}0<e.length?d(e):d(!1)};l=function(d,c){var f=[],a;if("array"==={}.toString.call(c).match(/\s([a-zA-Z]+)/)[1].toLowerCase()){for(a=0;a<c.length;a++)f.push(d+"."+c[a]);return{labels:f.join(",")}}return{labels:d+"."+c}};__qc.apply(null,["rules",[n,null,[[l,"category"]],[[k,"exactmatch","article:section"]]],[n,null,[[l,"og:site_name"]],
[[k,"exactmatch","og:site_name"]]]])})("p-PFW5FesqXn206",window,document);