export const Cycle = {
    AM: "AM",
    PM: "PM"
} as const;

export type Cycle = typeof Cycle[keyof typeof Cycle];