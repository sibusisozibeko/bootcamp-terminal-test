"use strict"
let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', function(regNum,loc){

    it('should count all registration numbers starting with CL', function(){
         assert.deepEqual(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));


        });

        it('If the Town and registration numbers is not specified should return 0', function(){
          assert.deepEqual(0, countAllFromTown('CA 124,CY 567,CL 345, CJ 456,CL 34'));
      });
});
