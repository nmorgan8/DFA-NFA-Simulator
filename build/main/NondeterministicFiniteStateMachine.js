"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NonDeterministicFiniteStateMachine {
    constructor(description) {
        this.description = description;
    }
    getDesc() {
        return this.description;
    }
    stateTransitions(state, symbol) {
        const { description: { transitions }, } = this;
        if (transitions[state] && transitions[state][symbol]) {
            return transitions[state][symbol];
        }
        else {
            return [];
        }
    }
    transitions(states, symbol) {
        const newStates = new Set();
        for (const state of states) {
            const stateTrans = this.stateTransitions(state, symbol);
            for (const potentialState of stateTrans) {
                newStates.add(potentialState);
            }
        }
        return [...newStates];
    }
    accepts(s, states = [this.description.start]) {
        const { description: { acceptStates }, } = this;
        const possibleStates = [...states, ...this.transitions(states, 'l')];
        const nextStates = this.transitions(possibleStates, s.charAt(0));
        if (s.length !== 0) {
            return this.accepts(s.substr(1), nextStates);
        }
        else {
            for (const state of possibleStates) {
                if (acceptStates.includes(state)) {
                    return true;
                }
            }
            return false;
        }
    }
}
exports.default = NonDeterministicFiniteStateMachine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9uRGV0ZXJtaW5pc3RpY0Zpbml0ZVN0YXRlTWFjaGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ob25EZXRlcm1pbmlzdGljRmluaXRlU3RhdGVNYWNoaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBZUEsTUFBcUIsa0NBQWtDO0lBR3JELFlBQVksV0FBMkI7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQVksRUFBRSxNQUFtQjtRQUNoRCxNQUFNLEVBQ0osV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLEdBQzdCLEdBQUcsSUFBSSxDQUFDO1FBQ1QsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3BELE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFlLEVBQUUsTUFBbUI7UUFDOUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUNwQyxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUMxQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELEtBQUssTUFBTSxjQUFjLElBQUksVUFBVSxFQUFFO2dCQUN2QyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7UUFDRCxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsT0FBTyxDQUFDLENBQVMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUNsRCxNQUFNLEVBQ0osV0FBVyxFQUFFLEVBQUUsWUFBWSxFQUFFLEdBQzlCLEdBQUcsSUFBSSxDQUFDO1FBQ1QsTUFBTSxjQUFjLEdBQUcsQ0FBQyxHQUFHLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckUsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDOUM7YUFBTTtZQUNMLEtBQUssTUFBTSxLQUFLLElBQUksY0FBYyxFQUFFO2dCQUNsQyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2hDLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztDQUNGO0FBbERELHFEQWtEQyJ9