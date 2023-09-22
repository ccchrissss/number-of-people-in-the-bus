var number = function(busStops){
  
  let peopleCount = 0

  busStops.forEach( i => {peopleCount += i[0]; peopleCount -= i[1]})

  return peopleCount
}

console.log(number([[1,0], [5,0], [3,4]]))


// parameters: array of integer pairs
// return: number of people on the bus after the last stop
// e.g. number([[1,0], [5,0], [3,4]])
// results in 5

// declare a variable peopleCount and set it to 0
// loop through the busStops array
// add e[0] to peopleCount
// subtract e[1] from peopleCount
// end loop
// return peopleCount