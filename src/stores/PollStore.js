import { writable } from "svelte/store";


const PollStore = writable([
    {
        id: 1,
        question: 'Python or JavaScript?',
        answerA: 'Python',
        answerB: 'JavaScript',
        votesA: 10,
        votesB: 16,
    },
]);

export default PollStore;
