export const formatName = (nome: string) => {
    const parts = nome.trim().split(" ");
    if (parts.length === 1) {
        return parts[0].toUpperCase();
    }
    const lastName = parts[parts.length - 1].toUpperCase();
    const initials = parts
        .slice(0, -1)
        .filter(
            (name) =>
                !["de", "da", "das", "do", "dos", "e"].includes(name.toLowerCase())
        )
        .map((name) => name.charAt(0).toUpperCase())
        .join(". ");

    return `${lastName}, ${initials}`;
};