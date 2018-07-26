"use strict"
let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function(){

    it(' must count the years inbetween 1989 to 2018', function(){
         assert.equal(1989,yearsAgo(29));


        });

        it('It must show that the current year is 2018', function(){
          assert.equal(2018,yearsAgo(''));
      });
});
