class Curso {
    constructor(nomeCurso, cargaHoraria, anoCriacao, mediaAprovacao = 60) {
        this.nomeCurso = nomeCurso;
        this.cargaHoraria = cargaHoraria;
        this.anoCriacao = anoCriacao;
        this.matrizes = [];
        this.turmas = [];
        this.mediaAprovacao = mediaAprovacao;
    }

    adicionarMatriz(matriz) {
        this.matrizes.push(matriz);
    }

    matricularAlunosCurso(turma) {
        let numeroAleatorio = 0;
        let digito = 0;
        let matricula = "";
        turma.alunosTurma.forEach((aluno, indiceAluno) => {

            numeroAleatorio = Math.ceil(899 * Math.random() + 100);
            digito = Math.ceil(Math.log(numeroAleatorio));
            while (digito > 10) {
                digito = Math.ceil(Math.log(digito));
            }
            matricula = `${(turma.anoSemestre).replace("-", "")}${turma.numeroTurma}${numeroAleatorio}${digito}`;
            aluno.matricula = matricula;

            this.matrizes[turma.numeroMatriz - 1].disciplinas.forEach(disciplina => {
                aluno.historico.push({
                    nomeDisciplina: disciplina.nomeDisciplina,
                    codigoDisciplina: disciplina.codigoDisciplina,
                    faltas: 0,
                    notas: [],
                    media: 0,
                    situacao: "",
                });
            });
            turma.indiceAlunos[matricula] = indiceAluno;
        });
        turma.indiceDisciplinas = this.matrizes[turma.numeroMatriz - 1].indiceDisciplinas;
        this.turmas.push(turma);
    }

    matricularAlunosDisciplinas(turma, matriculasAlunos, codigosDisciplinas) {
        for (const matriculaAluno of matriculasAlunos) {
            for (const codigoDisciplina of codigosDisciplinas) {
                turma.alunosTurma[turma.indiceAlunos[matriculaAluno]].historico[turma.indiceDisciplinas[codigoDisciplina]].situacao = "Cursando";
            }
        }
    }

    lancarFalta(turma, matriculaAluno, codigoDisciplina, aulasFaltadas) {
        turma.alunosTurma[turma.indiceAlunos[matriculaAluno]].historico[turma.indiceDisciplinas[codigoDisciplina]].faltas += aulasFaltadas;
    }

    lancarNota(turma, matriculaAluno, codigoDisciplina, nota) {
        turma.alunosTurma[turma.indiceAlunos[matriculaAluno]].historico[turma.indiceDisciplinas[codigoDisciplina]].notas.push(nota);

        const notas = turma.alunosTurma[turma.indiceAlunos[matriculaAluno]].historico[turma.indiceDisciplinas[codigoDisciplina]].notas;
        if (notas.length === 2) {
            const media = Math.round((notas[0] + notas[1]) / 2);  // media = (n1 + n2) / 2
            turma.alunosTurma[turma.indiceAlunos[matriculaAluno]].historico[turma.indiceDisciplinas[codigoDisciplina]].media = media;
            const faltas = turma.alunosTurma[turma.indiceAlunos[matriculaAluno]].historico[turma.indiceDisciplinas[codigoDisciplina]].faltas;
            const maximoFaltas = this.matrizes[turma.numeroMatriz - 1].disciplinas[turma.indiceDisciplinas[codigoDisciplina]].maximoFaltas;
            if ((media >= this.mediaAprovacao) && (faltas < maximoFaltas)) {
                turma.alunosTurma[turma.indiceAlunos[matriculaAluno]].historico[turma.indiceDisciplinas[codigoDisciplina]].situacao = "Aprovado";
            } else if ((media >= 1.1 * this.mediaAprovacao) && (faltas === maximoFaltas)) {
                turma.alunosTurma[turma.indiceAlunos[matriculaAluno]].historico[turma.indiceDisciplinas[codigoDisciplina]].situacao = "Aprovado";
            } else if (((media >= 2 * this.mediaAprovacao - 100) && (media < this.mediaAprovacao)) && (faltas < maximoFaltas)) {
                turma.alunosTurma[turma.indiceAlunos[matriculaAluno]].historico[turma.indiceDisciplinas[codigoDisciplina]].situacao = "Recuperação";
            } else {
                turma.alunosTurma[turma.indiceAlunos[matriculaAluno]].historico[turma.indiceDisciplinas[codigoDisciplina]].situacao = "Reprovado";
            }
        } else if (notas.length === 3) {
            const novaMedia = Math.round((turma.alunosTurma[turma.indiceAlunos[matriculaAluno]].historico[turma.indiceDisciplinas[codigoDisciplina]].media + notas[2]) / 2)
            turma.alunosTurma[turma.indiceAlunos[matriculaAluno]].historico[turma.indiceDisciplinas[codigoDisciplina]].media = novaMedia;
            if (novaMedia >= this.mediaAprovacao) {
                turma.alunosTurma[turma.indiceAlunos[matriculaAluno]].historico[turma.indiceDisciplinas[codigoDisciplina]].situacao = "Aprovado";
            } else {
                turma.alunosTurma[turma.indiceAlunos[matriculaAluno]].historico[turma.indiceDisciplinas[codigoDisciplina]].situacao = "Reprovado";
            }
        }
    }

    listarResultados(turma) {
        console.log("-".repeat(50));
        console.log(`\nCurso: ${turma.nomeCurso}`);
        console.log(`\nEntrada: ${turma.anoSemestre}`);
        console.log(`\nTurma: ${turma.numeroTurma}\n`);
        console.log("-".repeat(50));
        for (const aluno of turma.alunosTurma) {
            console.log(`\nAluno: ${aluno.nomeAluno}\n`);
            for (const disciplina of aluno.historico) {
                console.log(`${disciplina.situacao} em ${disciplina.nomeDisciplina} com média igual a ${disciplina.media}\n`);
            }
        }
    }
}

module.exports = Curso;