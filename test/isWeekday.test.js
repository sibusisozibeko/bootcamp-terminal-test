"use strict"
let assert = require("assert");
let isWeekday = require("../isWeekday");
describe('The isWeekday function', function(sbu){

    it('must state that Saturday is not a week meaning its false', function(){
         assert.equal(isWeekday('Saturday'), false);


        });

        it('should be true that Monday isWeekday', function(){
          assert.equal(isWeekday('Monday'), true);
      });
});
