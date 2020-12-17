// import test from 'ava';

// import DeterministicFiniteStateMachine, {
//   DFADescription,
// } from './DeterministicFiniteStateMachine';

// const machinesTests: {
//   [name: string]: {
//     description: DFADescription;
//     accepted: string[];
//     rejected: string[];
//   };
// } = {
//   startsWith0: {
//     accepted: ['0', '01', '0000', '0111111'],
//     rejected: ['1', '10', '101', '100000', '1011111'],
//     description: {
//       transitions: {
//         S: {
//           0: 'A',
//           1: 'B',
//         },
//         A: {
//           0: 'A',
//           1: 'A',
//         },
//         B: {
//           0: 'B',
//           1: 'B',
//         },
//       },
//       start: 'S',
//       acceptStates: ['A'],
//     },
//   },
//   div3: {
//     accepted: ['', '0', '11', '000000', '1100000', '101111111101'],
//     rejected: ['10', '1010', '100000', '1011111'],
//     description: {
//       transitions: {
//         r0: {
//           0: 'r0',
//           1: 'r1',
//         },
//         r1: {
//           0: 'r2',
//           1: 'r0',
//         },
//         r2: {
//           0: 'r1',
//           1: 'r2',
//         },
//       },
//       start: 'r0',
//       acceptStates: ['r0'],
//     },
//   },
// };

// for (const [name, testDesc] of Object.entries(machinesTests)) {
//   test(`${name}/constructor`, (t) => {
//     const dfa = new DeterministicFiniteStateMachine(testDesc.description);
//     t.truthy(dfa);
//   });

//   test(`${name}/transition`, (t) => {
//     const dfa = new DeterministicFiniteStateMachine(testDesc.description);
//     const { transitions } = testDesc.description;

//     for (const [state, stateTransitions] of Object.entries(transitions)) {
//       for (const [symbol, nextState] of Object.entries(stateTransitions)) {
//         t.assert(nextState === dfa.transition(state, symbol));
//       }
//     }
//   });

//   test(`${name}/accepts`, (t) => {
//     const dfa = new DeterministicFiniteStateMachine(testDesc.description);
//     const { accepted, rejected } = testDesc;
//     // console.log(`
//     // accepted: ${accepted}
//     // rejected: ${rejected}
//     // `);

//     for (const s of accepted) {
//       // console.log(dfa.accepts(s));
//       t.assert(dfa.accepts(s));
//       // t.assert(true);
//     }

//     for (const s of rejected) {
//       // console.log(!dfa.accepts(s));
//       t.assert(!dfa.accepts(s));
//       // t.assert(true);
//     }
//   });
// }
