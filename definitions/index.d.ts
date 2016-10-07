export interface IAroonResult {
    up: number;
    down: number;
}
export interface IMACDResult {
    macd: Array<number>;
    signal: Array<number>;
    histogram: Array<number>;
}
export interface IAverage {
    mean: number;
    variance: number;
    deviation: number;
}
export interface IBBANDSResult {
    highband: Array<number>;
    lowband: Array<number>;
    middleband: Array<number>;
}
export interface IPPOResult {
    ppo: Array<number>;
    signal: Array<number>;
    histogram: Array<number>;
}
export declare function arrayMax(array: Array<number>): number;
export declare function arrayMin(array: Array<number>): number;
export declare function upscale(number: number, places: number): number;
export declare function downscale(number: number, places: number): number;
export declare function diff(x: number, y: number): number;
export declare function average(a: Array<number>): IAverage;
export declare function BBANDS(array: Array<number>, period: number): IBBANDSResult;
export declare function AROON(higharray: Array<number>, lowarray: Array<number>, period: number): IAroonResult;
export declare function MFI(higharray: Array<number>, lowarray: Array<number>, closearray: Array<number>, volumearray: Array<number>, period: number): number;
export declare function RSI(array: Array<number>, rsiperiod: number): Array<number>;
export declare function STOCHRSI(instruments: Array<number>, rsiperiod: number): Array<number>;
export declare function SMA(originalArray: Array<number>, smaLength: number): Array<number>;
export declare function EMA(originalArray: Array<number>, emaLength: number): Array<number>;
export declare function MACD(array: Array<number>, i12: number, i26: number, i9: number): IMACDResult;
export declare function PERCPRICEOSC(array: Array<number>, i12: number, i26: number, i9: number): IPPOResult;
export declare function WILLR(highs: Array<number>, lows: Array<number>, closes: Array<number>, lookback: number): Array<number>;
export declare function TRUERANGE(highs: Array<number>, lows: Array<number>, closes: Array<number>): Array<number>;
