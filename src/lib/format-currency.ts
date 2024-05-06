/**
 * Formata um valor para moeda brasileira
 * @param value Valor a ser formatado
 * @returns Valor formatado em moeda brasileira
 */
export function formatCurrency(value: number | bigint) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
