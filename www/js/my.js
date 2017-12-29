document.addEventListener("deviceready", onDeviceReady, false);
var data = null;
/* <!--Device Ready Function--> */
function onDeviceReady() {
    alert("Device Ready");

    /* <!--Initializing Push Notification--> */
    var push = PushNotification.init({

        /* <!--Setting attributes for Android, IOS and Windows--> */
        android: {
            senderID: "123456789876"
        },
        ios: {
            alert: "true",
            badge: "true",
            sound: "true"
        },
        windows: {}
    });

    /* <!--This will alert registration ID which is returned by the GCM--> */
    push.on('registration', function (data) {
        console.log('data', JSON.stringify(data));
        data = data;
        alert(data.registrationId);
        $("#regid").val(data.registrationId);
    });
    push.on('notification', function (data) {
    });
    push.on('error', function (e) {
    });
}

/* <!--Fetching the values of registration ID, name and email from the input boxes--> */
$(document).ready(function () {
    $("#submit").click(function () {
        var regid = $("#regid").val();
        var name = $("#name").val();
        var email = $("#email").val();
        alert(regid);
        /* <!--Passing those values to the insertregid.php file--> */
        /* $.ajax({
        url: "http://www.aorank.com/tutorial/push/insertregid.php",
        type: "POST",
        dataType:'text',
        data: {regid: regid,name: name,email:email},
        success: function(data){
        alert(data);
        }
        });
        });
        }); */

        $.ajax({
            url: "http://localhost:5000/push/v1/addDevice",
            type: "POST",
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify({
                deviceId : regid || "12345",
                model : data || "Aman",
            }),
            success: function (data) {
                alert(data);
            }
        });
    });
});
//contentType: "application/json