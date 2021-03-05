/**
 *  Sorting an array order by frequency of occurence and removing Duplicates in javascript
 *  @param {array} array An array to sort
 *  @returns {array} array of item order by frequency
 **/
function sortByFrequencyRemoveDuplicates(array) {
    var frequency = {};
    var newArr = [];

    array.forEach(function(value) { 
        if ( value in frequency )
            frequency[value] = frequency[value] + 1;
        else
            frequency[value] = 1;
    });

    var sortAble = Object.entries(frequency);

    sortAble.sort(function(a, b){
        return b[1] - a[1]
    }).map(function(value, index){
        newArr.push(value[0]);
    })

    return Array.from(new Set([...newArr]));
    
}

console.log(sortByFrequencyRemoveDuplicates(["foo", "bar", "baz", "bar", "moo"]));