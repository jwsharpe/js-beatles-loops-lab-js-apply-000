// add solution here
function theBeatlesPlay(members, instruments){
  var beatleLoop = [];
  for(var i = 0; i < 4; i++){
    beatleLoop.push(members[i] + " plays " + instruments[i])
  }
  return beatleLoop;
}

function johnLennonFacts(facts){
  var i = 0;
  var factsList = [];
  while(i<facts.length){
    factsList.push(facts[i]+"!!!")
    i++;
  }
  return factsList
  
}

function iLoveTheBeatles(size){
  var message = [];
  if(size >= 15){return message.push("I love the Beatles!")}
  for(var i = size; i < 15; i++){
    message.push("I love the Beatles!")
  }
  return message;
}