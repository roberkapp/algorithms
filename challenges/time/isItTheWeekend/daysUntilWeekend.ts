import { WEEKEND } from "./model";

export function daysUntilWeekend(dateString: string) : string {
    const day = new Date(dateString).getUTCDay();
    if(day === WEEKEND.SUNDAY || day === WEEKEND.SATURDAY
    ) return "It's the weekend!";

    const daysTillWeekend = WEEKEND.SATURDAY - day;
    return `${daysTillWeekend} ${daysTillWeekend > 1 ? 'days' : 'day'} until the weekend.`
}