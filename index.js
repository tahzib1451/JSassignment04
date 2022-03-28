// Problem 1

var comPrice = 1000
var watPrice = 260
var cofPrice = 50
function cost(Computer, Watch, Coffee) {
    var totalCost = Computer * comPrice + Watch * watPrice + Coffee * cofPrice
    return totalCost
}
console.log(cost());

// Problem 2

var products = [
    {
        id: 1,
        title: "laptop",
        price: 567,
        description: "Laptop Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },
    {
        id: 2,
        title: "Mobile",
        price: 367,
        description: "Mobile Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },
    {
        id: 3,
        title: "Watch",
        price: 180,
        description: "Watch Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },
    {
        id: 4,
        title: "Coffee",
        price: 40,
        description: "Coffee Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },

];

function productSearch(productName) {
    var found = "Product Not Found";
    for (var i = 0; i < products.length; i++) {
        if (products[i].title.toLocaleLowerCase() === productName.toLocaleLowerCase()) {
            found = products[i];
            break;
        }
    }
    return found;
}
console.log(productSearch(""));

// Problem 3

var num1 = 365
var num2 = 366
var num3 = 10
function savings(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return num2 * num3;
    }
    else {
        return num1 * num3;
    }
}
console.log(savings());