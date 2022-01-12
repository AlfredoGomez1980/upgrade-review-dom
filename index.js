//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let countryList = document.createElement("ul");

for (const country of countries) {
    let countryItem = document.createElement("li");
    countryItem.innerText = country;
    countryList.appendChild(countryItem);
}

document.body.appendChild(countryList);


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let deleteElement = document.querySelector(".fn-remove-me");

deleteElement.remove();


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let divLista = document.querySelector('[data-function="printHere"]');

let createList = document.createElement("ul");

for (const car of cars){
    let carItem = document.createElement("li");
    carItem.textContent = car;
    createList.appendChild(carItem);
}

divLista.appendChild(createList);


// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const pictures = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const picture of pictures) {
    let pictureItem = document.createElement('div');
    pictureItem.innerHTML = `<h4>${picture.title}</h4><img src=${picture.imgUrl}/>`;

    document.body.appendChild(pictureItem);
}


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const deleteButton = document.querySelector('#delete-last-element');
deleteButton.addEventListener('click', function () {
    let selectDivs = document.querySelectorAll('div');
    selectDivs[selectDivs.length - 1].remove();
});


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

for (const picture of pictures) {
    let pictureItem = document.createElement('div');
    pictureItem.innerHTML = `<h4>${pictures.title}</h4><img src=${picture.imgUrl}/>`;
 
    let botonBorrar = document.createElement('button');
    botonBorrar.innerText = "Eliminar elemento";
    pictureItem.appendChild(botonBorrar);

    botonBorrar.addEventListener('click', function () {
        pictureItem.remove();
    });

    document.body.appendChild(pictureItem);
}