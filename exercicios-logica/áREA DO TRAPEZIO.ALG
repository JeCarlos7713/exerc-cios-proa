Algoritmo "área do trapezio"
// Lógica de programação
// Professor: Jailson
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 24/01/2022
Var
   // Seção de Declarações das variáveis
   baseMaior:inteiro
   baseMenor:inteiro
   altura:inteiro
   area:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   Escreva("Digite a base maior do trapézio: ")
   Leia(baseMaior)
   Escreva("Agora, digite a base menor do trapézio: ")
   Leia(baseMenor)
   Escreva("Por ultimo, informe a altura do trapézio: ")
   Leia(altura)
   
   area<-(baseMaior+baseMenor)*altura/2
   Escreva("A área o trapézio é ", area)

Fimalgoritmo