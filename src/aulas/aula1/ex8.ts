/*
 * Declarando funções
 * Um triângulo é formado por três lados cada lado com uma medida.
 * Só irá existir um triângulo se, somente se, os seus lados obedeceram
 * à seguinte regra: um de seus lados deve ser maior que o valor absoluto (módulo)
 * da diferença dos outros dois lados e menor que a soma dos outros dois lados.
 *
 * Faça a declaração da função.
 * Troque "{}" pelo nome dado a função
 */

// code here
function VerificaTriangulo(a:number, b:number, c:number): boolean {
  const primComp = Math.abs(b - c) < a && c < b + c;
  const segundComp = Math.abs(a - c) < b && c < a + c;
  const tercComp = Math.abs(a - b) < c && c < a + b;

  return primComp && segundComp && tercComp;
}
export default VerificaTriangulo;
