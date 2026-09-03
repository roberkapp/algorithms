export function navigate(commands: string[]): string {
  const history = ['Home'];
  let index = 0;

  for (const command of commands) {
    if (command.startsWith('Visit ')) {
      // Si hay un nuevo visit tengo que limpiar todo lo que estaba por delante
      history.splice(index + 1);
      history.push(command.slice(6));
      index++;
    }

    if (command === 'Back') {
      if (index > 0) index--;
    }

    if (command === 'Forward') {
      if (index < history.length - 1) index++;
    }
  }
  return history[index];
}
