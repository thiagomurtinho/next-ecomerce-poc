/**
 * Formata a data e hora atual para o formato brasileiro de data e hora.
 * @returns Um objeto contendo a data e a hora formatadas.
 */
export function formattedDateAndTime() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const formattedTime = date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return {
    date: formattedDate,
    time: formattedTime,
  };
}
