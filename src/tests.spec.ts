import test from 'ava';

import DeterministicFiniteStateMachine, {
  DFADescription,
} from './DeterministicFiniteStateMachine';
import NonDeterministicFiniteStateMachine, {
  NFADescription,
} from './NonDeterministicFiniteStateMachine';
// import { NFAtoDFAConverter } from './NFAtoDFAConverter';

const NFAmachinesTests: {
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
  startsEnds1: {
    accepted: ['11', '101', '111', '10000001', '11111111'],
    rejected: ['', '0', '011', '100', '01000111'],
    description: {
      transitions: {
        S: {
          1: ['A'],
        },
        A: {
          0: ['A'],
          1: ['A', 'B'],
        },
        B: {},
      },
      start: 'S',
      acceptStates: ['B'],
    },
  },
  '0100^*1': {
    accepted: ['0101', '01000001', '01000000001'],
    rejected: ['', '1', '0', '011', '0100000', '01000111'],
    description: {
      transitions: {
        S: {
          0: ['A'],
        },
        A: {
          1: ['B'],
        },
        B: {
          0: ['C'],
        },
        C: {
          lambda: ['D'],
        },
        D: {
          0: ['D'],
          1: ['E'],
        },
        E: {},
      },
      start: 'S',
      acceptStates: ['E'],
    },
  },
};

const DFAmachinesTests: {
  [name: string]: {
    description: DFADescription;
    accepted: string[];
    rejected: string[];
  };
} = {
  startsWith0DFA: {
    accepted: ['0', '01', '0000', '0111111'],
    rejected: ['1', '10', '101', '100000', '1011111'],
    description: {
      transitions: {
        S: {
          0: 'A',
          1: 'B',
        },
        A: {
          0: 'A',
          1: 'A',
        },
        B: {
          0: 'B',
          1: 'B',
        },
      },
      start: 'S',
      acceptStates: ['A'],
    },
  },
  div3: {
    accepted: ['', '0', '11', '000000', '1100000', '101111111101'],
    rejected: ['10', '1010', '100000', '1011111'],
    description: {
      transitions: {
        r0: {
          0: 'r0',
          1: 'r1',
        },
        r1: {
          0: 'r2',
          1: 'r0',
        },
        r2: {
          0: 'r1',
          1: 'r2',
        },
      },
      start: 'r0',
      acceptStates: ['r0'],
    },
  },
};

// NFA Tests:
for (const [name, testDesc] of Object.entries(NFAmachinesTests)) {
  test(`${name}/constructor`, (t) => {
    const nfa = new NonDeterministicFiniteStateMachine(testDesc.description);
    t.truthy(nfa);
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
      // console.log('accept');
      // console.log(s);
      // console.log(nfa.accepts(s));
      t.assert(nfa.accepts(s));
    }

    for (const s of rejected) {
      // console.log(!dfa.accepts(s));
      // console.log('reject');
      // console.log(s);
      // console.log(!nfa.accepts(s));
      t.assert(!nfa.accepts(s));
    }
  });
}

//DFA Tests:
for (const [name, testDesc] of Object.entries(DFAmachinesTests)) {
  test(`${name}/constructor`, (t) => {
    const dfa = new DeterministicFiniteStateMachine(testDesc.description);
    t.truthy(dfa);
  });

  test(`${name}/transition`, (t) => {
    const dfa = new DeterministicFiniteStateMachine(testDesc.description);
    const { transitions } = testDesc.description;

    for (const [state, stateTransitions] of Object.entries(transitions)) {
      for (const [symbol, nextState] of Object.entries(stateTransitions)) {
        t.assert(nextState === dfa.transition(state, symbol));
      }
    }
  });

  test(`${name}/accepts`, (t) => {
    const dfa = new DeterministicFiniteStateMachine(testDesc.description);
    const { accepted, rejected } = testDesc;
    // console.log(`
    // accepted: ${accepted}
    // rejected: ${rejected}
    // `);

    for (const s of accepted) {
      // console.log(dfa.accepts(s));
      t.assert(dfa.accepts(s));
      // t.assert(true);
    }

    for (const s of rejected) {
      // console.log(!dfa.accepts(s));
      t.assert(!dfa.accepts(s));
      // t.assert(true);
    }
  });
}

// NFA to DFA Tests:
// for (const [name, testDesc] of Object.entries(NFAmachinesTests)) {
//   test(`${name}/constructor`, (t) => {
//     const nfa = new NonDeterministicFiniteStateMachine(testDesc.description);
//     t.truthy(nfa);
//     console.log(nfa);
//   });

//   test(`${name}/conversion`, (t) => {
//     const nfa = new NonDeterministicFiniteStateMachine(testDesc.description);
//     // const { accepted, rejected } = testDesc;
//     // console.log(`
//     // accepted: ${accepted}
//     // rejected: ${rejected}
//     // `);
//     const dfa = NFAtoDFAConverter(nfa);
//     console.log(dfa);
//     t.assert(true);
//   });
// }
