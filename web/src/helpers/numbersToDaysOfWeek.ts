// função para transformar um array de numero de 0 a 6 em um array de dias da semana
export default function numbersToDaysOfWeek(days: number[]) {
    const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return days.map(day => (
        `${daysOfWeek[day]}`
    ));
}
