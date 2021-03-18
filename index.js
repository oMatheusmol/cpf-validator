const cpf = '145.382.206-20';
const cpfLimpo = cpf.replace(/\D+/g, '');
let sequencia = cpfLimpo[0].repeat(cpfLimpo.length);
if (sequencia === cpfLimpo) {
    console.log('erro');
    return;
} else {
    let cpfArray = Array.from(cpfLimpo);
    const cpfArrayString = cpfArray.toString()

    let i = 10;
    let j = 11;
    let total = 0;
    let total2 = 0;
    let newCpfArray = cpfArray;

    cpfArray.splice(-2, 2);

    for (let numero of cpfArray) {
        let soma = Number(numero * i);
        total += soma;
        i = i - 1;
    }

    if (Number(11 - (total % 11) >= 10)) {
        cpfArray.push(0);

    } else {
        cpfArray.push((11 - (total % 11)));
    }

    for (let numero of newCpfArray) {
        let soma = Number(numero * (j));
        total2 += soma;
        j = j - 1;
    }

    if (Number(11 - (total2 % 11)) > 9) {
        newCpfArray.push(0);
    } else {
        newCpfArray.push(11 - (total2 % 11));
    }

    let novocpf = newCpfArray.toString();

    if (cpfArrayString === novocpf) {
        console.log('valido');
    } else {
        console.log('invalido');
    }

}