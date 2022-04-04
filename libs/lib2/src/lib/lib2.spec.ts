import * as md5 from 'md5';
import { lib1 } from '@rbehei-sandbox/lib1';
import { lib2 } from './lib2';

describe('lib2', () => {
  it('should work', () => {
    expect(lib2()).toEqual(md5('lib2-v7') + lib1());
  });
});
