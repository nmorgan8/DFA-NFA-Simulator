// type State = string;
// type InputSymbol = string;
import DeterministicFiniteStateMachine from './DeterministicFiniteStateMachine';
export function NFAtoDFAConverter(nfa) {
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
    const frontier = [[nfaDesc.start]];
    while (frontier.length > 0) {
        let currStates = frontier.pop();
        currStates = [...currStates];
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTkZBdG9ERkFDb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTkZBdG9ERkFDb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQXVCO0FBQ3ZCLDZCQUE2QjtBQUU3QixPQUFPLCtCQUErQixNQUFNLG1DQUFtQyxDQUFDO0FBR2hGLE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsR0FBdUM7SUFFdkMsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRTlCLHdEQUF3RDtJQUN4RCxLQUFLLE1BQU0sVUFBVSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1FBQzNELEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxrQkFBa0IsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNwQztZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3BDO1NBQ0Y7S0FDRjtJQUVELGVBQWU7SUFDZixNQUFNLEdBQUcsR0FBRztRQUNWLFdBQVcsRUFBRSxFQUFFO1FBQ2YsS0FBSyxFQUFFLElBQUk7UUFDWCxZQUFZLEVBQUUsRUFBRTtLQUNqQixDQUFDO0lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVyQiwyQ0FBMkM7SUFDM0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3JELE1BQU0sTUFBTSxHQUFHLElBQUksK0JBQStCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFeEQsdURBQXVEO0lBQ3ZELE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVuQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzFCLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO0tBQzlCO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyJ9