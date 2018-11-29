// ## 1.) getItems(objectData)

// * **input:** json object
// * **returns:** an array of items

// Create a function called `getItems` that simply returns the items array from the google product object.

// **Note** all other functions (below) use the return of this function as their input.

// var getItems = function(){
//   return products.items;
// }

// getItems();

// ## 2.) getItemsByBrand(items, brand)

// * **input:** an array of items, a string of a brand to filter with
// * **returns:** an array of items (of a specific brand)

// Create a function called `getItemsByBrand` that takes an item array returns a new array of all items of a specified brand.

// Test this function by searching for Sony, Canon, Nikon and Panasonic.

// var getItems = function(){
//   return products.items;
// }

// var getItemsByBrand = function(items, brand){
//   var itemBrand = brand;
//   var itemArray = items;
//   var sonyArray = new Array();
//   var canonArray = new Array();
//   var lytroArray = new Array();
//   var nikonArray = new Array();
//   var samsungArray = new Array();
//   var fujiArray = new Array();
//   var olympusArray = new Array();
//   var pentraxArray = new Array();

//   for(var i = 0; i < itemArray.length; i++){
//   var numItems = itemArray[i];
//   var productBrand = numItems.product.brand
//     if(itemBrand.toLowerCase() === "sony" && productBrand.toLowerCase() === "sony") {
//       sonyArray.push(numItems.product);
//     } else if(itemBrand.toLowerCase() === "canon" && productBrand.toLowerCase() === "canon") {
//       canonArray.push(numItems.product);
//     } else if(itemBrand.toLowerCase() === "lytro" && productBrand.toLowerCase() === "lytro") {
//       lytroArray.push(numItems.product);
//     } else if(itemBrand.toLowerCase() === "nikon" && productBrand.toLowerCase() === "nikon") {
//       nikonArray.push(numItems.product);
//     } else if(itemBrand.toLowerCase() === "samsung" && productBrand.toLowerCase() === "samsung") {
//       samsungArray.push(numItems.product);
//     } else if(itemBrand.toLowerCase() === "fuji" && productBrand.toLowerCase() === "fuji") {
//       fujiArray.push(numItems.product);
//     } else if(itemBrand.toLowerCase() === "olympus" && productBrand.toLowerCase() === "olympus") {
//       olympusArray.push(numItems.product);
//     } else if(itemBrand.toLowerCase() === "pentrax" && productBrand.toLowerCase() === "pentrax") {
//       pentraxArray.push(numItems.product);
//     }
//     // else if(itemBrand.toLowerCase() !== "sony" || "canon" || "lytro" || "nikon" || "samsung" || "fuji" || "olympus" || "pentrax"){
//     //   console.log("No such brand");
//     // }
//   }

//     if(itemBrand.toLowerCase() === "sony"){
//       return sonyArray;
//     } else if(itemBrand.toLowerCase() === "canon"){
//       return canonArray;
//     } else if(itemBrand.toLowerCase() === "lytro"){
//       return lytroArray;
//     } else if(itemBrand.toLowerCase() === "nikon"){
//       return nikonArray;
//     } else if(itemBrand.toLowerCase() === "samsung"){
//       return samsungArray;
//     } else if(itemBrand.toLowerCase() === "fuji"){
//       return fujiArray;
//     } else if(itemBrand.toLowerCase() === "olympus"){
//       return olympusArray;
//     } else if(itemBrand.toLowerCase() === "pentrax"){
//       return pentraxArray;
//     }
//   else{
//     console.log("No such brand");
//   }
// }

// getItemsByBrand(getItems(products), "canon");


// ## 3.) getItemsByAuthor(items, author)

// * **input:** an array of items, a string of an author to filter with
// * **returns:** an array of items (of a specific author)

// Create a function called `getItemsByAuthor` that takes an item array and returns a new array of all items by a specified author.

// Test this function by searching for Target, CDW, eBay

// var getItems = function(){
//   return products.items;
// }

// var getItemsByAuthor = function(items, author){
//   var itemAuthor = author;
//   var itemArray = items;
//   var picArray = new Array();
//   var abtArray = new Array();
//   var adoArray = new Array();
//   var meiArray = new Array();
//   var ritzArray = new Array();
//   var targetArray = new Array();
//   var primoArray = new Array();
//   var abeArray = new Array();
//   var ebayArray = new Array();
//   var overArray = new Array();
//   var macArray = new Array();
//   var cametaArray = new Array();
//   var cdwArray = new Array();
//   var neweggArray = new Array();
//   var ecostArray = new Array();
//   var medArray = new Array();
//   var crutchArray = new Array();
//   var rakuArray = new Array();
//   var dellArray = new Array();
//   var buydigArray = new Array();

//   for(var i = 0; i < itemArray.length; i++){
//     var numItems = products.items[i];
//     var productAuthor = numItems.product.author.name;
//       if(itemAuthor.toLowerCase() === "pictureline.com" && productAuthor.toLowerCase() === "pictureline.com") {
//       picArray.push(numItems.product);
//     } else if(itemAuthor.toLowerCase() === "abt electronics" && productAuthor.toLowerCase() === "abt electronics") {
//       abtArray.push(numItems.product);
//     } else if(itemAuthor.toLowerCase() === "" && productBrand.toLowerCase() === "lytro") {
//       lytroArray.push(numItems.product);
//     } else if(itemBrand.toLowerCase() === "nikon" && productBrand.toLowerCase() === "nikon") {
//       nikonArray.push(numItems.product);
//     } else if(itemBrand.toLowerCase() === "samsung" && productBrand.toLowerCase() === "samsung") {
//       samsungArray.push(numItems.product);
//     } else if(itemBrand.toLowerCase() === "fuji" && productBrand.toLowerCase() === "fuji") {
//       fujiArray.push(numItems.product);
//     } else if(itemBrand.toLowerCase() === "olympus" && productBrand.toLowerCase() === "olympus") {
//       olympusArray.push(numItems.product);
//     } else if(itemBrand.toLowerCase() === "pentrax" && productBrand.toLowerCase() === "pentrax") {
//       pentraxArray.push(numItems.product);
//     }

//     if(itemBrand.toLowerCase() === "sony"){
//       return sonyArray;
//     } else if(itemBrand.toLowerCase() === "canon"){
//       return canonArray;
//     } else if(itemBrand.toLowerCase() === "lytro"){
//       return lytroArray;
//     } else if(itemBrand.toLowerCase() === "nikon"){
//       return nikonArray;
//     } else if(itemBrand.toLowerCase() === "samsung"){
//       return samsungArray;
//     } else if(itemBrand.toLowerCase() === "fuji"){
//       return fujiArray;
//     } else if(itemBrand.toLowerCase() === "olympus"){
//       return olympusArray;
//     } else if(itemBrand.toLowerCase() === "pentrax"){
//       return pentraxArray;
//     }
//   else{
//     console.log("No such Author");
//   }
// }

// var getAvailableProducts = function(items) {
//     var newItems = [];
//     for (var i in items) {
//         for (var j in items[i].product.inventories) {
//           if (items[i].product.inventories[j].availability == "inStock") {
//             newItems.push(items[i].product.title);
//           }
//         }
//     }
//     return newItems;
// }

//## Simplified correct answer

// var getItems = function(){
//   return products.items;
// }

// var getItemsByAuthor = function(items, author) {
//     var newItems = [];
//     var itemArray = items;
//     var authorName = author.toLowerCase();

//   for(var i = 0; i < itemArray.length; i++){
//     var numItems = products.items[i];
//     var productAuthor = numItems.product.author.name;
//     var lowerAuthor = productAuthor.toLowerCase();
//       if (lowerAuthor.includes(author) === true) {
//            newItems.push(products.items[i]);
//         }
//   }
//     return newItems;
// }

// getItemsByAuthor(getItems(products), "eBay");


// ## 5.) Use your functions

// Use the functions you created in 1 - 4 to ouput (console.log) the following lists of items.

// * All items made by Sony.
// * All items made by Sony that are available.
// * All available items by the author "Adorama Camera"
// * All items made by Nikon with the author eBay.

// * remember that you must create a script tag for each file you create, and that they must be in the correct order for your code to run.

var getItems = function(){
  return products.items;
}

var items = products.items;
// Code below search and print all items made by Sony.

var getItemsByBrand = function(items, brand){
  var itemBrand = brand;
  var itemArray = items;
  var sonyArray = new Array();
  var canonArray = new Array();
  var lytroArray = new Array();
  var nikonArray = new Array();
  var samsungArray = new Array();
  var fujiArray = new Array();
  var olympusArray = new Array();
  var pentraxArray = new Array();

  for(var i = 0; i < itemArray.length; i++){
  var numItems = itemArray[i];
  var productBrand = numItems.product.brand
    if(itemBrand.toLowerCase() === "sony" && productBrand.toLowerCase() === "sony") {
      sonyArray.push(numItems.product);
    } else if(itemBrand.toLowerCase() === "canon" && productBrand.toLowerCase() === "canon") {
      canonArray.push(numItems.product);
    } else if(itemBrand.toLowerCase() === "lytro" && productBrand.toLowerCase() === "lytro") {
      lytroArray.push(numItems.product);
    } else if(itemBrand.toLowerCase() === "nikon" && productBrand.toLowerCase() === "nikon") {
      nikonArray.push(numItems.product);
    } else if(itemBrand.toLowerCase() === "samsung" && productBrand.toLowerCase() === "samsung") {
      samsungArray.push(numItems.product);
    } else if(itemBrand.toLowerCase() === "fuji" && productBrand.toLowerCase() === "fuji") {
      fujiArray.push(numItems.product);
    } else if(itemBrand.toLowerCase() === "olympus" && productBrand.toLowerCase() === "olympus") {
      olympusArray.push(numItems.product);
    } else if(itemBrand.toLowerCase() === "pentrax" && productBrand.toLowerCase() === "pentrax") {
      pentraxArray.push(numItems.product);
    }
  }

    if(itemBrand.toLowerCase() === "sony"){
      return sonyArray;
    } else if(itemBrand.toLowerCase() === "canon"){
      return canonArray;
    } else if(itemBrand.toLowerCase() === "lytro"){
      return lytroArray;
    } else if(itemBrand.toLowerCase() === "nikon"){
      return nikonArray;
    } else if(itemBrand.toLowerCase() === "samsung"){
      return samsungArray;
    } else if(itemBrand.toLowerCase() === "fuji"){
      return fujiArray;
    } else if(itemBrand.toLowerCase() === "olympus"){
      return olympusArray;
    } else if(itemBrand.toLowerCase() === "pentrax"){
      return pentraxArray;
    }
  else{
    console.log("No such brand");
  }
}

var getItemsByAuthor = function(items, author) {
    var newItems = [];
    var itemArray = items;
    var authorName = author.toLowerCase();

  for(var i = 0; i < itemArray.length; i++){
    var numItems = products.items[i];
    var productAuthor = numItems.product.author.name;
    var lowerAuthor = productAuthor.toLowerCase();
      if (lowerAuthor.includes(author) === true) {
           newItems.push(products.items[i]);
        }
  }
    return newItems;
}

// Code below search and print all items made by Sony that are available. getItemsByAvailablity(getItems(), "instock");

var getItemsByAvailablity = function(available) {
    var newItems = [];

  for(var i = 0; i < products.items.length; i++){
    var numItems = products.items[i];
    var productAvailablity = numItems.product.inventories[0].availability;
      if (productAvailablity.toLowerCase() === "instock") {
           newItems.push(products.items[i]);
        }
  }
    return newItems;
}

// console.log(getItemsByAuthor(getItemsByAvailablity(items), "adorama camera"));
// console.log(getItemsByBrand(getItemsByAuthor(items, "ebay"), "nikon"));

// availAuthor(getItems(), "adorama camera");
// getItemsByAvailablity(getItems(products), "instock");
