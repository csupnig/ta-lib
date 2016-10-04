export interface IAroonResult {
	up : number;
	down : number;
}

export interface IMACDResult {
	macd: Array<number>;
	signal: Array<number>;
	histogram: Array<number>;
}

export interface IAverage {
	mean : number;
	variance: number;
	deviation : number;
}

export interface IBBANDSResult {
	highband : Array<number>;
	lowband : Array<number>;
	middleband : Array<number>;
}
export interface IPPOResult {
  ppo:  Array<number>;
  signal: Array<number>;
  histogram: Array<number>;
}

export function arrayMax (array : Array<number>) : number {
	return Math.max.apply(Math, array.filter(function (n) {
		return !isNaN(n);
	}));
}

export function arrayMin (array : Array<number>) : number {
	return Math.min.apply(Math, array.filter(function (n) {
		return !isNaN(n);
	}));
}

export function upscale(number : number, places : number) : number {
	return Math.round(number * Math.pow(10,places));
}

export function downscale(number:number, places:number) : number {
	return number / Math.pow(10,places);
}

export function diff  (x : number, y : number) : number {
	return ((x - y) / ((x + y) / 2)) * 100;
}

export function average(a : Array<number>) : IAverage {
	var r = {mean: 0, variance: 0, deviation: 0}, t = a.length, m, l, s;
	for (m, s = 0, l = t; l--; s += a[l]) {
	}
	for (m = r.mean = s / t, l = t, s = 0; l--; s += Math.pow(a[l] - m, 2)) {
	}
	return r.deviation = Math.sqrt(r.variance = s / t), r;
}

export function BBANDS (array : Array<number>, period : number) : IBBANDSResult{
	var bbands = {
			middleband:[],
			lowband:[],
			highband:[]
		},
		sma = SMA(array, period),
		avg ,i,arr;
	for (i = period-1;i>=0;i--) {
		arr = array.slice(i, i + period);
		avg = average(arr);
		bbands.highband[i] = sma[i] + (2 * avg.deviation);
		bbands.lowband[i] = sma[i] - (2 * avg.deviation);
		bbands.middleband[i] = sma[i];
	}
	return bbands;
}


export function AROON (higharray : Array<number>, lowarray : Array<number>, period : number) : IAroonResult{
	var harr = higharray.slice(0, period),
		larr = lowarray.slice(0, period),
		hh = arrayMin(harr),
		hday = harr.indexOf(hh),
		ll = arrayMin(larr),
		lday = larr.indexOf(ll);

	return {
		up: ((period - hday) / period) * 100,
		down: ((period - lday) / period) * 100
	};

}

export function MFI (higharray : Array<number>, lowarray : Array<number>, closearray : Array<number>, volumearray : Array<number>, period : number) : number {

	var harr = higharray.slice(0, period).reverse(),
		larr = lowarray.slice(0, period).reverse(),
		clarr = closearray.slice(0, period).reverse(),
		vlarr = volumearray.slice(0, period).reverse(),

		lasttp = 0,
		first = true,

		posmf = 0,
		negmf = 0,
		i, tp;

	for (i = 0; i < closearray.length; i++) {
		if (first) {
			lasttp = (harr[i] + larr[i] + clarr[i]) / 3;
			first = false;
		} else {
			tp = (harr[i] + larr[i] + clarr[i]) / 3;
			if (tp > lasttp) {
				posmf += (tp * vlarr[0]);
			} else if (tp < lasttp) {
				negmf += (tp * vlarr[0]);
			}
			lasttp = tp;
		}
	}

	return ( 100 - (100 / (1 + (posmf / negmf))));
}

export function RSI (array : Array<number>, rsiperiod : number) : Array<number> {
	var rsi =[],i,j,loss,gain,diff,avggain,avgloss,first=true;

	for (i = rsiperiod -1; i>=0; i--) {
		loss = gain = 0;
		if (first) {
			for (j = i + rsiperiod -1; j >= i; j--) {
				diff = array[j + 1] - array[j];
				if (diff > 0) {
					loss += Math.abs(diff);
				} else {
					gain += Math.abs(diff);
				}
			}
			first = false;
			avggain = gain / rsiperiod;
			avgloss = loss / rsiperiod;
		} else {
			diff = array[i + 1] - array[i];
			if (diff > 0) {
				loss += Math.abs(diff);
			} else {
				gain += Math.abs(diff);
			}
			avggain = ((avggain * (rsiperiod-1)) + gain) / rsiperiod;
			avgloss = ((avgloss * (rsiperiod-1)) + loss) / rsiperiod;
		}
		//console.log("g", avggain, "l", avgloss);

		if (avgloss == 0) {
			rsi[i] = 100;
		} else {
			rsi[i] = 100 - (100/(1+(avggain/avgloss)));
		}
	}

	return rsi;
}

export function STOCHRSI(instruments : Array<number>, rsiperiod : number) : Array<number> {
	var stochrsi = [],
		rsiarray ,
		rsimin ,
		rsimax ,i,arr;
	for (i = rsiperiod-1;i>=0;i--) {
		arr = instruments.slice(i);
		rsiarray = RSI(arr,rsiperiod);
		rsimin = arrayMin(rsiarray);
		rsimax = arrayMax(rsiarray);
		if (rsimax - rsimin == 0) {
			stochrsi[i]= 100;
		} else {
			stochrsi[i]= 100 * (rsiarray[0] - rsimin) / (rsimax - rsimin);
		}
	}
	return stochrsi;
}

export function SMA (originalArray : Array<number>, smaLength : number) : Array<number>{
	var array , sma = [], i;
	for (i = smaLength-1; i >= 0 ; i--) {
		array = originalArray.slice(i, i + smaLength);
		sma[i] = array.reduce((a, b) => a + b) / array.length;
	}
	return sma;
}

export function EMA (originalArray : Array<number>, emaLength : number) : Array<number>{
	var array = originalArray.slice().reverse(),
		iPos = 0, i, k, ema;
	// trim initial NaN values
	for (iPos = 0; iPos < array.length && isNaN(array[iPos]); iPos++) {
	}
	array = array.slice(iPos); // trim initial NaN values from array
	ema = [];
	k = 2 / (emaLength + 1);
	for (i = 0; i < emaLength - 1; i++) {
		ema[i] = NaN;
	}
	ema[emaLength - 1] = array.slice(0, emaLength).reduce(function (a, b) {
			return a + b;
		}) / emaLength;
	for (i = emaLength; i < array.length; i++) {
		ema[i] = array[i] * k + ema[i - 1] * (1 - k);
	}
	ema.reverse(); // reverse back for main consumption
	for (i = 0; i < iPos; i++) {
		ema.push(NaN);
	}
	return ema;
}

export function MACD (array : Array<number>, i12 : number, i26 : number, i9 : number)  : IMACDResult{

	var ema12 = EMA(array, i12),
		ema26 = EMA(array, i26),
		macd = [], i, signal, histogram;
	for (i = 0; i < ema12.length; i++) {
		macd.push(ema12[i] - ema26[i]);
	}
	signal = EMA(macd, i9);
	histogram = [];
	for (i = 0; i < macd.length; i++) {
		histogram.push(macd[i] - signal[i]);
	}
	return {
		macd: macd,
		signal: signal,
		histogram: histogram
	};
}

export function PERCPRICEOSC(array: Array<number>, i12 : number, i26 : number, i9 : number): IPPOResult{
	var ema12 = EMA(array,12),
		ema26 = EMA(array,26),
		ppo = [],i,signal,histogram;
		for(i=0; i < ema12.length; i++){
			ppo.push((ema12[i]-ema26[i])/ema26[i] * 100);
		}
		signal = EMA(ppo,9);
		histogram=[];
		for(i=0; i < ppo.length; i++){
			histogram.push(ppo[i] - signal[i]);
		}
	return {
		ppo: ppo,
		signal: signal,
		histogram: histogram
	};
}
