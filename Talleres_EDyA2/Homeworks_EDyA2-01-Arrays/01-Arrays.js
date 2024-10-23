const numeros = [1, 2, 3, 4, 5]
const frutas = ['Pera','Manzana','Naranja','Uva','Cereza']
const deportes = ['Fútbol','Basketball','Volleyball','Béisbol','Natación']
const carreras = ['Ingeniería','Medicina','Arquitectura','Veterinaria']

//función at()
console.log(frutas.at(2)); 

//función concat()
let nuevoArray = numeros.concat(deportes);
console.log(nuevoArray);

//función copyWithin()
deportes.copyWithin(2, 0, 2);
console.log(deportes); // ['Fútbol', 'Basketball', 'Fútbol', 'Basketball', 'Natación']

//función entries()
let iterador = frutas.entries();
for (let e of iterador) console.log(e); // [0, 'Pera'], [1, 'Manzana'], ...

//función every()
let todosMayorQueDos = numeros.every(num => num > 2);
console.log(todosMayorQueDos);

//función fill()
numeros.fill(0, 1, 4);
console.log(numeros); // [1, 0, 0, 0, 5]

//función filter()
let frutasFiltradas = frutas.filter(fruta => fruta.includes('a'));
console.log(frutasFiltradas);

//función find()
let fruta = frutas.find(fruta => fruta.startsWith('U'));
console.log(fruta);

//función findIndex()
let indice = deportes.findIndex(deporte => deporte === 'Béisbol');
console.log(indice); 

//función flat()
let matriz = [1, [2, 3], [4, 5]];
let plano = matriz.flat();
console.log(plano);

//función flatMap()
let mapeoPlano = numeros.flatMap(num => [num * 2]);
console.log(mapeoPlano);

//función forEach()
frutas.forEach(fruta => console.log(fruta));

//función includes()
let tieneUva = frutas.includes('Uva');
console.log(tieneUva); // true

//función indexOf()
let indiceCereza = frutas.indexOf('Cereza');
console.log(indiceCereza); // 4

//función join()
let cadenaFrutas = frutas.join(', ');
console.log(cadenaFrutas);

//función keys()
let claves = deportes.keys();
for (let clave of claves) console.log(clave); // 0, 1, 2, 3, 4

//función lastIndexOf()
let ultimoIndice = frutas.lastIndexOf('Manzana');
console.log(ultimoIndice); // 1

//función map()
let numerosDuplicados = numeros.map(num => num * 2);
console.log(numerosDuplicados); // [2, 4, 6, 8, 10]

//función pop()
let ultimoDeporte = deportes.pop();
console.log(ultimoDeporte);

//función push()
deportes.push('Gimnasia');
console.log(deportes);

//función reduce()
let suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma);

//función reduceRight()
let sumaDerecha = numeros.reduceRight((acc, num) => acc + num, 0);
console.log(sumaDerecha); // 21

//función reverse()
deportes.reverse();
console.log(deportes);

//función shift()
let primeraFruta = frutas.shift();
console.log(primeraFruta);

//función slice()
let algunasFrutas = frutas.slice(1, 3);
console.log(algunasFrutas); // ['Uva', 'Naranja']

//función some()
let hayNumerosPares = numeros.some(num => num % 2 === 0);
console.log(hayNumerosPares); 

//función sort()
frutas.sort();
console.log(frutas);

//función splice()
frutas.splice(2, 1, 'Mango');
console.log(frutas);

//función toLocaleString()
let fechaArray = [new Date()];
console.log(fechaArray.toLocaleString());

//función toString()
console.log(frutas.toString());

//función unshift()
frutas.unshift('Papaya');
console.log(frutas);

//función values()
let valores = deportes.values();
for (let valor of valores) console.log(valor);