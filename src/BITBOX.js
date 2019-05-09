// local deps
const BitcoinCash = require("./BitcoinCash")
const Crypto = require("./Crypto")
const Util = require("./Util")
const Block = require("./Block")
const Blockchain = require("./Blockchain")
const Control = require("./Control")
const Generating = require("./Generating")
const Mining = require("./Mining")
const RawTransactions = require("./RawTransactions")
const Mnemonic = require("./Mnemonic")
const Address = require("./Address")
const HDNode = require("./HDNode")
const Transaction = require("./Transaction")
const TransactionBuilder = require("./TransactionBuilder")
const ECPair = require("./ECPair")
const Script = require("./Script")
const Price = require("./Price")
const Socket = require("./Socket")
const Wallet = require("./Wallet")
const Schnorr = require("./Schnorr")

class BITBOX {
  constructor(config) {
    if (config && config.restURL && config.restURL !== "")
      this.restURL = config.restURL
    else this.restURL = "https://rest.bitcoin.com/v2/"

    this.Address = new Address(this.restURL)
    this.BitcoinCash = new BitcoinCash(this.Address)
    this.Block = new Block(this.restURL)
    this.Blockchain = new Blockchain(this.restURL)
    this.Control = new Control(this.restURL)
    this.Crypto = Crypto
    this.ECPair = ECPair
    this.ECPair.setAddress(this.Address)
    this.Generating = new Generating(this.restURL)
    this.HDNode = new HDNode(this.Address)
    this.Mining = new Mining(this.restURL)
    this.Mnemonic = new Mnemonic(this.Address)
    this.Price = new Price()
    this.RawTransactions = new RawTransactions(this.restURL)
    this.Script = new Script()
    this.Transaction = new Transaction(this.restURL)
    this.TransactionBuilder = TransactionBuilder
    this.TransactionBuilder.setAddress(this.Address)
    this.Util = new Util(this.restURL)
    this.Socket = Socket
    this.Wallet = Wallet
    this.Schnorr = new Schnorr(this.restURL)
  }
}

module.exports = BITBOX
