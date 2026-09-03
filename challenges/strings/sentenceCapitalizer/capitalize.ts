export function capitalize(paragraph: string): string {
  return paragraph.replace(/(^|[.?!]+\s*)([a-z])/gi, (_, separator, letter) => {
    return separator + letter.toUpperCase();
  });
}

// en el grupo de captura 1 agarro el comienzo del string o cualquier . | ? | !
// seguido de posibles whitespaces, estos son los separadores
// en el segundo grupo agarro la primera letra que aparezca luego del separador
