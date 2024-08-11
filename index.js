function calcularNivel(vitorias, derrotas) {
    return vitorias - derrotas;
}

function defineNivel(desempenho) {
    let nivel;
    
    if (desempenho < 10) {
        nivel = 'Ferro';
    } else if (desempenho >= 11 && desempenho <= 20) {
        nivel = 'Bronze';
    } else if (desempenho >= 21 && desempenho <= 50) {
        nivel = 'Prata';
    } else if (desempenho >= 51 && desempenho <= 80) {
        nivel = 'Ouro';
    } else if (desempenho >= 81 && desempenho <= 90) {
        nivel = 'Diamante';
    } else if (desempenho >= 91 && desempenho <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }
    
    return nivel;
}

let vitorias = 70;
let derrotas = 20;
let desempenho = calcularNivel(vitorias, derrotas);
let level = defineNivel(desempenho);

console.log("O Herói tem saldo de", desempenho, "e está no nível", level);