console.log("Pre-device ready");
document.addEventListener('deviceready', function () {
    // window.geofence is now available
    console.log("Device ready");
    window.geofence.initialize().then(function () {
        console.log("Successful initialization");
        window.geofence.addOrUpdate({
            id:             "examplegeofenceid", //A unique identifier of geofence
            latitude:       -37.000, //Geo latitude of geofence
            longitude:      144.000, //Geo longitude of geofence
            radius:         250, //Radius of geofence in meters
            transitionType: 3, //Type of transition 1 - Enter, 2 - Exit, 3 - Both
            notification: {         //Notification object
                title:          "Hello world", //Title of notification
                text:           "Hello world", //Text of notification
                openAppOnClick: true,//is main app activity should be opened after clicking on notification
            }
        }).then(function () {
            console.log('Geofence successfully added');
        }, function (reason) {
            console.log('Adding geofence failed', reason);
        });
        window.geofence.onNotificationClicked = function (notificationData) {
            console.log('App opened from Geo Notification!', notificationData);
        };
    }, function (error) {
        console.log("Error", error);
    });
}, false);
