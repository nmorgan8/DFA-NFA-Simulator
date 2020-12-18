import test from 'ava';

import DeterministicFiniteStateMachine, {
  DFADescription,
} from './DeterministicFiniteStateMachine';
// import { NFAtoDFAConverter } from './NFAtoDFAConverter';
import NonDeterministicFiniteStateMachine, {
  NFADescription,
} from './NonDeterministicFiniteStateMachine';

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
          l: ['D'],
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
  contain1110: {
    accepted: [
      '1110',
      '11110',
      '01110',
      '111101',
      '111100',
      '011101',
      '011100',
    ],
    rejected: ['', '1', '0', '1010', '011001', '000110010'],
    description: {
      transitions: {
        S: {
          0: ['S'],
          1: ['S', 'A'],
        },
        A: {
          1: ['B'],
        },
        B: {
          1: ['C'],
        },
        C: {
          0: ['D'],
        },
        D: {
          0: ['D'],
          1: ['D'],
        },
      },
      start: 'S',
      acceptStates: ['D'],
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
  starts01: {
    accepted: ['010', '0101', '0100', '0100001'],
    rejected: ['', '1', '0', '10', '0011', '101', '1010101'],
    description: {
      transitions: {
        S: {
          0: 'A',
          1: 'C',
        },
        A: {
          0: 'C',
          1: 'B',
        },
        B: {
          0: 'B',
          1: 'B',
        },
        C: {
          0: 'C',
          1: 'C',
        },
      },
      start: 'S',
      acceptStates: ['B'],
    },
  },
  starts00or11: {
    accepted: ['00', '11', '000', '111', '001', '110'],
    rejected: ['', '1', '0', '10', '01', '10101010'],
    description: {
      transitions: {
        S: {
          0: 'A',
          1: 'B',
        },
        A: {
          0: 'C',
          1: 'D',
        },
        B: {
          0: 'D',
          1: 'C',
        },
        C: {
          0: 'C',
          1: 'C',
        },
        D: {
          0: 'D',
          1: 'D',
        },
      },
      start: 'S',
      acceptStates: ['C'],
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

    for (const s of accepted) {
      t.assert(nfa.accepts(s));
    }

    for (const s of rejected) {
      t.assert(!nfa.accepts(s));
    }
  });

  // NFA to DFA Tests:
  // test(`${name}/conversion`, (t) => {
  //   const nfa = new NonDeterministicFiniteStateMachine(testDesc.description);
  //   // const { accepted, rejected } = testDesc;
  //   // console.log(`
  //   // accepted: ${accepted}
  //   // rejected: ${rejected}
  //   // `);
  //   const dfa = NFAtoDFAConverter(nfa);
  //   t.assert(dfa);
  // });
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

    for (const s of accepted) {
      t.assert(dfa.accepts(s));
    }

    for (const s of rejected) {
      t.assert(!dfa.accepts(s));
    }
  });
}
