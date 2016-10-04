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
});
