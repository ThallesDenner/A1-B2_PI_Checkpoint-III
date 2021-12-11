# 3° Checkpoint de Programação Imperativa

Esta é uma aplicação para controle acadêmico que **generaliza** a aplicação original do checkpoint. 

Algumas das generalizações são:
* Aplicação desenvolvida usando classes;
* Possibilidade de criar diversos cursos, os quais podem ter mais de uma matriz (conjunto de disciplinas do curso);
* Cada curso pode ter diversas turmas (conjunto de alunos);
* É possível lançar notas, faltas, matricular turmas no curso, matricular alunos em disciplinas, etc.

## Descrição Rápida dos Arquivos

* **Curso.js**: Classe que serve para criar cursos;
* **Matriz.js**: Classe que serve para criar as matrizes dos cursos;
* **Turma.js**: Classe que serve para criar as turmas dos cursos;
* **engMec.js**: Concentra todas as informações do curso de Engenharia Mecânica. Este script pode ser executado diretamente para apresentar no terminal os resultados obtidos pelas turmas do curso. É necessário "descomentar" as linhas 215 e 216 para visualizar os resultados.

```javascript
//engMec.listarResultados(turmaEngMec2015_1);
//engMec.listarResultados(turmaEngMec2015_2);
```

* **engComp.js**: Concentra todas as informações do curso de Engenharia de Computação. Este script pode ser executado diretamente para apresentar no terminal os resultados obtidos pelas turmas do curso. É necessário "descomentar" as linhas 215 e 216 para visualizar os resultados.

```javascript
//engComp.listarResultados(turmaEngComp2018_1);
//engComp.listarResultados(turmaEngComp2018_2);
```

* **app.js**: Arquivo de entrada da aplicação. Execute este arquivo para obter os resultados dos alunos dos cursos de Engenharia Mecânica e Engenharia de Computação. Executando este arquivo, você verá no terminal o seguinte resultado:


--------------------------------------------------

Curso: Engenharia Mecânica

Entrada: 2015-1

Turma: 1

--------------------------------------------------

Aluno: Zeus

Aprovado em Cálculo 1 com média igual a 75

Aprovado em Desenho Técnico com média igual a 95

Aprovado em Física Geral 1 com média igual a 74

Reprovado em Cálculo 2 com média igual a 58

Aprovado em Estática com média igual a 79

Aprovado em Estrutura e Propriedades dos Materiais com média igual a 79


Aluno: Poseidon

Reprovado em Cálculo 1 com média igual a 55

Aprovado em Desenho Técnico com média igual a 79

Aprovado em Física Geral 1 com média igual a 79

Aprovado em Cálculo 2 com média igual a 64

Aprovado em Estática com média igual a 63

Aprovado em Estrutura e Propriedades dos Materiais com média igual a 89


Aluno: Atena

Aprovado em Cálculo 1 com média igual a 64

Aprovado em Desenho Técnico com média igual a 86

Reprovado em Física Geral 1 com média igual a 55

Aprovado em Cálculo 2 com média igual a 69

Aprovado em Estática com média igual a 75

Aprovado em Estrutura e Propriedades dos Materiais com média igual a 65

--------------------------------------------------

Curso: Engenharia Mecânica

Entrada: 2015-2

Turma: 2

--------------------------------------------------

Aluno: Ares

Aprovado em Cálculo 1 com média igual a 61

Aprovado em Desenho Técnico com média igual a 81

Reprovado em Física Geral 1 com média igual a 50

Reprovado em Cálculo 2 com média igual a 57

Aprovado em Estática com média igual a 76

Aprovado em Estrutura e Propriedades dos Materiais com média igual a 71


Aluno: Hefesto

Aprovado em Cálculo 1 com média igual a 60

Aprovado em Desenho Técnico com média igual a 74

Aprovado em Física Geral 1 com média igual a 78

Reprovado em Cálculo 2 com média igual a 59

Aprovado em Estática com média igual a 65

Aprovado em Estrutura e Propriedades dos Materiais com média igual a 62


Aluno: Afrodite

Aprovado em Cálculo 1 com média igual a 69

Aprovado em Desenho Técnico com média igual a 81

Aprovado em Física Geral 1 com média igual a 90

Aprovado em Cálculo 2 com média igual a 79

Aprovado em Estática com média igual a 78

Reprovado em Estrutura e Propriedades dos Materiais com média igual a 53

--------------------------------------------------

Curso: Engenharia de Computação

Entrada: 2018-1

Turma: 1

--------------------------------------------------

Aluno: Hera

Aprovado em Algoritmos e Programação de Computadores com média igual a 75

Aprovado em Geometria Analítica e Vetores com média igual a 95

Aprovado em Química Teórica com média igual a 74

Reprovado em Álgebra Linear com média igual a 58

Aprovado em Estruturas de Dados com média igual a 79

Aprovado em Física Geral 2 com média igual a 79


Aluno: Deméter

Reprovado em Algoritmos e Programação de Computadores com média igual a 55

Aprovado em Geometria Analítica e Vetores com média igual a 79

Aprovado em Química Teórica com média igual a 79

Aprovado em Álgebra Linear com média igual a 64

Aprovado em Estruturas de Dados com média igual a 63

Aprovado em Física Geral 2 com média igual a 89


Aluno: Apolo

Aprovado em Algoritmos e Programação de Computadores com média igual a 64

Aprovado em Geometria Analítica e Vetores com média igual a 86

Reprovado em Química Teórica com média igual a 55

Aprovado em Álgebra Linear com média igual a 69

Aprovado em Estruturas de Dados com média igual a 75

Aprovado em Física Geral 2 com média igual a 65

--------------------------------------------------

Curso: Engenharia de Computação

Entrada: 2018-2

Turma: 2

--------------------------------------------------

Aluno: Ártemis

Aprovado em Algoritmos e Programação de Computadores com média igual a 61

Aprovado em Geometria Analítica e Vetores com média igual a 81

Reprovado em Química Teórica com média igual a 50

Reprovado em Álgebra Linear com média igual a 57

Aprovado em Estruturas de Dados com média igual a 76

Aprovado em Física Geral 2 com média igual a 71


Aluno: Hermes

Aprovado em Algoritmos e Programação de Computadores com média igual a 60

Aprovado em Geometria Analítica e Vetores com média igual a 74

Aprovado em Química Teórica com média igual a 78

Reprovado em Álgebra Linear com média igual a 59

Aprovado em Estruturas de Dados com média igual a 65

Aprovado em Física Geral 2 com média igual a 62


Aluno: Dioniso

Aprovado em Algoritmos e Programação de Computadores com média igual a 69

Aprovado em Geometria Analítica e Vetores com média igual a 81

Aprovado em Química Teórica com média igual a 90

Aprovado em Álgebra Linear com média igual a 79

Aprovado em Estruturas de Dados com média igual a 78

Reprovado em Física Geral 2 com média igual a 53


## Descrição Rápida dos Métodos de Classe

### Matriz

* **adicionarDisciplina()**: adiciona uma disciplina na matriz do curso.

### Turma

* **adicionarAlunos()**: adiciona um aluno na turma.

### Curso

* **adicionarMatriz()**: adiciona uma matriz no curso;
* **matricularAlunosCurso()**: matricula uma turma no curso;
* **matricularAlunosDisciplinas()**: matricula um conjunto de alunos de uma turma num conjunto de disciplinas do curso;
* **lancarFalta()**: lança falta para um aluno (as faltas são computadas em horas-aula);
* **lancarNota()**: lança a nota obtida pelo aluno na disciplina. Quando duas notas tiverem sido lançadas para o aluno, a média do aluno é calculada automaticamente e o resultado (aprovado, recuperação ou aprovado) é definido. A média é dada por: $$ media = \frac{n1 + n2}{2} .$$ Caso o aluno fique de recuperação, uma terceira nota poderá ser lançada e daí a nova média será: $$ novaMedia = \frac{media + n3}{2} .$$
* **listarResultados()**: lista os resultados dos alunos (dados do histórico dos alunos).

## Execução da Aplicação

Execute a aplicação com o comando **node app.js** para visualizar os resultados no terminal.