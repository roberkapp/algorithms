export function parseBold(markdown: string): string {
  return markdown.replace(/(\*\*|__)(?!\s)(.*?\S)\1/g, '<b>$2</b>');
}

// primer grupo (\*\*|__) = agarra los markers
// lookahead negativo (?!\s) = checkea lo que viene ahora, no puede ser un whitespace
// segundo grupo (.*?\S) = captura el contenido entre los markers asegurandote que no termine en whitespace
// \1 backreference = esta herramienta le dice volve a buscar lo que encontraste en el primer grupo por el 1
// esto es porque sino podria arrancar con ** y terminar con __ y eso seria incorrecto pero con el backreference validamos que sea el mismo delimiter
// seria equivalente a poner al final (\*\*|__) pero con lo capturado para que no sea ambiguo
// luego con $2 es la captura del segundo grupo asi que ese contenido queda entre los bold tags
