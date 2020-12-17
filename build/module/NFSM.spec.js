import test from 'ava';
import NonDeterministicFiniteStateMachine from './NFSM';
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
    test(`${name}/accepts`, (t) => {
        const nfa = new NonDeterministicFiniteStateMachine(testDesc.description);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTkZTTS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL05GU00uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxLQUFLLENBQUM7QUFFdkIsT0FBTyxrQ0FBc0QsTUFBTSxRQUFRLENBQUM7QUFFNUUsTUFBTSxhQUFhLEdBTWY7SUFDRixXQUFXLEVBQUU7UUFDWCxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7UUFDeEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUM7UUFDckQsV0FBVyxFQUFFO1lBQ1gsbUJBQW1CLEVBQUU7Z0JBQ25CLENBQUMsRUFBRTtvQkFDRCxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7aUJBQ1Q7Z0JBQ0QsQ0FBQyxFQUFFO29CQUNELENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztvQkFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7aUJBQ1Q7YUFDRjtZQUNELEtBQUssRUFBRSxHQUFHO1lBQ1YsWUFBWSxFQUFFLENBQUMsR0FBRyxDQUFDO1NBQ3BCO0tBQ0Y7SUFDRCxZQUFZLEVBQUU7UUFDWixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUM7UUFDekMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1FBQ3hELFdBQVcsRUFBRTtZQUNYLG1CQUFtQixFQUFFO2dCQUNuQixDQUFDLEVBQUU7b0JBQ0QsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO2lCQUNUO2dCQUNELENBQUMsRUFBRTtvQkFDRCxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7b0JBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztpQkFDZDtnQkFDRCxDQUFDLEVBQUUsRUFBRTthQUNOO1lBQ0QsS0FBSyxFQUFFLEdBQUc7WUFDVixZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUM7U0FDcEI7S0FDRjtDQUNGLENBQUM7QUFFRixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtJQUM1RCx1Q0FBdUM7SUFDdkMsOEVBQThFO0lBQzlFLG1CQUFtQjtJQUNuQixNQUFNO0lBRU4sSUFBSSxDQUFDLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLGtDQUFrQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUV4QyxLQUFLLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQjtRQUVELEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7SUFDSCxDQUFDLENBQUMsQ0FBQztDQUNKIn0=