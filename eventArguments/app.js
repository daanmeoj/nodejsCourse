const EventEmitter = require("events");
const emitter = new EventEmitter();
//register a listener
emitter.on("messageLogged", (arg) => console.log("listener called", arg));
//raise event
emitter.emit("messageLogged", { id: 1, url: "http://" });

emitter.on("LogginEvent", (arg) => console.log("listener called", arg));
//raise event
emitter.emit("LogginEvent", { data: "message" });
