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
    const result = new DeterministicFiniteStateMachine_1.default(dfa);
    return result;
}
exports.NFAtoDFAConverter = NFAtoDFAConverter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTkZBdG9ERkFDb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTkZBdG9ERkFDb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUF1QjtBQUN2Qiw2QkFBNkI7Ozs7OztBQUU3Qix3R0FBZ0Y7QUFHaEYsU0FBZ0IsaUJBQWlCLENBQy9CLEdBQXVDO0lBRXZDLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QixLQUFLLE1BQU0sVUFBVSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1FBQzNELEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxrQkFBa0IsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNwQztZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3BDO1NBQ0Y7S0FDRjtJQUVELE1BQU0sR0FBRyxHQUFHO1FBQ1YsV0FBVyxFQUFFLEVBQUU7UUFDZixLQUFLLEVBQUUsSUFBSTtRQUNYLFlBQVksRUFBRSxFQUFFO0tBQ2pCLENBQUM7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXJCLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUNwQixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNyRCxNQUFNLE1BQU0sR0FBRyxJQUFJLHlDQUErQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXhELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUE5QkQsOENBOEJDIn0=