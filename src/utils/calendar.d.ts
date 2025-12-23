export declare function getBSYearList(): number[];
export declare function adToBs(adDate: Date): {
    year: number;
    month: number;
    day: number;
};
export declare function bsToAd(bsYear: number, bsMonth: number, bsDay: number): Date;
export declare const generateADCalendar: (month: number, year: number) => (number | null)[];
export declare const generateBSCalendar: (month: number, year: number) => (number | null)[];
