"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeterministicFiniteStateMachine {
    constructor(description) {
        this.description = description;
    }
    transition(state, symbol) {
        const { description: { transitions }, } = this;
        return transitions[state][symbol];
    }
    accepts(s) {
        const { description: { start, acceptStates }, } = this;
        let state = start;
        for (const symbol of s) {
            state = this.transition(state, symbol);
        }
        return acceptStates.includes(state);
    }
}
exports.default = DeterministicFiniteStateMachine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV0ZXJtaW5pc3RpY0Zpbml0ZVN0YXRlTWFjaGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EZXRlcm1pbmlzdGljRmluaXRlU3RhdGVNYWNoaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBY0EsTUFBcUIsK0JBQStCO0lBR2xELFlBQVksV0FBMkI7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFZLEVBQUUsTUFBbUI7UUFDMUMsTUFBTSxFQUNKLFdBQVcsRUFBRSxFQUFFLFdBQVcsRUFBRSxHQUM3QixHQUFHLElBQUksQ0FBQztRQUNULE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxPQUFPLENBQUMsQ0FBUztRQUNmLE1BQU0sRUFDSixXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEdBQ3JDLEdBQUcsSUFBSSxDQUFDO1FBRVQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRWxCLEtBQUssTUFBTSxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN4QztRQUVELE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBWUY7QUF0Q0Qsa0RBc0NDIn0=