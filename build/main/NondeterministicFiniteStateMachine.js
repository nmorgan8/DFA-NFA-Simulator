"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NonDeterministicFiniteStateMachine {
    constructor(description) {
        this.description = description;
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
        const possibleStates = [...states, ...this.transitions(states, 'lambda')];
        const nextStates = this.transitions(states, s.charAt(0));
        console.log(`\t${s}\t${possibleStates}\t${nextStates}`);
        if (s.length !== 0) {
            this.accepts(s.substr(1), nextStates);
        }
        else {
            // console.log(`\t${possibleStates}`);
            for (const state of possibleStates) {
                if (acceptStates.includes(state)) {
                    return true;
                }
            }
        }
        return false;
    }
}
exports.default = NonDeterministicFiniteStateMachine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9uRGV0ZXJtaW5pc3RpY0Zpbml0ZVN0YXRlTWFjaGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ob25EZXRlcm1pbmlzdGljRmluaXRlU3RhdGVNYWNoaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBZUEsTUFBcUIsa0NBQWtDO0lBR3JELFlBQVksV0FBMkI7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQVksRUFBRSxNQUFtQjtRQUNoRCxNQUFNLEVBQ0osV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLEdBQzdCLEdBQUcsSUFBSSxDQUFDO1FBQ1QsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3BELE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFlLEVBQUUsTUFBbUI7UUFDOUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUNwQyxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUMxQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELEtBQUssTUFBTSxjQUFjLElBQUksVUFBVSxFQUFFO2dCQUN2QyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7UUFDRCxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsT0FBTyxDQUFDLENBQVMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUNsRCxNQUFNLEVBQ0osV0FBVyxFQUFFLEVBQUUsWUFBWSxFQUFFLEdBQzlCLEdBQUcsSUFBSSxDQUFDO1FBQ1QsTUFBTSxjQUFjLEdBQUcsQ0FBQyxHQUFHLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUUsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssY0FBYyxLQUFLLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLHNDQUFzQztZQUN0QyxLQUFLLE1BQU0sS0FBSyxJQUFJLGNBQWMsRUFBRTtnQkFDbEMsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNoQyxPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRjtBQWhERCxxREFnREMifQ==