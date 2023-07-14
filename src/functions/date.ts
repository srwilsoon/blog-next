export function formatDate (date: string) {
    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(date))
}