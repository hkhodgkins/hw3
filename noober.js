// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // Create well-named variables for each data point in the Object:
    // name ("last, first")
    let passengerName=`${ride.passengerDetails.last}, ${ride.passengerDetails.first}`
    // phone number
    let passengerPhoneNumber=`${ride.passengerDetails.phoneNumber}`
    // pickup location ("address, city, state, zip")
    let pickupLocation=`${ride.pickupLocation.address}, ${ride.pickupLocation.city}, ${ride.pickupLocation.state}, ${ride.pickupLocation.zip}`
    // dropoff location
    let dropoffLocation=`${ride.dropoffLocation.address}, ${ride.dropoffLocation.city}, ${ride.dropoffLocation.state}, ${ride.dropoffLocation.zip}`
    // number of passengers in their party (store in memory)
    let numberOfPassengers=ride.numberOfPassengers
    // whether or not they would like luxury "Noober Purple" car (store in memory)
    let purpleRequested=ride.purpleRequested

  // Use conditional logic to display level of service requested. Luxury "Noober Purple" always supercedes larger "Noober XL" requests.
    // if "Noober Purple" is requested, display "Noober Purple"
    // then, check if there are more than 3 passengers in the ride request. If so, display Noober XL
    // otherwise, if neither "Noober Purple" nor "Noober XL" is requested, display "Noober X"
    let serviceLevel
    if (purpleRequested==true) {serviceLevel=`Noober Purple`}
    else if (numberOfPassengers>3) {serviceLevel=`Noober XL`}
    else {serviceLevel=`Noober X`}
  
  // Present in human-readable format
  console.log(`${serviceLevel} Passenger Details: ${passengerName} - ${passengerPhoneNumber}. Pickup: ${pickupLocation}. Dropoff: ${dropoffLocation}. Total Passengers: ${numberOfPassengers}`)
  
  // 🔥 YOUR CODE ENDS HERE 🔥
})
