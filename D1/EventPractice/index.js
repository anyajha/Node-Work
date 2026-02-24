const CreateEvent=require("events");

const myevent= new CreateEvent();

myevent.on("Alarm Ringing", ()=>
{
    console.log("Wake-Up");
});

myevent.on("Alarm Not Ringing", ()=>
{
    console.log("You can sleep");
});

myevent.emit("Alarm is Rining");
