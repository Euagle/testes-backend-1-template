import {fixacao} from '../src/fixacao'

describe("Teste do arquivo fixacao.ts", () => {
    test("Essa função deve retornar a palavra 'Geice', em 'g', 'l', 'e', 'i', 'c', 'e'", ()=>{
        const result = "Gleice" 
        const resultEsperado = {dev: ['g', 'l', 'e', 'i', 'c', 'e']};
     const resultfinal= fixacao(result);
        expect(resultfinal).toEqual(resultEsperado);
    });
})