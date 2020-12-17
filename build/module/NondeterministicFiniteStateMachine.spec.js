import test from 'ava';
import NonDeterministicFiniteStateMachine from './NonDeterministicFiniteStateMachine';
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
    test(`${name}/constructor`, (t) => {
        const nfa = new NonDeterministicFiniteStateMachine(testDesc.description);
        t.truthy(nfa);
        console.log(nfa);
    });
    test(`${name}/accepts`, (t) => {
        const nfa = new NonDeterministicFiniteStateMachine(testDesc.description);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9uRGV0ZXJtaW5pc3RpY0Zpbml0ZVN0YXRlTWFjaGluZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL05vbkRldGVybWluaXN0aWNGaW5pdGVTdGF0ZU1hY2hpbmUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxLQUFLLENBQUM7QUFFdkIsT0FBTyxrQ0FFTixNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE1BQU0sYUFBYSxHQU1mO0lBQ0YsV0FBVyxFQUFFO1FBQ1gsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDO1FBQ3hDLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUM7UUFDakQsV0FBVyxFQUFFO1lBQ1gsV0FBVyxFQUFFO2dCQUNYLENBQUMsRUFBRTtvQkFDRCxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7aUJBQ1Q7Z0JBQ0QsQ0FBQyxFQUFFO29CQUNELENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztvQkFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7aUJBQ1Q7YUFDRjtZQUNELEtBQUssRUFBRSxHQUFHO1lBQ1YsWUFBWSxFQUFFLENBQUMsR0FBRyxDQUFDO1NBQ3BCO0tBQ0Y7Q0F1QkYsQ0FBQztBQUVGLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO0lBQzVELElBQUksQ0FBQyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDaEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxrQ0FBa0MsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQzVCLE1BQU0sR0FBRyxHQUFHLElBQUksa0NBQWtDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsUUFBUSxDQUFDO1FBQ3hDLGdCQUFnQjtRQUNoQix3QkFBd0I7UUFDeEIsd0JBQXdCO1FBQ3hCLE1BQU07UUFFTixLQUFLLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUN4QiwrQkFBK0I7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFFRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUN4QixnQ0FBZ0M7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7Q0FDSiJ9