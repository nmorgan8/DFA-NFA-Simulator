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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV0ZXJtaW5pc3RpY0Zpbml0ZVN0YXRlTWFjaGluZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RldGVybWluaXN0aWNGaW5pdGVTdGF0ZU1hY2hpbmUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEI7QUFFMUIsNENBQTRDO0FBQzVDLG9CQUFvQjtBQUNwQiw4Q0FBOEM7QUFFOUMseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0QixtQ0FBbUM7QUFDbkMsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQixPQUFPO0FBQ1AsUUFBUTtBQUNSLG1CQUFtQjtBQUNuQixnREFBZ0Q7QUFDaEQseURBQXlEO0FBQ3pELHFCQUFxQjtBQUNyQix1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsYUFBYTtBQUNiLGVBQWU7QUFDZixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLGFBQWE7QUFDYixlQUFlO0FBQ2Ysb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixhQUFhO0FBQ2IsV0FBVztBQUNYLG9CQUFvQjtBQUNwQiw2QkFBNkI7QUFDN0IsU0FBUztBQUNULE9BQU87QUFDUCxZQUFZO0FBQ1osc0VBQXNFO0FBQ3RFLHFEQUFxRDtBQUNyRCxxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCLGdCQUFnQjtBQUNoQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIsYUFBYTtBQUNiLFdBQVc7QUFDWCxxQkFBcUI7QUFDckIsOEJBQThCO0FBQzlCLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUVMLGtFQUFrRTtBQUNsRSx5Q0FBeUM7QUFDekMsNkVBQTZFO0FBQzdFLHFCQUFxQjtBQUNyQixRQUFRO0FBRVIsd0NBQXdDO0FBQ3hDLDZFQUE2RTtBQUM3RSxvREFBb0Q7QUFFcEQsNkVBQTZFO0FBQzdFLDhFQUE4RTtBQUM5RSxpRUFBaUU7QUFDakUsVUFBVTtBQUNWLFFBQVE7QUFDUixRQUFRO0FBRVIscUNBQXFDO0FBQ3JDLDZFQUE2RTtBQUM3RSwrQ0FBK0M7QUFDL0MsdUJBQXVCO0FBQ3ZCLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsYUFBYTtBQUViLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFDeEMsa0NBQWtDO0FBQ2xDLDJCQUEyQjtBQUMzQixRQUFRO0FBRVIsa0NBQWtDO0FBQ2xDLHlDQUF5QztBQUN6QyxtQ0FBbUM7QUFDbkMsMkJBQTJCO0FBQzNCLFFBQVE7QUFDUixRQUFRO0FBQ1IsSUFBSSJ9