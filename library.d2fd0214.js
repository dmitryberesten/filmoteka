console.log(async function(e){const a=new URL("https://api.themoviedb.org/3/trending/movie/week");a.searchParams.append("api_key","db5c04dbd9637821020050cea594d5e0"),a.searchParams.append("page",e);const n=await fetch(a);return await n.json()}(3));
//# sourceMappingURL=library.d2fd0214.js.map
