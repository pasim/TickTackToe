/**
 *  Sorting an array order by frequency of occurence in javascript
 *  @param {array} array An array to sort
 *  @returns {array} array of item order by frequency
 **/

const sortByFrequencyRemoveDuplicatesTS = (array: (string | number)[]): (string | number)[]  => {

    let frequency = {} as any;
    let newArr: Array<string | number> = [];
    let sortArray: Array<Array<string | number>> = [];

    array.forEach((value) => { 
        if ( value in frequency )
            frequency[value] = frequency[value] + 1;
        else
            frequency[value] = 1;
    });

    
    for(let key in frequency){
        sortArray.push([key, frequency[key]])
    }

    sortArray.sort((a,b): number =>{
        return Number(b[1]) - Number(a[1]);
    }).map((value, index) => {
        newArr.push(value[0]);
    }) 
    

    return newArr;

}

export default sortByFrequencyRemoveDuplicatesTS