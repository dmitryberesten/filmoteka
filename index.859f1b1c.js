console.log(async function(e){const n=new URL("https://api.themoviedb.org/3/trending/movie/week");n.searchParams.append("api_key","db5c04dbd9637821020050cea594d5e0"),n.searchParams.append("page",e);const o=await fetch(n),t=await o.json();return console.log(t),t}(3)),window.onscroll=function(){var e,n,o;e=document.body.scrollTop||document.documentElement.scrollTop,n=document.documentElement.scrollHeight-document.documentElement.clientHeight,o=e/n*100,document.getElementById("myBar").style.width=o+"%"};
//# sourceMappingURL=index.859f1b1c.js.map