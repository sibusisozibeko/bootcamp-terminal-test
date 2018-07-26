"use strict"
let assert = require("assert");
let findItemsOver = require("../findItemsOver");
describe('The findItemsOver function', function(){

    it('should findItemsOver 30 ', function(){
    var threshold = 30;
      var items = [{"name":"apples","qty":40},{"name":"bananas","qty":60},
                  {"name":"apples","qty":15},{"name":"orange","qty":10}]
assert.deepEqual([{"name":"apples","qty":40},{"name":"bananas","qty":60}]
                 ,  findItemsOver(items, threshold));
              });

          it('should pass even if there is nothing expected inside my square brackets', function(){
            var threshold = 56;
          var value = [{"name":"apples","qty":49},
                      {"name":"bananas","qty":44},
                      {"name":"apples","qty":47},
                      {"name":"orange","qty":55}]
    assert.deepEqual([], findItemsOver(value, threshold));
            });
});
