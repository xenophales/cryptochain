const { GENESIS_DATA } = require("./config");

// THIS FILE DOESNT USE JEST FOR THE TESTS, JUST console.log() for output

class Block {
 constructor({timestamp, lastHash, hash, data}) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;


 }   
}

const block1 = new Block({timestamp:'01/01/01', lastHash:'foo-lastHash', hash:'foo-hash', data:'foo-data'});
const genblock = new Block(GENESIS_DATA);

console.log('block1', block1);
console.log('genblock', genblock);