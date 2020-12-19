"use strict";
// type State = string;
// type InputSymbol = string;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFAtoDFAConverter = void 0;
const DeterministicFiniteStateMachine_1 = __importDefault(require("./DeterministicFiniteStateMachine"));
function NFAtoDFAConverter(nfa) {
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
    const result = new DeterministicFiniteStateMachine_1.default(dfa);
    // stack to track which states we still need to convert
    const frontier = [[nfaDesc.start]];
    while (frontier.length > 0) {
        let currStates = frontier.pop();
        currStates = [...currStates];
    }
    return result;
}
exports.NFAtoDFAConverter = NFAtoDFAConverter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTkZBdG9ERkFDb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTkZBdG9ERkFDb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUF1QjtBQUN2Qiw2QkFBNkI7Ozs7OztBQUU3Qix3R0FBZ0Y7QUFHaEYsU0FBZ0IsaUJBQWlCLENBQy9CLEdBQXVDO0lBRXZDLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUU5Qix3REFBd0Q7SUFDeEQsS0FBSyxNQUFNLFVBQVUsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUMzRCxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQUssa0JBQWtCLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDcEM7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNwQztTQUNGO0tBQ0Y7SUFFRCxlQUFlO0lBQ2YsTUFBTSxHQUFHLEdBQUc7UUFDVixXQUFXLEVBQUUsRUFBRTtRQUNmLEtBQUssRUFBRSxJQUFJO1FBQ1gsWUFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFckIsMkNBQTJDO0lBQzNDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUNwQixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNyRCxNQUFNLE1BQU0sR0FBRyxJQUFJLHlDQUErQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXhELHVEQUF1RDtJQUN2RCxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFbkMsT0FBTyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMxQixJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEMsVUFBVSxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztLQUM5QjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUExQ0QsOENBMENDIn0=