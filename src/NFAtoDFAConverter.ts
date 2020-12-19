// type State = string;
// type InputSymbol = string;

import DeterministicFiniteStateMachine from './DeterministicFiniteStateMachine';
import NonDeterministicFiniteStateMachine from './NonDeterministicFiniteStateMachine';

export function NFAtoDFAConverter(
  nfa: NonDeterministicFiniteStateMachine
): DeterministicFiniteStateMachine {
  const nfaDesc = nfa.getDesc();

  // if no transtition for symbol 0/1 add empty transition
  for (const stateTrans of Object.values(nfaDesc.transitions)) {
    for (const state of Object.keys(stateTrans)) {
      console.log(`state: ${state}\ttransitions: ${stateTrans}`);
      if (!Object.keys(stateTrans).includes('0')) {
        console.log(nfaDesc.transitions[state]);
        nfaDesc.transitions[state][0] = [];
      }
      if (!Object.keys(stateTrans).includes('1')) {
        console.log(nfaDesc.transitions[state]);
        nfaDesc.transitions[state][1] = [];
      }
    }
  }

  // init new dfa
  const dfa = {
    transitions: {},
    start: null,
    acceptStates: [],
  };
  console.log(nfaDesc);

  // init dead state with transitions to self
  const dead = 'dead';
  nfaDesc.transitions[dead] = { 0: [dead], 1: [dead] };
  const result = new DeterministicFiniteStateMachine(dfa);

  // stack to track which states we still need to convert
  let frontier = [[nfaDesc.start]];

  while (frontier.length > 0) {
    let currStates = frontier.pop();
  }

  return result;
}
