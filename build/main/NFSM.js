"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFANode = void 0;
class NFANode {
    constructor(state, isAccept) {
        this.isAccept = false;
        this.transitions = {};
        this.state = state;
        this.isAccept = isAccept;
    }
    addTransition(action, node) {
        if (this.transitions[action] === undefined ||
            this.transitions[action] === null) {
            this.transitions[action] = [];
        }
        this.transitions[action].push(node);
    }
    getTrans() {
        return this.transitions;
    }
}
exports.NFANode = NFANode;
class NonDeterministicFiniteStateMachine {
    constructor(description) {
        this.NFAMap = {};
        this.description = description;
        this.createNFA();
        console.log(this.NFAMap);
    }
    getNode(name) {
        if (this.NFAMap !== undefined && Object.keys(this.NFAMap).includes(name)) {
            return this.NFAMap[name];
        }
        return (this.NFAMap[name] = new NFANode(name, this.description.acceptStates.includes(name)));
    }
    createNFA() {
        for (const node of Object.entries(this.description.transitionsOverview)) {
            if (this.description.start === node[0])
                this.root = this.getNode(node[0]);
            for (const trans of Object.entries(node[1])) {
                for (const action of Object.values(trans[1])) {
                    this.getNode(node[0]).addTransition(trans[0], this.getNode(String(action)));
                }
            }
        }
    }
    accepts(s, node) {
        if (node === undefined || node === null)
            node = this.root;
        const transitions = node.transitions;
        console.log(`\tstring: ${s}`);
        if (s.length === 0) {
            // console.log('AMAZING!!\n');
            if (node.isAccept) {
                return node.isAccept;
            }
        }
        else {
            const nextTrans = transitions[s.charAt(0)];
            if (nextTrans === undefined || nextTrans === null)
                return false;
            for (const newNode of nextTrans) {
                // console.log('YOU WRONG!!');
                return this.accepts(s.substr(1), newNode);
            }
        }
    }
}
exports.default = NonDeterministicFiniteStateMachine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTkZTTS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ORlNNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQXVCQSxNQUFhLE9BQU87SUFLbEIsWUFBWSxLQUFhLEVBQUUsUUFBaUI7UUFINUMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixnQkFBVyxHQUEyQixFQUFFLENBQUM7UUFHdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUFjLEVBQUUsSUFBYTtRQUN6QyxJQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUztZQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFDakM7WUFDQSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Q0FDRjtBQXZCRCwwQkF1QkM7QUFFRCxNQUFxQixrQ0FBa0M7SUFLckQsWUFBWSxXQUEyQjtRQUYvQixXQUFNLEdBQXlCLEVBQUUsQ0FBQztRQUd4QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtRQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxDQUNyQyxJQUFJLEVBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUM3QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUztRQUNQLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDdkUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRSxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNDLEtBQUssTUFBTSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQ2pDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUM3QixDQUFDO2lCQUNIO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsQ0FBUyxFQUFFLElBQWM7UUFDL0IsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksS0FBSyxJQUFJO1lBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLDhCQUE4QjtZQUM5QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN0QjtTQUNGO2FBQU07WUFDTCxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLEtBQUssSUFBSTtnQkFBRSxPQUFPLEtBQUssQ0FBQztZQUNoRSxLQUFLLE1BQU0sT0FBTyxJQUFJLFNBQVMsRUFBRTtnQkFDL0IsOEJBQThCO2dCQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUMzQztTQUNGO0lBQ0gsQ0FBQztDQU1GO0FBN0RELHFEQTZEQyJ9