const newEmployees = () => {
    const employees = {
      id1: cadastroCliente('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: cadastroCliente('Pedro Guerra'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: cadastroCliente('Pedro Guerra'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const cadastroCliente = (nomeCompleto) => {
    nomeEditado = `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`
    return { 
        Email: nomeEditado, 
        nome: nomeCompleto }
};

console.log(newEmployees());
