

export function FormatString(input: string): { words: string[], number: number[] } {
    const words: string[] = [];
    const number: number[] = []

    const wordsRegex = /[a-zA-Z]+/g;
    const numberRegex = /-?\d+(\.\d+)?/g;

    const wordMatches = input.match(wordsRegex);
    if (wordMatches) {
        words.push(...wordMatches);
    }

    const numberMatches = input.match(numberRegex);
    if (numberMatches) {
        number.push(...numberMatches.map(num => parseFloat(num)));
    }


    return { words, number }
}

