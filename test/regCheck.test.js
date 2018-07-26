"use strict"
let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function(regCar, regloc){

    it('check if the registration number ends with CY instead of GP', function(){
         assert.equal(regCheck('DV 23 NB GP', 'CY'), false);


        });

        it('must show false because theres nothing inside my string', function(){
          assert.equal(regCheck(''),false);
      });
});
