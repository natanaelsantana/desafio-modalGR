
// A função receber um objeto
export function FormatString(input: string): { words: string[], number: number[] } {
    const words: string[] = [];
    const number: number[] = []

    const wordsRegex = /[a-zA-Z]+/g; //Regex para palavaras
    const numberRegex = /-?\d+(\.\d+)?/g; //regex para números

    const wordMatches = input.match(wordsRegex); //Verificação de compatibilidade do regex
    if (wordMatches) {
        words.push(...wordMatches);
    }

    const numberMatches = input.match(numberRegex); //Verificação de compatibilidade do regex
    if (numberMatches) {
        number.push(...numberMatches.map(num => parseFloat(num)));
    }


    return { words, number }
}

