var numeroTabuada = 2;

if (numeroTabuada == 2) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
    }
} else if (numeroTabuada == 3) {
    let i = 1;
    while (i <= 10) {
        console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
        i++;
    }
} else {
    console.log("Número incorreto");
}
