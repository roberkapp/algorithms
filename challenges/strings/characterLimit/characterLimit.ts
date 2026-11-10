import { POSTS } from './models';

export function characterLimit(message: string): POSTS {
  const charsLength = message.length;
  if (charsLength <= 40) return POSTS.SHORT;
  if (charsLength <= 80) return POSTS.LONG;
  return POSTS.INVALID;
}
