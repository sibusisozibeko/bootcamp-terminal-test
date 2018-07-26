"use strict"
let assert = require("assert");
let isFromBellville = require("../isFromBellville");
describe('The isFromBellville function', function(sbu){

    it('should show true if the registration number isFromBellville', function(){
         assert.equal(isFromBellville('CY  45 78dff'), true);


        });

        it('Must show that the registration number from Bellville does not begin with CJ 9978', function(){
          assert.equal(isFromBellville('CJ 9978'), false);
      });
});
