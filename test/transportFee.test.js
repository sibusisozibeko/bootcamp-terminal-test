"use strict"
let assert = require("assert");
let transportFee = require("../transportFee");
describe('The transportFee function', function(){

    it('show the fee in the morning if its R20', function(){
         assert.deepEqual('R20', transportFee('morning'));

        });

        it('show the fee in the afternoon if its R10', function(){
          assert.deepEqual('R10', transportFee('afternoon'));
      });

      it('show that there is no fee in nightshift ', function(){
        assert.deepEqual('free', transportFee('nightshift'));

    });
});
