// Concept 001 (home): stack of three server units.
import { serverStack } from '../src/components/serverUnit.js';

export default {
  id: 'server-stack',
  title: 'Stack of three server units',
  shapes: () => serverStack({ count: 3 }),
};
