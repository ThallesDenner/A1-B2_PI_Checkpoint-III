class Matriz {
    constructor(nomeCurso, numeroMatriz, anoMatriz) {
        this.nomeCurso = nomeCurso;
        this.numeroMatriz = numeroMatriz;
        this.anoMatriz = anoMatriz;
        this.disciplinas = []; 
        this.indiceDisciplinas = {}; 
        this.disciplinasPorPeriodo = [[], [], [], [], [], [], [], [], [], []];
    }

    adicionarDisciplina(nomeDisciplina, periodo, cargaHoraria) {
        const itensCodigoDisciplina = (`${this.nomeCurso} ${this.numeroMatriz} - ${nomeDisciplina} - ${periodo}`).split(" ");  // retorna um array
        let codigoDisciplina = "";
        itensCodigoDisciplina.forEach(item => codigoDisciplina += item[0]);
        codigoDisciplina = (codigoDisciplina.toUpperCase()).normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        this.disciplinas.push({
            nomeDisciplina: nomeDisciplina,
            codigoDisciplina: codigoDisciplina,
            periodo: periodo,
            cargaHoraria: cargaHoraria,
            maximoFaltas: Math.floor(0.25 * cargaHoraria),  // faltas em termos de hora-aula
        });

        this.indiceDisciplinas[codigoDisciplina] = this.disciplinas.length - 1;
        this.disciplinasPorPeriodo[periodo-1].push(codigoDisciplina);
    }
}

module.exports = Matriz;