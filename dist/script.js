var animals = document.querySelectorAll('.animal');
var checkboxes = document.querySelectorAll('.check');

for( var check of checkboxes ) {
    check.addEventListener('change', function() {
        var animal = this.parentNode.parentNode;

        if (this.checked) {
            document.addEventListener('keyup', function (e) {
                move( animal, e);
            } );
        } else {
            document.removeEventListener('keyup', move);
        }
    });
}

function Animal (name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.movable = false;
}

Animal.prototype.moves = function () {
    
}

// Animal.prototype.size() = function () {
    
// };

// Animal.prototype.createAnimal() = function () {
//     var animal = document.createElement('div');
    
// }

function Cat (name) {
    Animal.call(this, name, age, height, weight);
}

function Dog (name) {
    Animal.call(this, name, age, height, weight);
}

function Deer (name) {
    Animal.call(this, name, age, height, weight);
}

// Deer.prototype.size() = function() {
    
// };

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Animal;
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Animal;
Deer.prototype = Object.create(Animal.prototype);
Deer.prototype.constructor = Animal;


function move(creature, e) {
    alert(e);
    switch (e.keyCode) {

        case 37: moveRight(creature);
        break;

        case 39: moveLeft(creature);
        break;

        case 38: moveTop(creature);
        break;

        case 40: moveBottom(creature);
        break;
    }
}

function moveRight (animal) {
    if ( !animal.style.left ){
        animal.style.left = '10px';
    } else {
        var right = animal.style.left;
        console.log(animal.style.left);
        right = parseInt(right);
        console.log(right);
        right+=10;
        animal.style.left = right + 'px';
    }
}

function moveLeft (animal) {
    if ( !animal.style.right ){
        animal.style.right = '10px';
    } else {
        var left = animal.style.right;
        left = parseInt(left);
        left+=10;
        animal.style.right = left + 'px';
    }
}

function moveTop (animal) {
    if ( !animal.style.bottom ){
        animal.style.bottom = '10px';
    } else {
        var top = animal.style.bottom;
        top = parseInt(top);
        top+=10;
        animal.style.bottom = top + 'px';
    }
}

function moveBottom (animal) {
    if ( !animal.style.top ){
        animal.style.top = '10px';
    } else {
        var bottom = animal.style.top;
        bottom = parseInt(bottom);
        bottom+=10;
        animal.style.top = bottom + 'px';
    }
}

