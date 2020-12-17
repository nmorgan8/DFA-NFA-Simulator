export interface NFADescription {
    transitionsOverview: {
        [key: string]: NFAPossibleTrans;
    };
    start: string;
    acceptStates: string[];
}
export interface NFAPossibleTrans {
    0?: string[];
    1?: string[];
    L?: string[];
}
export interface NFATransMap<NFAPossibleTrans> {
    [key: string]: NFAPossibleTrans;
}
export declare class NFANode {
    state: string;
    isAccept: boolean;
    transitions: NFATransMap<NFANode[]>;
    constructor(state: string, isAccept: boolean);
    addTransition(action: string, node: NFANode): void;
    getTrans(): NFATransMap<NFANode[]>;
}
export default class NonDeterministicFiniteStateMachine {
    private description;
    private root;
    private NFAMap;
    constructor(description: NFADescription);
    getNode(name: string): NFANode;
    createNFA(): void;
    accepts(s: string, node?: NFANode): any;
}
