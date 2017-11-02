function bubbleSort(arr){
  
  if(!arr) return [];
  
  var greatest;
  
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      if(arr[j] > arr[j+1]){
        greatest = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = greatest;
      }
    }
  }
  
  return arr;
}

function splitArray(arr){
  
  var firstHalf = [];
  var secondHalf = [];
  var index = Math.floor(arr.length / 2);
  
  for(var i = 0; i < index; i++){
    firstHalf.push(arr[i]);
  }
  
  for(var j = index; j < arr.length; j++){
    secondHalf.push(arr[j]);
    console.log(index)
  }
  
  return [firstHalf, secondHalf];
}


function merge(arr){
  
  var firstArray = arr[0];
  var secondArray = arr[1];
  var index1 = 0;
  var index2 = 0;
  var output = [];
  
  while(index1 < firstArray.length){
    while(index2 < secondArray.length){
      
      if(firstArray[index1] < secondArray[index2]){
        output.push(firstArray[index1]);
        index1++;
        
      } else {
        output.push(secondArray[index2]);
        index2++;
      }
    }
  }
  
  return output;
}



function mergeSort(arr){

  
}


