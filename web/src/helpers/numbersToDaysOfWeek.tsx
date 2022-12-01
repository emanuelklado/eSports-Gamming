// função para transformar um array de numero de 0 a 6 em um array de dias da semana, retornando um paragrafo para cada elemento;
export default function numbersToDaysOfWeek(days: number[]) {
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    return days.map(day => (
        <p className="text-xs text-center justify-center rounded-lg border-green-800  border-[1px] h-5 w-10">{daysOfWeek[day]}</p>
    ));
}
