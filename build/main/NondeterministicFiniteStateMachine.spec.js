"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const NonDeterministicFiniteStateMachine_1 = __importDefault(require("./NonDeterministicFiniteStateMachine"));
const machinesTests = {
    startsWith0: {
        accepted: ['0', '01', '0000', '0111111'],
        rejected: ['1', '10', '101', '100000', '1011111'],
        description: {
            transitions: {
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
};
for (const [name, testDesc] of Object.entries(machinesTests)) {
    ava_1.default(`${name}/constructor`, (t) => {
        const nfa = new NonDeterministicFiniteStateMachine_1.default(testDesc.description);
        t.truthy(nfa);
        console.log(nfa);
    });
    ava_1.default(`${name}/accepts`, (t) => {
        const nfa = new NonDeterministicFiniteStateMachine_1.default(testDesc.description);
        const { accepted, rejected } = testDesc;
        // console.log(`
        // accepted: ${accepted}
        // rejected: ${rejected}
        // `);
        for (const s of accepted) {
            // console.log(dfa.accepts(s));
            console.log('accept');
            console.log(s);
            console.log(nfa.accepts(s));
            t.assert(nfa.accepts(s));
        }
        for (const s of rejected) {
            // console.log(!dfa.accepts(s));
            console.log('reject');
            console.log(s);
            console.log(!nfa.accepts(s));
            t.assert(!nfa.accepts(s));
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9uRGV0ZXJtaW5pc3RpY0Zpbml0ZVN0YXRlTWFjaGluZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL05vbkRldGVybWluaXN0aWNGaW5pdGVTdGF0ZU1hY2hpbmUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUV2Qiw4R0FFOEM7QUFFOUMsTUFBTSxhQUFhLEdBTWY7SUFDRixXQUFXLEVBQUU7UUFDWCxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7UUFDeEMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQztRQUNqRCxXQUFXLEVBQUU7WUFDWCxXQUFXLEVBQUU7Z0JBQ1gsQ0FBQyxFQUFFO29CQUNELENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztpQkFDVDtnQkFDRCxDQUFDLEVBQUU7b0JBQ0QsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO29CQUNSLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztpQkFDVDthQUNGO1lBQ0QsS0FBSyxFQUFFLEdBQUc7WUFDVixZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUM7U0FDcEI7S0FDRjtDQXVCRixDQUFDO0FBRUYsS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7SUFDNUQsYUFBSSxDQUFDLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNoQyxNQUFNLEdBQUcsR0FBRyxJQUFJLDRDQUFrQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUVILGFBQUksQ0FBQyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDNUIsTUFBTSxHQUFHLEdBQUcsSUFBSSw0Q0FBa0MsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxRQUFRLENBQUM7UUFDeEMsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsTUFBTTtRQUVOLEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1lBQ3hCLCtCQUErQjtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQjtRQUVELEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1lBQ3hCLGdDQUFnQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDLENBQUMsQ0FBQztDQUNKIn0=