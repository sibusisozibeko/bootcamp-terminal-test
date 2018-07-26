"use strict"
let assert = require("assert");
let countRegNumber = require("../countRegNumber");
describe('The countRegNumber function', function(regCount){

    it('count how many registration numbers on my list expecting three', function(){
         assert.deepEqual(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));

        });

        it('must show undefined if theres no parameter ', function(){
          assert.deepEqual(1, countRegNumber('CA 182736'));
      });
});
