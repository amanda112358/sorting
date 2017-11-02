describe('Bubble Sort', function(){
  var array = [3,4,1,8,2,5]
  
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts a non-empy array from least to greatest', function(){
    expect( bubbleSort(array).toEqual([1,2,3,4,8]));
  }
});


describe('Split Array function', function() {
  var evenArr = [3,4,1,8,2,5];
  var oddArr = [3,4,1,8,2];
  it('is able to split an array into two halves', function() {
    expect( splitArray(evenArr).toEqual([ [3,4,1], [8,2,5] ]) );
    expect( splitArray(oddArr).toEqual([ [3,4], [1,8,2] ]) );
  });
});


describe('Merge Sort', function(){
  var array1 = [ [1,3,4], [2,5,8] ];
  var array2 = [ [1,3,4,5], [2,5,8] ];
  var array3 = [ [1,3,4], [2,5,8,9] ];
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge(array1).toEqual([1,2,3,4,5,8]));
    expect( merge(array2).toEqual([1,2,3,4,5,5,8]));
    expect( merge(array3).toEqual([1,2,3,4,5,8,9]));
  });
});