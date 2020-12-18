// type State = string;
// type InputSymbol = string;

import DeterministicFiniteStateMachine from './DeterministicFiniteStateMachine';
import NonDeterministicFiniteStateMachine from './NonDeterministicFiniteStateMachine';

export function NFAtoDFAConverter(
  nfa: NonDeterministicFiniteStateMachine
): DeterministicFiniteStateMachine {
  const nfaDesc = nfa.getDesc();
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

  const dfa = {
    transitions: {},
    start: null,
    acceptStates: [],
  };
  console.log(nfaDesc);

  const dead = 'dead';
  nfaDesc.transitions[dead] = { 0: [dead], 1: [dead] };
  const result = new DeterministicFiniteStateMachine(dfa);

  return result;
}
