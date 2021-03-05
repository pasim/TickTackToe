import * as readline from 'readline';
import table from './lib/table'
import question from './lib/question'

console.log("test");


const playerO: String = 'Player-0';
const playerX: String = 'Player-X';

let iter: number = 0;

  

  const run  = (): void => {

    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    
    rl.question('Please specify coordinates? [x,y] ', async (answer) => {

        let type: string = (iter % 2 == 0) ? 'X' : '0';

        try {

            await question(answer, type);
            iter++;
            
        } catch (error) {
            console.log(error.message);
            rl.close();
        }

        
    
        // const coordinates = answer.split(',');
        // if (coordinates.length != 2){
        //     console.log("Wrong input");
        //     rl.close();
        // }
    
        // else if (!['1','2','3'].includes(coordinates[0]) && !['1','2','3'].includes(coordinates[1])){
        //     console.log("Wrong input");
        //     rl.close();
        // }

        // // else if (){

        // // }

        // else {

        //     const x = Number(coordinates[0]) - 1;
        //     const y = Number(coordinates[1]) - 1;
        //     table[x][y] = type;
        //     console.log(JSON.stringify(table)+"\n\n");
        //     iter++;

        // }
    
        rl.close();

        run();
      });
  }

  run();

  