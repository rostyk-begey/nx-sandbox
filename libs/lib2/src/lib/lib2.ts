import * as md5 from 'md5';
import { lib1 } from '@rbehei-sandbox/lib1';

export function lib2(): string {
  return md5('lib2') + lib1();
}
