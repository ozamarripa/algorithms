describe('Multiples of 3 and 5', function() {

  describe("Multiples of 3", () => {
           
     it('should handle when is multiple of 3', function() {
        Test.assertEquals(isMultiple3(3), true);
      });

      it('should handle when is not multiple of 3', function() {
        Test.assertEquals(isMultiple3(4), false);
      });
  })

  describe("Multiples of 5", () => {

     it('should handle when is multiple of 5', function() {
        Test.assertEquals(isMultiple5(10), true);
      });

      it('should handle when is not multiple of 5', function() {
        Test.assertEquals(isMultiple5(4), false);
      });
  })

  describe("Coerce natural number", () => {

     it('should handle negative numbers', function() {
        Test.assertEquals(coerceNaturalNumber(-1), 0);
      });

      it('should handle not numbers', function() {
        Test.assertEquals(coerceNaturalNumber("v"), 0);
      });
  })

  describe("Multiples of 3 and 5", () => {

      it('should handle basics', function() {
        Test.assertEquals(solution(10), 23);
      });

    it('should return 0 with negatives', function() {
        Test.assertEquals(solution(-3), 0);
      });

    it('should return 0 if a number is not given', function() {
        Test.assertEquals(solution("f"), 0);
      });
  })


});
