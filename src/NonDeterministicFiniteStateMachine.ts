type State = string;
type InputSymbol = string;

export interface NFADescription {
  transitions: {
    [key: string]: {
      lambda?: State[];
      0?: State[];
      1?: State[];
    };
  };
  start: State;
  acceptStates: State[];
}

export default class NonDeterministicFiniteStateMachine {
  private description: NFADescription;

  constructor(description: NFADescription) {
    this.description = description;
  }

  stateTransitions(state: State, symbol: InputSymbol): State[] {
    const {
      description: { transitions },
    } = this;
    if (transitions[state] && transitions[state][symbol]) {
      return transitions[state][symbol];
    } else {
      return [];
    }
  }

  transitions(states: State[], symbol: InputSymbol): State[] {
    const newStates = new Set<string>();
    for (const state of states) {
      const stateTrans = this.stateTransitions(state, symbol);
      for (const potentialState of stateTrans) {
        newStates.add(potentialState);
      }
    }
    return [...newStates];
  }

  accepts(s: string, states = [this.description.start]): boolean {
    const {
      description: { acceptStates },
    } = this;
    const possibleStates = [...states, ...this.transitions(states, 'lambda')];
    const nextStates = this.transitions(states, s.charAt(0));
    if (s.length !== 0) {
      return this.accepts(s.substr(1), nextStates);
    } else {
      for (const state of possibleStates) {
        if (acceptStates.includes(state)) {
          return true;
        }
      }
      return false;
    }
  }
}
