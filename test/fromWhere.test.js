"use strict"
let assert = require("assert");
let fromWhere = require("../fromWhere");
describe('The fromWhere function', function(regnum){

    it('should check registration number if it starts with CY is from Bellville', function(){
         assert.deepEqual('Bellville', fromWhere('CY'));


        });
        it('should check registration number if it starts with CJ is from Paarl', function(){
             assert.deepEqual('Paarl', fromWhere('CJ'));


            });
            it('should check registration number if it starts with CA is from Cape Town', function(){
                 assert.deepEqual('Cape Town', fromWhere('CA'));

                });
        it('must be undefined if theres no parameter when expecting some other place', function(){
          assert.deepEqual('Some other place!', fromWhere(''));
      });

});
