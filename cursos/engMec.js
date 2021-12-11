const Curso = require("../controle_academico/Curso.js")
const Matriz = require("../controle_academico/Matriz.js");
const Turma = require("../controle_academico/Turma.js");



//console.log("\nMatriz ------------------------------\n");

const matrizEngMec01 = new Matriz("Engenharia Mecânica", 01, 2015);
matrizEngMec01.adicionarDisciplina("Cálculo 1", 1, 90);
matrizEngMec01.adicionarDisciplina("Desenho Técnico", 1, 60);
matrizEngMec01.adicionarDisciplina("Física Geral 1", 1, 60);
matrizEngMec01.adicionarDisciplina("Cálculo 2", 2, 90);
matrizEngMec01.adicionarDisciplina("Estática", 2, 60);
matrizEngMec01.adicionarDisciplina("Estrutura e Propriedades dos Materiais", 2, 60);
//console.log(matrizEngMec01);



//console.log("\nCurso ------------------------------\n");

const engMec = new Curso("Engenharia Mecânica", 3600, 2015);
engMec.adicionarMatriz(matrizEngMec01);
//console.log(engMec);



//console.log("\nTurma ------------------------------\n");

const turmaEngMec2015_1 = new Turma("Engenharia Mecânica", 01, "2015-1", 01);
turmaEngMec2015_1.adicionarAlunos("Zeus");
turmaEngMec2015_1.adicionarAlunos("Poseidon");
turmaEngMec2015_1.adicionarAlunos("Atena");
//console.log(turmaEngMec2015_1);

const turmaEngMec2015_2 = new Turma("Engenharia Mecânica", 01, "2015-2", 02);
turmaEngMec2015_2.adicionarAlunos("Ares");
turmaEngMec2015_2.adicionarAlunos("Hefesto");
turmaEngMec2015_2.adicionarAlunos("Afrodite");
//console.log(turmaEngMec2015_2);



//console.log("\nTurma -> Curso ------------------------------\n");

engMec.matricularAlunosCurso(turmaEngMec2015_1);
engMec.matricularAlunosCurso(turmaEngMec2015_2);
//console.log(engMec);



//console.log("\nAlunos -> Disciplina ------------------------------\n");

const matriculasTurmaEngMec2015_1 = turmaEngMec2015_1.alunosTurma.map(aluno => aluno.matricula);
const matriculasTurmaEngMec2015_2 = turmaEngMec2015_2.alunosTurma.map(aluno => aluno.matricula);

engMec.matricularAlunosDisciplinas(turmaEngMec2015_1, matriculasTurmaEngMec2015_1, matrizEngMec01.disciplinasPorPeriodo[0]);
engMec.matricularAlunosDisciplinas(turmaEngMec2015_1, matriculasTurmaEngMec2015_1, matrizEngMec01.disciplinasPorPeriodo[1]);
engMec.matricularAlunosDisciplinas(turmaEngMec2015_2, matriculasTurmaEngMec2015_2, matrizEngMec01.disciplinasPorPeriodo[0]);
engMec.matricularAlunosDisciplinas(turmaEngMec2015_2, matriculasTurmaEngMec2015_2, matrizEngMec01.disciplinasPorPeriodo[1]);
//console.log(engMec);



//console.log("\nFaltas ------------------------------\n");

// Zeus
engMec.lancarFalta(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[0].matricula, "EM1-C1-1", 4);
engMec.lancarFalta(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[0].matricula, "EM1-C1-1", 4);

// Ares
engMec.lancarFalta(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-C2-2", 4);
engMec.lancarFalta(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-C2-2", 4);
engMec.lancarFalta(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-C2-2", 4);



//console.log("\nNotas -> Turma EngMec 01 ------------------------------\n");

// Zeus
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[0].matricula, "EM1-C1-1", 90);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[0].matricula, "EM1-C1-1", 60);

engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[0].matricula, "EM1-DT-1", 100);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[0].matricula, "EM1-DT-1", 90);

engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[0].matricula, "EM1-FG1-1", 70);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[0].matricula, "EM1-FG1-1", 78);

engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[0].matricula, "EM1-C2-2", 72);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[0].matricula, "EM1-C2-2", 40);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[0].matricula, "EM1-C2-2", 60);

engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[0].matricula, "EM1-E-2", 83);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[0].matricula, "EM1-E-2", 75);

engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[0].matricula, "EM1-EEPDM-2", 85);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[0].matricula, "EM1-EEPDM-2", 73);


// Poseidon
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[1].matricula, "EM1-C1-1", 50);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[1].matricula, "EM1-C1-1", 60);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[1].matricula, "EM1-C1-1", 55);

engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[1].matricula, "EM1-DT-1", 80);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[1].matricula, "EM1-DT-1", 77);

engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[1].matricula, "EM1-FG1-1", 85);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[1].matricula, "EM1-FG1-1", 72);

engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[1].matricula, "EM1-C2-2", 68);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[1].matricula, "EM1-C2-2", 59);

engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[1].matricula, "EM1-E-2", 50);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[1].matricula, "EM1-E-2", 60);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[1].matricula, "EM1-E-2", 70);

engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[1].matricula, "EM1-EEPDM-2", 95);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[1].matricula, "EM1-EEPDM-2", 83);


// Atena
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[2].matricula, "EM1-C1-1", 68);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[2].matricula, "EM1-C1-1", 60);

engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[2].matricula, "EM1-DT-1", 83);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[2].matricula, "EM1-DT-1", 88);

engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[2].matricula, "EM1-FG1-1", 58);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[2].matricula, "EM1-FG1-1", 40);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[2].matricula, "EM1-FG1-1", 60);

engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[2].matricula, "EM1-C2-2", 65);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[2].matricula, "EM1-C2-2", 72);

engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[2].matricula, "EM1-E-2", 90);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[2].matricula, "EM1-E-2", 60);

engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[2].matricula, "EM1-EEPDM-2", 65);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[2].matricula, "EM1-EEPDM-2", 53);
engMec.lancarNota(turmaEngMec2015_1, turmaEngMec2015_1.alunosTurma[2].matricula, "EM1-EEPDM-2", 70);


//console.log("\nNotas -> Turma EngMec 02 ------------------------------\n");

// Ares
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-C1-1", 68);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-C1-1", 50);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-C1-1", 62);

engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-DT-1", 85);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-DT-1", 77);

engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-FG1-1", 60);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-FG1-1", 40);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-FG1-1", 50);

engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-C2-2", 68);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-C2-2", 40);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-C2-2", 60);

engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-E-2", 80);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-E-2", 71);

engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-EEPDM-2", 73);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[0].matricula, "EM1-EEPDM-2", 69);


// Hefesto
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[1].matricula, "EM1-C1-1", 60);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[1].matricula, "EM1-C1-1", 60);

engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[1].matricula, "EM1-DT-1", 80);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[1].matricula, "EM1-DT-1", 67);

engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[1].matricula, "EM1-FG1-1", 81);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[1].matricula, "EM1-FG1-1", 75);

engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[1].matricula, "EM1-C2-2", 58);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[1].matricula, "EM1-C2-2", 55);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[1].matricula, "EM1-C2-2", 60);

engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[1].matricula, "EM1-E-2", 70);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[1].matricula, "EM1-E-2", 60);

engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[1].matricula, "EM1-EEPDM-2", 65);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[1].matricula, "EM1-EEPDM-2", 59);


// Afrodite
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[2].matricula, "EM1-C1-1", 75);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[2].matricula, "EM1-C1-1", 63);

engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[2].matricula, "EM1-DT-1", 89);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[2].matricula, "EM1-DT-1", 73);

engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[2].matricula, "EM1-FG1-1", 89);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[2].matricula, "EM1-FG1-1", 90);

engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[2].matricula, "EM1-C2-2", 75);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[2].matricula, "EM1-C2-2", 83);

engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[2].matricula, "EM1-E-2", 83);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[2].matricula, "EM1-E-2", 72);

engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[2].matricula, "EM1-EEPDM-2", 60);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[2].matricula, "EM1-EEPDM-2", 40);
engMec.lancarNota(turmaEngMec2015_2, turmaEngMec2015_2.alunosTurma[2].matricula, "EM1-EEPDM-2", 55);



//console.log("\nResultados ------------------------------\n");

//engMec.listarResultados(turmaEngMec2015_1);
//engMec.listarResultados(turmaEngMec2015_2);


// Exportando objetos
module.exports = {matrizEngMec01, engMec, turmaEngMec2015_1, turmaEngMec2015_2};