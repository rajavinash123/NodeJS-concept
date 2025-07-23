const { EventEmitter } = require("stream");


// ---------------------------------------------
// 6️⃣ Custom EventEmitter Class (user-defined)
class CustomEmitter extends EventEmitter {
  sendMessage(msg) {
    console.log("Sending message:", msg);
    this.emit('message', msg); // Emit custom event
  }
}

// 7️⃣ Instance of CustomEmitter
const custom = new CustomEmitter();

// 8️⃣ Listener for custom 'message' event
custom.on('message', (msg) => {
  console.log("📩 Received message:", msg);
});

// 9️⃣ Trigger the custom emitter method
custom.sendMessage("This is a custom event!"); 