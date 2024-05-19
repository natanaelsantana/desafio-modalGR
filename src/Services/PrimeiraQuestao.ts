export function formatName(nome: string) {
    const parts = nome.trim().split(" ");
    if (parts.length === 1) {
        return parts[0].toUpperCase();
    }
    const lastName = parts[parts.length - 1].toUpperCase(); //Retirada do último nome e coloca em maiúscula
    const initials = parts
        .slice(0, -1) //Retira o último nome
        .filter(
            (name) =>
                !["de", "da", "das", "do", "dos", "e"].includes(name.toLowerCase()) //Retira os artigos 
        )
        .map((name) => name.charAt(0).toUpperCase()) //Coleta toda primeira letra de nome e coloca em maiúscula
        .join(". "); //Vai adicionando um ponto adiante de cada nome.

    return `${lastName}, ${initials}`;
}