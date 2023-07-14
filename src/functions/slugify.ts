export const slugify = (str: string) => {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/, "")
        .replace(/[^a-z0-9 ]/, "-")
        .replace(/^-+/g, "")
        .replace(/-+$/g, "")
        .replace(/-{2,}/g, "")
}