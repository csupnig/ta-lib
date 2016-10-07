var MathUtil = require('../index');
var assert = require('assert');

describe('MathUtil', function(){
    describe('average',function(){
       it('should yield expected results', function(){
           var instruments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 25];
           var avg = MathUtil.average(instruments);
           assert.equal(6.48074069840786, avg.deviation);
       })
    });
    describe('RSI', function(){
       it('should yield expected results', function(){
          var instruments = [44.34,
                  44.09,
                  44.15,
                  43.61,
                  44.33,
                  44.83,
                  45.10,
                  45.42,
                  45.84,
                  46.08,
                  45.89,
                  46.03,
                  45.61,
                  46.28,
                  46.28,
                  46.00,
                  46.03,
                  46.41,
                  46.22,
                  45.64,
                  46.21,
                  46.25,
                  45.71,
                  46.45,
                  45.78,
                  45.35,
                  44.03,
                  44.18,
                  44.22,
                  44.57,
                  43.42,
                  42.66,
                  43.13].reverse(),
              rsi = MathUtil.RSI(instruments, 14);
           assert.equal(Math.round(rsi[0]*100)/100, 37.71);
           assert.equal(Math.round(rsi[1]*100)/100, 32.87);
           assert.equal(Math.round(rsi[2]*100)/100, 37.21);
       });
    });

    describe('average', function(){
       it('should yield expected results', function(){
           var instruments = [86.16,
                   89.09,
                   88.78,
                   90.32,
                   89.07,
                   91.15,
                   89.44,
                   89.18,
                   86.93,
                   87.68,
                   86.96,
                   89.43,
                   89.32,
                   88.72,
                   87.45,
                   87.26,
                   89.50,
                   87.90,
                   89.13,
                   90.70,
                   92.90,
                   92.98,
                   91.80,
                   92.66,
                   92.68,
                   92.30,
                   92.77,
                   92.54,
                   92.95,
                   93.20,
                   91.07,
                   89.83,
                   89.74,
                   90.40,
                   90.74,
                   88.02,
                   88.09,
                   88.84,
                   90.78,
                   90.54,
                   91.39,
                   90.65].reverse(),
               arr = instruments.slice(0,20),
               avg = MathUtil.average(arr);
           assert.equal(Math.round(avg.deviation * 100)/100, 1.55);
       });
    });
    describe('STOCHRSI', function(){
       it('should yield expected results', function(){
          var instruments = [
              54.09,
              59.90,
              58.20,
              59.76,
              52.35,
              52.82,
              56.94,
              57.47,
              55.26,
              57.51,
              54.80,
              51.47,
              56.16,
              58.34,
              56.02,
              60.22,
              56.75,
              57.38,
              50.23,
              57.06,
              61.51,
              63.69,
              66.22,
              69.16,
              70.73,
              67.79,
              68.82,
              62.38,
              67.59,
              67.59
              ].reverse(),
              stochrsi = MathUtil.STOCHRSI(instruments,14);
           assert.equal(71.1924916245241, stochrsi[0]);
           assert.equal(73.4735209177603, stochrsi[1]);
           assert.equal(40.46074791866111, stochrsi[2]);
       });
    });

    describe('SMA',function(){
       it('should yield expected results', function(){
           var instruments = [86.16,
                   89.09,
                   88.78,
                   90.32,
                   89.07,
                   91.15,
                   89.44,
                   89.18,
                   86.93,
                   87.68,
                   86.96,
                   89.43,
                   89.32,
                   88.72,
                   87.45,
                   87.26,
                   89.50,
                   87.90,
                   89.13,
                   90.70,
                   92.90,
                   92.98,
                   91.80,
                   92.66,
                   92.68,
                   92.30,
                   92.77,
                   92.54,
                   92.95,
                   93.20,
                   91.07,
                   89.83,
                   89.74,
                   90.40,
                   90.74,
                   88.02,
                   88.09,
                   88.84,
                   90.78,
                   90.54,
                   91.39,
                   90.65].reverse(),
               sma = MathUtil.SMA(instruments,20);
           assert.equal(Math.round(sma[0] * 100) / 100,91.05);
       });
    });

    describe('BBANDS', function(){
       it('should yield expected results', function(){
          var instruments = [86.16,
              89.09,
              88.78,
              90.32,
              89.07,
              91.15,
              89.44,
              89.18,
              86.93,
              87.68,
              86.96,
              89.43,
              89.32,
              88.72,
              87.45,
              87.26,
              89.50,
              87.90,
              89.13,
              90.70,
              92.90,
              92.98,
              91.80,
              92.66,
              92.68,
              92.30,
              92.77,
              92.54,
              92.95,
              93.20,
              91.07,
              89.83,
              89.74,
              90.40,
              90.74,
              88.02,
              88.09,
              88.84,
              90.78,
              90.54,
              91.39,
              90.65].reverse(),
              bbands = MathUtil.BBANDS(instruments,20);
           assert.equal(Math.round(bbands.middleband[0] * 100) / 100, 91.05);
           assert.equal(Math.round(bbands.lowband[0] * 100) / 100, 87.95);
           assert.equal(Math.round(bbands.highband[0] * 100) / 100,94.15);
       });
    });
     describe('PERCPRICEOSC', function(){
        it('should yield expected results', function(){
           var instruments = [86.16,
               89.09,
               88.78,
               90.32,
               89.07,
               91.15,
               89.44,
               89.18,
               86.93,
               87.68,
               86.96,
               89.43,
               89.32,
               88.72,
               87.45,
               87.26,
               89.50,
               87.90,
               89.13,
               90.70,
               92.90,
               92.98,
               91.80,
               92.66,
               92.68,
               92.30,
               92.77,
               92.54,
               92.95,
               93.20,
               91.07,
               89.83,
               89.74,
               90.40,
               90.74,
               88.02,
               88.09,
               88.84,
               90.78,
               90.54,
               91.39,
               90.65].reverse(),
               ppriceosc = MathUtil.PERCPRICEOSC(instruments,12,26,9);
            assert.equal(Math.round(ppriceosc.ppo[0] * 100)/100, 0.22);
            assert.equal(Math.round(ppriceosc.signal[0] * 100)/100, 0.41);
            assert.equal(Math.round(ppriceosc.histogram[0] * 100)/100 ,-0.19);
        });
      });
      describe('WILLR', function(){
         it('should yield expected results', function(){
            var highs = [
                127.01,
                127.62,
                126.59,
                127.35,
                128.17,
                128.43,
                127.37,
                126.42,
                126.90,
                126.85,
                125.65,
                125.72,
                127.16,
                127.72,
                127.69,
                128.22].reverse(),
                lows = [
                125.36,
                126.16,
                124.93,
                126.09,
                126.82,
                126.48,
                126.03,
                124.83,
                126.39,
                125.72,
                124.56,
                124.57,
                125.07,
                126.86,
                126.63,
                126.80].reverse(),
                close = [
                127.29,
                127.18,
                128.01].reverse(),
                willr = MathUtil.WILLR(highs,lows,close,14);
             assert.equal(willr.length, 3);
             assert.equal(Math.round(willr[0]*100)/100, -10.85);
             assert.equal(Math.round(willr[1]*100)/100, -32.3);
             assert.equal(Math.round(willr[2]*100)/100, -29.46);

         });
       });
       describe('TRUERANGE', function(){
          it('should yield expected results', function(){
             var highs = [
                  48.70,
                  48.72,
                  48.90,
                  48.87,
                  48.82,
                  49.05,
                  49.20,
                  49.35,
                  49.92,
                  50.19,
                  50.12,
                  49.66,
                  49.88,
                  50.19].reverse(),
                 lows = [
                  47.79,
                  48.14,
                  48.39,
                  48.37,
                  48.24,
                  48.64,
                  48.94,
                  48.86,
                  49.50,
                  49.87,
                  49.20,
                  48.90,
                  49.43,
                  49.73].reverse(),
                 close = [
                  48.16,
                  48.61,
                  48.75,
                  48.63,
                  48.74,
                  49.03,
                  49.07,
                  49.32,
                  49.91,
                  50.13,
                  49.53,
                  49.50,
                  49.75,
                  50.03].reverse(),
                truerange = MathUtil.TRUERANGE(highs,lows,close);
              assert.equal(Math.round(truerange[0]*100)/100, 0.46);
              assert.equal(Math.round(truerange[1]*100)/100, 0.45);
              assert.equal(Math.round(truerange[2]*100)/100, 0.76);

          });
        });
});
