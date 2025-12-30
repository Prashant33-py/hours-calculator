import type { Cycle } from "./TimeCycle";

interface LoginTime {
    loginHour: number,
    loginMinute: number,
    cycle: Cycle
}

export type { LoginTime };