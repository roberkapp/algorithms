export function reverseParenthesis(s: string): string {
  const stack: string[] = [''];

  for (const char of s) {
    // por cada parentesis abierto que encuentro hago un nuevo stack
    if (char === '(') {
      stack.push('');
    }
    // si encuentro un parentesis cerrado agarro el ultimo stack, lo invierto y lo sumo al siguiente último
    else if (char === ')') {
      const last = stack.pop() || '';

      const reversed = [...last].reverse().join('');
      stack[stack.length - 1] += reversed;
    }
    // cualquier otro caso simplemente lo sumo al último stack actual
    else {
      stack[stack.length - 1] += char;
    }
  }
  return stack[0];
}
