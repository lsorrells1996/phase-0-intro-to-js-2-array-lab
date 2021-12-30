const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
   let newCats = [...cats, (name)];
   return newCats
}

function prependCat(name) {
    let smallCats = [(name), ...cats];
    return smallCats
}

function removeLastCat() {
    let lessCats = cats.slice(0, -1);
    return lessCats
}

function removeFirstCat() {
    let coolCats = cats.slice(1);
    return coolCats
}