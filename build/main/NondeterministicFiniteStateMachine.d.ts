declare type State = string;
declare type InputSymbol = string;
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
    private description;
    constructor(description: NFADescription);
    stateTransitions(state: State, symbol: InputSymbol): State[];
    transitions(states: State[], symbol: InputSymbol): State[];
    accepts(s: string, states?: string[]): boolean;
}
export {};
