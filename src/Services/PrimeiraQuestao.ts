// Função recebe apenas a string
export function formatName(nome: string) {
    const parts = nome.trim().split(" "); // Remover espaços no fim e no começo, split ara ciração de substrings

    //Caso tenha apenas um nome
    if (parts.length === 1) {
        return parts[0].toUpperCase();
    }
    const lastName = parts[parts.length - 1].toUpperCase(); //Retirada do último nome e coloca em letras maiúsculas 
    const initials = parts
        .slice(0, -1) //Novo array sem o último nome
        /*Retira os artigo, coloca os nomes em letras minúsculas 
        e caso o "name" não esteja na lista de artigos, ele é mantido no array*/
        .filter(
            (name) =>
                !["de", "da", "das", "do", "dos", "e"].includes(name.toLowerCase())
        )
        .map((name) => name.charAt(0).toUpperCase()) //Coleta toda primeira letra de nome e coloca em maiúscula
        .join(". "); //Vai adicionando um ponto adiante de cada inicial

    return `${lastName}, ${initials}`;
}