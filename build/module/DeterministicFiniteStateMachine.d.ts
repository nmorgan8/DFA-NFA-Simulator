declare type State = string;
declare type InputSymbol = string;
export interface DFADescription {
    transitions: {
        [key: string]: {
            0: State;
            1: State;
        };
    };
    start: State;
    acceptStates: State[];
}
export default class DeterministicFiniteStateMachine {
    private description;
    constructor(description: DFADescription);
    transition(state: State, symbol: InputSymbol): State;
    accepts(s: string): boolean;
}
export {};
