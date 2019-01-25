let array = ['[5, 9]', '[1, 2, 6, 7]'];

function scaleBalancing(strArr) {
  let scale = strArr[0].slice(1, -1).split(', ');;
  let weights = strArr[1].slice(1, -1).split(', ');
  balance = false;
  let usedWeights = '';

  for (let i = 0; i < weights.length; i++) {
    let tempWeights = weights.slice(0);
    tempWeights.splice(i, 1);
    console.log('temp', tempWeights);
    console.log('weights', weights);
    if (parseInt(scale[0]) + parseInt(weights[i]) === parseInt(scale[1])) {
      usedWeights += weights[i];
      balance = true;
      break;
    } else if (parseInt(scale[0]) === parseInt(scale[1]) + parseInt(weights[i])) {
      usedWeights += weights[i];
      balance = true;
      break;
    } else {
      for (let j = 0; j < tempWeights.length; j++) {
        if (parseInt(scale[0]) + parseInt(weights[i]) + parseInt(tempWeights[j]) === parseInt(scale[1])) {
          usedWeights = weights[i] + ',' + tempWeights[j];
          balance = true;
          break;
        } else if (parseInt(scale[0]) + parseInt(weights[i]) === parseInt(scale[1]) + parseInt(tempWeights[j])) {
          usedWeights = weights[i] + ',' + tempWeights[j];
          balance = true;
          break;
        } else if (parseInt(scale[0]) === parseInt(scale[1]) + parseInt(tempWeights[j]) + parseInt(weights[i])) {
          usedWeights = weights[i] + ',' + tempWeights[j];
          balance = true;
          break;
        }
      }
    }
  }

  console.log(usedWeights);
  // function weigh(scaleArr, weightsArr){

  // }

}

scaleBalancing(array);