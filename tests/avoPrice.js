describe('bestdeal()', function(){

    it('it should return the correct price', function(){
        assert.equal('3.00,3.50,3.33,2.90', bestdeal('1 for R3, 2 for R7, 3 for R10, 5 for R14.50'));
    });

});

//
// 3.00
//  3.50
//  3.33
//  2.90
