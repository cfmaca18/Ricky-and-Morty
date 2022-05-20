const usuario = { 
    nombre: 'Juan',
    edad: 20,
    gustos: ['programacion', 'videojuegos', 'cine'],
    direccion: {
        calle: 'Calle falsa 123',
        ciudad: 'Madrid',
        pais: 'España'
    },
    casado: false,  // true o false
    estudios: null, // null o undefined
    imprimirGustos: function() {    
        console.log(this.gustos);
    }
}

const amigos = [
    {nombre: 'Juan', edad: 20},
    {nombre: 'Ana', edad: 25},  
    {nombre: 'Pedro', edad: 30},
    {nombre: 'María', edad: 35},
    {nombre: 'José', edad: 40}
];

// recorre el array de amigos y muestra su nombre y edad
let salida = '';
for (let i = 0; i < amigos.length; i++) {

    salida = salida + `<li> ${amigos[i].nombre} - ${amigos[i].edad} años </li>`;
    console.log(amigos[i].nombre);
}
// dibuja en el html el array de amigos
document.getElementById('lista').innerHTML = salida

console.log(usuario);



// stringify convierte un objeto en un string JSON
console.log(JSON.stringify(usuario));
//console.log(JSON.stringify(amigos));


// parse convierte un string en JSOn en un objeto JavaScript
//JSON.parse(JSON.stringify(usuario));
let elementos = ''

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    // console.log(response.json());
    return response.json();
})
.then(data => {
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
            elementos += `<li>${data[i].title}</li>`; 
            console.log(data[i].title);
        }
        document.getElementById('posts').innerHTML = elementos;
    })

