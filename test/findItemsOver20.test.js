"use strict"
let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");
describe('The findItemsOver20 function', function(regNum,loc){

    it('should show ItemsOver20 ', function(){
      var item = [{"name":"pears","qty":37},{"name":"bananas","qty":27},
                  {"name":"apple","qty":16},{"name":"orange","qty":19}]
         assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}],findItemsOver20(item));
        });
        it('should findItemsOver30 ', function(){
          var item = [{"name":"pears","qty":37},{"name":"bananas","qty":40},
                      {"name":"apple","qty":16},{"name":"orange","qty":19}]
                      assert.deepEqual([{"name":"pears","qty":37},
                      {"name":"bananas","qty":40}],findItemsOver20(item));
            });
});
