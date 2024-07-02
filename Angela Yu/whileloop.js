function songBeer(){
    var i = 99;
    while (i > 1){
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i} bottles of beer on the wall.`);
        i--;
    }
    if (i === 1){
        console.log(`1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, 1 bottle of beer on the wall.`);
        i--;
    } if (i === 0){
        console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottle of beer on the wall.`);
    }
}