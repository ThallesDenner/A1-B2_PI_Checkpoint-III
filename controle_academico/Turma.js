class Turma {
    constructor(nomeCurso, numeroMatriz, anoSemestre, numeroTurma) {
        this.nomeCurso = nomeCurso;
        this.numeroMatriz = numeroMatriz;
        this.anoSemestre = anoSemestre;
        this.numeroTurma = numeroTurma;
        this.alunosTurma = [];
        this.indiceAlunos = {};
        this.indiceDisciplinas = {};
    }

    adicionarAlunos(nomeAluno) {
        this.alunosTurma.push({
            nomeAluno: nomeAluno,
            matricula: "",
            historico: [],  
        });
    }
}

module.exports = Turma;