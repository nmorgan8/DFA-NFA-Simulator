"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const NFSM_1 = __importDefault(require("./NFSM"));
const machinesTests = {
    startsWith0: {
        accepted: ['0', '01', '0000', '0111111'],
        rejected: ['', '1', '10', '101', '100000', '1011111'],
        description: {
            transitionsOverview: {
                S: {
                    0: ['A'],
                },
                A: {
                    0: ['A'],
                    1: ['A'],
                },
            },
            start: 'S',
            acceptStates: ['A'],
        },
    },
    starts0Ends1: {
        accepted: ['01', '011', '001', '0110101'],
        rejected: ['', '0', '1', '10', '101', '00000', '111111'],
        description: {
            transitionsOverview: {
                S: {
                    0: ['A'],
                },
                A: {
                    0: ['A'],
                    1: ['A', 'B'],
                },
                B: {},
            },
            start: 'S',
            acceptStates: ['B'],
        },
    },
};
for (const [name, testDesc] of Object.entries(machinesTests)) {
    // test(`${name}/constructor`, (t) => {
    //   const nfa = new NonDeterministicFiniteStateMachine(testDesc.description);
    //   t.truthy(nfa);
    // });
    ava_1.default(`${name}/accepts`, (t) => {
        const nfa = new NFSM_1.default(testDesc.description);
        const { accepted, rejected } = testDesc;
        for (const s of accepted) {
            console.log(s);
            const val = nfa.accepts(s);
            t.assert(val);
            console.log(val);
        }
        for (const s of rejected) {
            console.log(s);
            const val = nfa.accepts(s);
            t.assert(!val);
            console.log(val);
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTkZTTS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL05GU00uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUV2QixrREFBNEU7QUFFNUUsTUFBTSxhQUFhLEdBTWY7SUFDRixXQUFXLEVBQUU7UUFDWCxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7UUFDeEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUM7UUFDckQsV0FBVyxFQUFFO1lBQ1gsbUJBQW1CLEVBQUU7Z0JBQ25CLENBQUMsRUFBRTtvQkFDRCxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7aUJBQ1Q7Z0JBQ0QsQ0FBQyxFQUFFO29CQUNELENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztvQkFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7aUJBQ1Q7YUFDRjtZQUNELEtBQUssRUFBRSxHQUFHO1lBQ1YsWUFBWSxFQUFFLENBQUMsR0FBRyxDQUFDO1NBQ3BCO0tBQ0Y7SUFDRCxZQUFZLEVBQUU7UUFDWixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUM7UUFDekMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1FBQ3hELFdBQVcsRUFBRTtZQUNYLG1CQUFtQixFQUFFO2dCQUNuQixDQUFDLEVBQUU7b0JBQ0QsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO2lCQUNUO2dCQUNELENBQUMsRUFBRTtvQkFDRCxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7b0JBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztpQkFDZDtnQkFDRCxDQUFDLEVBQUUsRUFBRTthQUNOO1lBQ0QsS0FBSyxFQUFFLEdBQUc7WUFDVixZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUM7U0FDcEI7S0FDRjtDQUNGLENBQUM7QUFFRixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtJQUM1RCx1Q0FBdUM7SUFDdkMsOEVBQThFO0lBQzlFLG1CQUFtQjtJQUNuQixNQUFNO0lBRU4sYUFBSSxDQUFDLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLGNBQWtDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsUUFBUSxDQUFDO1FBRXhDLEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsS0FBSyxNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUMsQ0FBQyxDQUFDO0NBQ0oifQ==