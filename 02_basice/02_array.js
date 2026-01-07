 const marvel_heros = ["thor","Ironman","spiderman"]
 const dc = ["superman","flash","batman"]

 //marvel_heros.push(dc)

 //console.log(marvel_heros);
 //console.log(marvel_heros[3][1]);

 // const allHeros = marvel_heros.concat(dc)
 //console.log(marvel_heros);

 const all_new_heros = [...marvel_heros,...dc]

 //console.log(all_new_heros);

 const another_array =[1,2,,3,[4,5,6,7],7,[8,[9,5,7]]]

 const real_another_array = another_array.flat(Infinity)
 console.log(real_another_array);


 console.log(Array.isArray("halima"))
 console.log(Array.from("halima"))
console.log(Array.from( {name: "halim}"})) //interesting

 
 let scorel1 = 100
 let scorel2 = 200

 console.log(Array.of( scorel1, scorel2));