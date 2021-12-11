const Curso = require("../controle_academico/Curso.js")
const Matriz = require("../controle_academico/Matriz.js");
const Turma = require("../controle_academico/Turma.js");



//console.log("\nMatriz ------------------------------\n");

const matrizEngComp01 = new Matriz("Engenharia de Computação", 01, 2018);
matrizEngComp01.adicionarDisciplina("Algoritmos e Programação de Computadores", 1, 90);
matrizEngComp01.adicionarDisciplina("Geometria Analítica e Vetores", 1, 60);
matrizEngComp01.adicionarDisciplina("Química Teórica", 1, 30);
matrizEngComp01.adicionarDisciplina("Álgebra Linear", 2, 60);
matrizEngComp01.adicionarDisciplina("Estruturas de Dados", 2, 90);
matrizEngComp01.adicionarDisciplina("Física Geral 2", 2, 60);
//console.log(matrizEngComp01);



//console.log("\nCurso ------------------------------\n");

const engComp = new Curso("Engenharia de Computação", 3630, 2018);
engComp.adicionarMatriz(matrizEngComp01);
//console.log(engComp);



//console.log("\nTurma ------------------------------\n");

const turmaEngComp2018_1 = new Turma("Engenharia de Computação", 01, "2018-1", 01);
turmaEngComp2018_1.adicionarAlunos("Hera");
turmaEngComp2018_1.adicionarAlunos("Deméter");
turmaEngComp2018_1.adicionarAlunos("Apolo");
//console.log(turmaEngComp2018_1);

const turmaEngComp2018_2 = new Turma("Engenharia de Computação", 01, "2018-2", 02);
turmaEngComp2018_2.adicionarAlunos("Ártemis");
turmaEngComp2018_2.adicionarAlunos("Hermes");
turmaEngComp2018_2.adicionarAlunos("Dioniso");
//console.log(turmaEngComp2018_2);



//console.log("\nTurma -> Curso ------------------------------\n");

engComp.matricularAlunosCurso(turmaEngComp2018_1);
engComp.matricularAlunosCurso(turmaEngComp2018_2);
//console.log(engComp);



//console.log("\nAlunos -> Disciplina ------------------------------\n");

const matriculasTurmaEngComp2018_1 = turmaEngComp2018_1.alunosTurma.map(aluno => aluno.matricula);
const matriculasTurmaEngComp2018_2 = turmaEngComp2018_2.alunosTurma.map(aluno => aluno.matricula);

engComp.matricularAlunosDisciplinas(turmaEngComp2018_1, matriculasTurmaEngComp2018_1, matrizEngComp01.disciplinasPorPeriodo[0]);
engComp.matricularAlunosDisciplinas(turmaEngComp2018_1, matriculasTurmaEngComp2018_1, matrizEngComp01.disciplinasPorPeriodo[1]);
engComp.matricularAlunosDisciplinas(turmaEngComp2018_2, matriculasTurmaEngComp2018_2, matrizEngComp01.disciplinasPorPeriodo[0]);
engComp.matricularAlunosDisciplinas(turmaEngComp2018_2, matriculasTurmaEngComp2018_2, matrizEngComp01.disciplinasPorPeriodo[1]);
//console.log(engComp);



//console.log("\nFaltas ------------------------------\n");

// Hera
engComp.lancarFalta(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-QT-1", 2);
engComp.lancarFalta(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-QT-1", 2);
engComp.lancarFalta(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-QT-1", 2);

// Ártemis
engComp.lancarFalta(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-AL-2", 4);
engComp.lancarFalta(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-AL-2", 4);



//console.log("\nNotas -> Turma EngComp 01 ------------------------------\n");

// Hera
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-AEPDC-1", 90);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-AEPDC-1", 60);

engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-GAEV-1", 100);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-GAEV-1", 90);

engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-QT-1", 70);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-QT-1", 78);

engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-AL-2", 72);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-AL-2", 40);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-AL-2", 60);

engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-EDD-2", 83);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-EDD-2", 75);

engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-FG2-2", 85);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[0].matricula, "EDC1-FG2-2", 73);


// Deméter
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[1].matricula, "EDC1-AEPDC-1", 50);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[1].matricula, "EDC1-AEPDC-1", 60);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[1].matricula, "EDC1-AEPDC-1", 55);

engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[1].matricula, "EDC1-GAEV-1", 80);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[1].matricula, "EDC1-GAEV-1", 77);

engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[1].matricula, "EDC1-QT-1", 85);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[1].matricula, "EDC1-QT-1", 72);

engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[1].matricula, "EDC1-AL-2", 68);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[1].matricula, "EDC1-AL-2", 59);

engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[1].matricula, "EDC1-EDD-2", 50);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[1].matricula, "EDC1-EDD-2", 60);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[1].matricula, "EDC1-EDD-2", 70);

engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[1].matricula, "EDC1-FG2-2", 95);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[1].matricula, "EDC1-FG2-2", 83);


// Apolo
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[2].matricula, "EDC1-AEPDC-1", 68);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[2].matricula, "EDC1-AEPDC-1", 60);

engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[2].matricula, "EDC1-GAEV-1", 83);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[2].matricula, "EDC1-GAEV-1", 88);

engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[2].matricula, "EDC1-QT-1", 58);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[2].matricula, "EDC1-QT-1", 40);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[2].matricula, "EDC1-QT-1", 60);

engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[2].matricula, "EDC1-AL-2", 65);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[2].matricula, "EDC1-AL-2", 72);

engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[2].matricula, "EDC1-EDD-2", 90);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[2].matricula, "EDC1-EDD-2", 60);

engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[2].matricula, "EDC1-FG2-2", 65);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[2].matricula, "EDC1-FG2-2", 53);
engComp.lancarNota(turmaEngComp2018_1, turmaEngComp2018_1.alunosTurma[2].matricula, "EDC1-FG2-2", 70);


//console.log("\nNotas -> Turma EngComp 02 ------------------------------\n");

// Ártemis
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-AEPDC-1", 68);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-AEPDC-1", 50);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-AEPDC-1", 62);

engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-GAEV-1", 85);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-GAEV-1", 77);

engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-QT-1", 60);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-QT-1", 40);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-QT-1", 50);

engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-AL-2", 68);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-AL-2", 40);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-AL-2", 60);

engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-EDD-2", 80);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-EDD-2", 71);

engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-FG2-2", 73);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[0].matricula, "EDC1-FG2-2", 69);


// Hermes
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[1].matricula, "EDC1-AEPDC-1", 60);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[1].matricula, "EDC1-AEPDC-1", 60);

engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[1].matricula, "EDC1-GAEV-1", 80);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[1].matricula, "EDC1-GAEV-1", 67);

engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[1].matricula, "EDC1-QT-1", 81);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[1].matricula, "EDC1-QT-1", 75);

engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[1].matricula, "EDC1-AL-2", 58);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[1].matricula, "EDC1-AL-2", 55);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[1].matricula, "EDC1-AL-2", 60);

engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[1].matricula, "EDC1-EDD-2", 70);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[1].matricula, "EDC1-EDD-2", 60);

engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[1].matricula, "EDC1-FG2-2", 65);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[1].matricula, "EDC1-FG2-2", 59);


// Dioniso
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[2].matricula, "EDC1-AEPDC-1", 75);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[2].matricula, "EDC1-AEPDC-1", 63);

engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[2].matricula, "EDC1-GAEV-1", 89);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[2].matricula, "EDC1-GAEV-1", 73);

engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[2].matricula, "EDC1-QT-1", 89);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[2].matricula, "EDC1-QT-1", 90);

engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[2].matricula, "EDC1-AL-2", 75);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[2].matricula, "EDC1-AL-2", 83);

engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[2].matricula, "EDC1-EDD-2", 83);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[2].matricula, "EDC1-EDD-2", 72);

engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[2].matricula, "EDC1-FG2-2", 60);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[2].matricula, "EDC1-FG2-2", 40);
engComp.lancarNota(turmaEngComp2018_2, turmaEngComp2018_2.alunosTurma[2].matricula, "EDC1-FG2-2", 55);



//console.log("\nResultados ------------------------------\n");

//engComp.listarResultados(turmaEngComp2018_1);
//engComp.listarResultados(turmaEngComp2018_2);


// Exportando objetos
module.exports = {matrizEngComp01, engComp, turmaEngComp2018_1, turmaEngComp2018_2};