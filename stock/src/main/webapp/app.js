var stompClient = null;
var sum=0;
function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    var socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
            var message=JSON.parse(greeting.body).content;
            if(message.startsWith("buy:")){
                sum+=parseInt(message.substring(4));
            }else if(message.startsWith("sell:")){
                sum-=parseInt(message.substring(5));
            }
            if(sum>0){
                showGreeting(message+"    | need "+sum+" buying");
            }else{
                showGreeting(message+"    | remain "+(-sum)+" selling");
            }
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName(name) {
    stompClient.send("/app/hello", {}, JSON.stringify({'name':name+ $("#name").val()}));
}

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#buy" ).click(function() { sendName("buy:"); });
    $( "#sell" ).click(function() { sendName("sell:"); });
});

