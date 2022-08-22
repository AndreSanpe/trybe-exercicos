const { join } = require('path');

const fs = require('fs').promises;

const simpsonsFile = 'simpsons.json';

const lerArquivo = async () => {
  const data = await fs.readFile(simpsonsFile, 'utf8');
  const personagens = JSON.parse(data);
  console.log(personagens[0].name);
  personagens.forEach((personagem) => {
    console.log(`${personagem.id} - ${personagem.name}`);
    console.log(personagens);
  });
};

const lerPersonagens = async () => {
  const data = await fs.readFile(simpsonsFile, 'utf8');
  const personagens = JSON.parse(data);
  return personagens;
};

const savePersonagens = async (personagens) => {
  try {
    await fs.writeFile(simpsonsFile, JSON.stringify(personagens));
    console.log(`File writed successfully: ${JSON.stringify(personagens)}`);
  } catch (error) {
    console.error(`Erro to write file: ${error.message}`);
  }
};

const buscaPersonagem = (id) => {
  return new Promise(async (resolve, reject) => {
    const personagens = await lerPersonagens();
    setTimeout(() => {
      const busca = personagens.find((personagem) => {
        return parseInt(personagem.id) === id;
      });
      if (!busca) {
        reject(new Error('id nao encontrado'));
      }
      resolve(busca);
    }, 6000);
  });
};

// const writeFile = () => {
//   return new Promise(async (resolve, reject) => {
//     const personagens = await lerPersonagens();
//     let newPersonagens=[];
//     const busca = personagens.map((personagem) => {
//         if(parseInt(personagem.id) != 6 & parseInt(personagem.id) != 10){
//             newPersonagens.push(personagem);
//         }
//     });
//     savePersonagens(newPersonagens);
//     if (!busca) {
//       reject(new Error('id nao encontrado'));
//     }
//     resolve(busca);
//   });
// };

// const main = async (id) => {
//   const resultado = await buscaPersonagem(id);
//   console.log(resultado);
// };

// main(2);

// const main6 = async () => {
//       const resultado = await writeFile();
//     };
    
//     main6();

const personagens1To4 = async (personagens) => {
    try {
      await fs.writeFile('simpsonFamily.json', JSON.stringify(personagens));
      console.log(`File writed successfully: ${JSON.stringify(personagens)}`);
    } catch (error) {
      console.error(`Erro to write file: ${error.message}`);
    }
  };

// const writeNewFile = () => {
//     return new Promise(async (resolve, reject) => {
//       const personagens = await lerPersonagens();
//       let newPersonagens=[];
//       const busca = personagens.map((personagem) => {
//           if(parseInt(personagem.id) > 0 & parseInt(personagem.id) <= 4){
//               newPersonagens.push(personagem);
//           }
//       });
//       personagens1To4(newPersonagens);
//       if (!busca) {
//         reject(new Error('id nao encontrado'));
//       }
//       resolve(busca);
//     });
//   };

    // const main7 = async () => {
    //   const resultado = await writeNewFile();
    // };
    
    // main7();

    const readFamily = async () => {
        const data = await fs.readFile('simpsonFamily.json', 'utf8');
        const person = JSON.parse(data);
        return person;
      };

    const caracterName = async () => {
        let caracterName=[];
        return new Promise(async (resolve, reject) => {
          const personagens = await lerPersonagens();
          const busca = personagens.forEach((personagem) => {
              if(personagem.name = "Nelson Muntz"){
                caracterName.push(personagem);
              }
          });
          const family = await readFamily();
          console.log(caracterName)
          family.push(caracterName)

          personagens1To4(family);
          if (!busca) {
            reject(new Error('id nao encontrado'));
          }
          resolve(busca);
        });
      };


    const main8 = async () => {
      const resultado = await caracterName();
    };
    
    main8();