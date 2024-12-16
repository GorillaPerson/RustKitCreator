// buffer.js

// Create an ArrayBuffer of a specific size (e.g., 8 bytes)
const buffer = new ArrayBuffer(8);

// Create a typed array view on the buffer (e.g., a Uint8Array)
const uint8View = new Uint8Array(buffer);

// Modify the contents of the buffer via the typed array view
uint8View[0] = 42; // set the first byte
uint8View[1] = 255; // set the second byte

export { buffer, uint8View };
