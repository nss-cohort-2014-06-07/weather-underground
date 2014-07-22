/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Weather = require('../../app/models/weather');

describe('Weather', function(){
  describe('.high', function(){
    it('should return the high temp for today', function(done){
      Weather.high(37203, function(temp){
        expect(temp).to.be.ok;
        expect(temp.length).to.be.at.least(2);
        done();
      });
    });
  });

  describe('.low', function(){
    it('should return the low temp for today', function(done){
      Weather.low(10011, function(temp){
        expect(temp).to.be.ok;
        expect(temp.length).to.be.at.least(2);
        done();
      });
    });
  });

  describe('.avgHigh', function(){
    it('should return the avg high temp over 10 days', function(done){
      Weather.avgHigh(37203, function(temp){
        expect(temp).to.be.within(-50, 150);
        done();
      });
    });
  });

  describe('.avgLow', function(){
    it('should return the avg low temp over 10 days', function(done){
      Weather.avgLow(37203, function(temp){
        expect(temp).to.be.within(-50, 150);
        done();
      });
    });
  });

  describe('.highs', function(){
    it('should return the high temps over 10 days', function(done){
      Weather.highs(37203, function(temps){
        expect(temps).to.have.length(10);
        expect(temps[0]).to.be.within(-50, 150);
        done();
      });
    });
  });

  describe('.lows', function(){
    it('should return the low temps over 10 days', function(done){
      Weather.lows(37203, function(temps){
        expect(temps).to.have.length(10);
        expect(temps[0]).to.be.within(-50, 150);
        done();
      });
    });
  });

  describe('.deltas', function(){
    it('should return the delta temps over 10 days', function(done){
      Weather.deltas(37203, function(temps){
        expect(temps).to.have.length(10);
        expect(temps[0]).to.be.within(-50, 150);
        done();
      });
    });
  });
});

