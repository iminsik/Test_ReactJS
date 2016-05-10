var express = require('express');
var fetch = require('node-fetch');
var app = express();

var clearUnnecessary = function (data) {
    if(data["item"] !== undefined) {
        delete data["item"]["pos"];
        delete data["item"]["addresses"];
        delete data["item"]["phoneNumbers"];
        delete data["item"]["remarks"];
        delete data["item"]["genericSpecialRequests"];
        delete data["item"]["receivedFrom"];
        delete data["item"]["history"];
    }
};

var printNecessary = function (data) {
    if(data["item"] !== undefined) {
        var firstPassenger = data['item']['passengerReservation']['passengers']['passenger'][0];
        var firstSegment = data['item']['passengerReservation']['segments']['segment'][0]['item'];
        console.log("PNR: " + data['item']['bookingDetails']['recordLocator']);  
        console.log("Passenger Name: " +
            firstPassenger['lastName'] + '/' + firstPassenger['firstName']); 
        console.log("Segment Info:");
        console.log("Departure: " + firstSegment['departureAirport']); 
        console.log("Arrival: " + firstSegment['arrivalAirport']);
        console.log("AirlineCode: " + firstSegment['operatingAirlineCode']);
        console.log("FlightNumber: " + firstSegment['operatingFlightNumber']);
        console.log("ClassOfService: " + firstSegment['operatingClassOfService']);
        console.log("departureDateTime: " + firstSegment['departureDateTime'].split('T')[0]);
    }
};

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/Lookup/:pnr', function (req, res) {
    var PNRPattern = "{PNR}";
    var params = {
            method: 'GET',
            headers: new fetch.Headers({
                "Accept": "application/json",
                "Ocp-Apim-Subscription-Key": "e532ba0f19d343cabad746ef64599966",
                "Content-Type": "application/json",
                "Content-Length": "0"
            }),
            cache: 'default'
        };
    var GDSReservationServiceURI = "https://api.qa.alaskaair.net/gds/1/reservations/" + PNRPattern + "?asgds-appid=airport";
    var GDSResponse = fetch(GDSReservationServiceURI.replace(PNRPattern, req.params.pnr), params);
    
    var jsonPromise = GDSResponse
    .then(function(response) {
        return response.json();
    })
    .catch(function(err) {
        res.send("Your request for " + req.params.pnr + " has an error: " +  err);  
    });
    
    jsonPromise.then(function(data) {
        clearUnnecessary(data);
        printNecessary(data);
        res.send(data);
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});