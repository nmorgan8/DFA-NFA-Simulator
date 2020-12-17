import test from 'ava';

import NonDeterministicFiniteStateMachine, {
  NFADescription,
} from './NonDeterministicFiniteStateMachine';

const machinesTests: {
  [name: string]: {
    description: NFADescription;
    accepted: string[];
    rejected: string[];
  };
} = {
  startsWith0: {
    accepted: ['0', '01', '0000', '0111111'],
    rejected: ['1', '10', '101', '100000', '1011111'],
    description: {
      transitions: {
        S: {
          0: ['A'],
        },
        A: {
          0: ['A'],
          1: ['A'],
        },
      },
      start: 'S',
      acceptStates: ['A'],
    },
  },
  // div3: {
  //   accepted: ['', '0', '11', '000000', '1100000', '101111111101'],
  //   rejected: ['10', '1010', '100000', '1011111'],
  //   description: {
  //     transitions: {
  //       r0: {
  //         0: 'r0',
  //         1: 'r1',
  //       },
  //       r1: {
  //         0: 'r2',
  //         1: 'r0',
  //       },
  //       r2: {
  //         0: 'r1',
  //         1: 'r2',
  //       },
  //     },
  //     start: 'r0',
  //     acceptStates: ['r0'],
  //   },
  // },
};

for (const [name, testDesc] of Object.entries(machinesTests)) {
  test(`${name}/constructor`, (t) => {
    const nfa = new NonDeterministicFiniteStateMachine(testDesc.description);
    t.truthy(nfa);
    console.log(nfa);
  });

  test(`${name}/accepts`, (t) => {
    const nfa = new NonDeterministicFiniteStateMachine(testDesc.description);
    const { accepted, rejected } = testDesc;
    // console.log(`
    // accepted: ${accepted}
    // rejected: ${rejected}
    // `);

    for (const s of accepted) {
      // console.log(dfa.accepts(s));
      console.log('accept');
      console.log(s);
      console.log(nfa.accepts(s));
      t.assert(nfa.accepts(s));
    }

    for (const s of rejected) {
      // console.log(!dfa.accepts(s));
      console.log('reject');
      console.log(s);
      console.log(!nfa.accepts(s));
      t.assert(!nfa.accepts(s));
    }
  });
}
