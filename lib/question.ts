import table from './table'

const question = async (answer: string, type: string): Promise<void> => {
    
    
    const coordinates = answer.split(',');
    if (coordinates.length != 2){
        throw new Error("Wrong input: Wrong Coordinates Format");
    }

    else if (!['1','2','3'].includes(coordinates[0]) && !['1','2','3'].includes(coordinates[1])){
        throw new Error("Wrong input: Wrong Items");
    }

    else {

        const x = Number(coordinates[0]) - 1;
        const y = Number(coordinates[1]) - 1;
        table[x][y] = type;
        console.log(JSON.stringify(table)+"\n\n");

    }

}


export default question;