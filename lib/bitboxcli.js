'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BITBOXCli = function () {
  function BITBOXCli(config) {
    _classCallCheck(this, BITBOXCli);

    this.BitboxHTTP = _axios2.default.create({
      baseURL: config.networks.development.protocol + '://' + config.networks.development.host + ':' + config.networks.development.port + '/'
    });
  }

  _createClass(BITBOXCli, [{
    key: 'addmultisigaddress',
    value: function addmultisigaddress(required, keys, account) {
      // Adds a P2SH multisig address to the wallet.

      // Parameter #1—the number of signatures required
      // The minimum (m) number of signatures required to spend this m-of-n multisig script

      // Parameter #2—the full public keys, or addresses for known public keys
      // An array of strings with each string being a public key or address
      // or
      // A public key against which signatures will be checked. Alternatively, this may be a P2PKH address belonging to the wallet—the corresponding public key will be substituted.
      // There must be at least as many keys as specified by the Required parameter, and there may be more keys

      // Parameter #3—the account name
      // The account name in which the address should be stored. Default is the default account, “” (an empty string)

      var request = this.BitboxHTTP.get('addmultisigaddress', {
        params: {
          required: required,
          keys: keys
        }
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'addnode',
    value: function addnode(node, command) {
      // Attempts to add or remove a node from the addnode list, or to try a connection to a node once.

      // Parameter #1—hostname/IP address and port of node to add or remove
      // The node to add as a string in the form of <IP address>:<port>. The IP address may be a hostname resolvable through DNS, an IPv4 address, an IPv4-as-IPv6 address, or an IPv6 address

      // Parameter #2—whether to add or remove the node, or to try only once to connect

      // What to do with the IP address above. Options are:
      // • add to add a node to the addnode list. Up to 8 nodes can be added additional to the default 8 nodes. Not limited by -maxconnections
      // • remove to remove a node from the list. If currently connected, this will disconnect immediately
      // • onetry to immediately attempt connection to the node even if the outgoing connection slots are full; this will only attempt the connection once

      // Result—null plus error on failed remove
      // Always JSON null whether the node was added, removed, tried-and-connected, or tried-and-not-connected.
      // The JSON-RPC error field will be set only if you try removing a node that is not on the addnodes list

      var request = this.BitboxHTTP.get('addnode', {
        params: {
          node: node,
          command: command
        }
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'backupwallet',
    value: function backupwallet(destination) {
      // The backupwallet RPC safely copies wallet.dat to the specified file, which can be a directory or a path with filename.

      // Parameter #1—destination directory or filename
      // A filename or directory name. If a filename, it will be created or overwritten.
      // If a directory name, the file wallet.dat will be created or overwritten within that directory

      // Result—null or error
      // Always null whether success or failure. The JSON-RPC error and message fields will be set if a failure occurred

      var request = this.BitboxHTTP.get('backupWallet', {
        params: {
          destination: destination
        }
      }).then(function (response) {
        var fs = require('fs');

        fs.appendFile("wallet.txt", response.data, function (err) {
          if (err) throw err;
        });
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'clearbanned',
    value: function clearbanned() {
      //The clearbanned RPC clears list of banned nodes.

      // Parameters: none

      // Result—null on success
      // JSON null when the list was cleared

      var request = this.BitboxHTTP.get('clearbanned').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'createmultisig',
    value: function createmultisig(required, address) {
      // The createmultisig RPC creates a P2SH multi-signature address.

      // Parameter #1—the number of signatures required
      // The minimum (m) number of signatures required to spend this m-of-n multisig script

      // Parameter #2—the full public keys, or addresses for known public keys

      // An array of strings with each string being a public key or address
      // or
      // A public key against which signatures will be checked. If wallet support is enabled, this may be a P2PKH address belonging to the wallet—the corresponding public key will be substituted.
      // There must be at least as many keys as specified by the Required parameter, and there may be more keys

      // Result—P2SH address and hex-encoded redeem script

      var request = this.BitboxHTTP.get('createmultisig', {
        params: {
          required: required,
          address: address
        }
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'createrawtransaction',
    value: function createrawtransaction() {

      var request = this.BitboxHTTP.get('createrawtransaction').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'decoderawtransaction',
    value: function decoderawtransaction(rawHex) {
      // decodes a serialized transaction hex string into a JSON object describing the transaction.

      // Parameter #1—serialized transaction in hex

      // Result—the decoded transaction
      var request = this.BitboxHTTP.get('decoderawtransaction', {
        params: {
          rawHex: rawHex
        }
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'decodescript',
    value: function decodescript(redeemScript) {
      // decodes a hex-encoded P2SH redeem script.

      // Parameter #1—a hex-encoded redeem script

      // Result—the decoded script

      var request = this.BitboxHTTP.get('decodescript', {
        params: {
          redeemScript: redeemScript
        }
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'disconnectnode',
    value: function disconnectnode(address) {
      // immediately disconnects from a specified node.

      // Parameter #1—hostname/IP address and port of node to disconnect

      // Result—null on success or error on failed disconnect

      var request = this.BitboxHTTP.get('disconnectnode', {
        params: {
          address: address
        }
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'dumpprivkey',
    value: function dumpprivkey(address) {
      // returns the wallet-import-format (WIP) private key corresponding to an address. (But does not remove it from the wallet.)

      // Parameter #1—the address corresponding to the private key to get

      // Result—the private key

      var request = this.BitboxHTTP.get('dumpprivkey', {
        params: {
          address: address
        }
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'dumpwallet',
    value: function dumpwallet() {
      // creates or overwrites a file with all wallet keys in a human-readable format.

      // Parameter #1—a filename

      // Result—null or error

      var request = this.BitboxHTTP.get('dumpwallet').then(function (response) {
        var fs = require('fs');

        fs.appendFile("wallet.txt", response.data, function (err) {
          if (err) throw err;
        });
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'encryptwallet',
    value: function encryptwallet(passphrase) {
      // encrypts the wallet with a passphrase. This is only to enable encryption for the first time. After encryption is enabled, you will need to enter the passphrase to use private keys.
      // if using this RPC on the command line, remember that your shell probably saves your command lines (including the value of the passphrase parameter). In addition, there is no RPC to completely disable encryption. If you want to return to an unencrypted wallet, you must create a new wallet and restore your data from a backup made with the dumpwallet RPC.

      // Parameter #1—a passphrase

      // Result—a notice (with program shutdown)

      var request = this.BitboxHTTP.get('encryptwallet', {
        params: {
          passphrase: passphrase
        }
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'estimatefee',
    value: function estimatefee(blocks) {

      var request = this.BitboxHTTP.get('estimatefee', {
        params: {
          blocks: blocks
        }
      }).then(function (response) {
        console.log('called', response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'estimatepriority',
    value: function estimatepriority(blocks) {

      var request = this.BitboxHTTP.get('estimatepriority', {
        params: {
          blocks: blocks
        }
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'fundrawtransaction',
    value: function fundrawtransaction(hexstring, options) {

      var request = this.BitboxHTTP.get('fundrawtransaction', {
        params: _defineProperty({
          hexstring: hexstring,
          options: options }, 'options', options)
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'generate',
    value: function generate(blocks, maxtries) {

      var request = this.BitboxHTTP.get('generate', {
        params: _defineProperty({
          blocks: blocks,
          maxtries: maxtries }, 'maxtries', maxtries)
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'generatetoaddress',
    value: function generatetoaddress(blocks, address, maxtries) {

      var request = this.BitboxHTTP.get('generatetoaddress', {
        params: _defineProperty({
          blocks: blocks,
          address: address,
          maxtries: maxtries }, 'maxtries', maxtries)
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getaccountaddress',
    value: function getaccountaddress(account) {
      // eturns the current Bitcoin address for receiving payments to this account. If the account doesn’t exist, it creates both the account and a new address for receiving payment. Once a payment has been received to an address, future calls to this RPC for the same account will return a different address.

      // Parameter #1—an account name

      // Result—a bitcoin address

      var request = this.BitboxHTTP.get('getaccountaddress', {
        params: _defineProperty({
          account: account }, 'account', account)
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getaccount',
    value: function getaccount(address) {
      // returns the name of the account associated with the given address.

      // Parameter #1—a Bitcoin address

      // Result—an account name

      var request = this.BitboxHTTP.get('getaccount', {
        params: _defineProperty({
          address: address }, 'address', address)
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getaddednodeinfo',
    value: function getaddednodeinfo(details, node) {
      var _params6;

      // returns information about the given added node, or all added nodes (except onetry nodes). Only nodes which have been manually added using the addnode RPC will have their information displayed.

      // Parameter #1—whether to display connection information

      // Parameter #2—what node to display information about

      // Result—a list of added nodes

      var request = this.BitboxHTTP.get('getaddednodeinfo', {
        params: (_params6 = {
          details: details }, _defineProperty(_params6, 'details', details), _defineProperty(_params6, 'node', node), _params6)
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getaddressesbyaccount',
    value: function getaddressesbyaccount(account) {
      // returns a list of every address assigned to a particular account.

      // Parameter #1—the account name

      // Result—a list of addresses

      var request = this.BitboxHTTP.get('getaddressesbyaccount', {
        params: _defineProperty({
          account: account }, 'account', account)
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getbalance',
    value: function getbalance(account) {
      // gets the balance in decimal bitcoins across all accounts or for a particular account.

      // Parameter #1—an account name

      // Parameter #2—the minimum number of confirmations

      // Parameter #3—whether to include watch-only addresses

      // Result—the balance in bitcoins

      var request = this.BitboxHTTP.get('getbalance', {
        params: _defineProperty({
          account: account }, 'account', account)
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getbestblockhash',
    value: function getbestblockhash() {
      // returns the header hash of the most recent block on the best block chain.

      // Parameters: none

      // Result—hash of the tip from the best block chain

      var request = this.BitboxHTTP.get('getbestblockhash').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getblock',
    value: function getblock() {

      var request = this.BitboxHTTP.get('getblock').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getblockchaininfo',
    value: function getblockchaininfo() {

      var request = this.BitboxHTTP.get('getblockchaininfo').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getblockcount',
    value: function getblockcount() {

      var request = this.BitboxHTTP.get('getblockcount').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getblockhash',
    value: function getblockhash() {

      var request = this.BitboxHTTP.get('getblockhash').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getblockheader',
    value: function getblockheader() {

      var request = this.BitboxHTTP.get('getblockheader').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getblocktemplate',
    value: function getblocktemplate() {

      var request = this.BitboxHTTP.get('getblocktemplate').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getchaintips',
    value: function getchaintips() {

      var request = this.BitboxHTTP.get('getchaintips').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getconnectioncount',
    value: function getconnectioncount() {

      var request = this.BitboxHTTP.get('getconnectioncount').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getdifficulty',
    value: function getdifficulty() {

      var request = this.BitboxHTTP.get('getdifficulty').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getgenerate',
    value: function getgenerate() {

      var request = this.BitboxHTTP.get('getgenerate').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'gethashespersec',
    value: function gethashespersec() {

      var request = this.BitboxHTTP.get('gethashespersec').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getinfo',
    value: function getinfo() {

      var request = this.BitboxHTTP.get('getinfo').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getmemoryinfo',
    value: function getmemoryinfo() {

      var request = this.BitboxHTTP.get('getmemoryinfo').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getmempoolancestors',
    value: function getmempoolancestors() {

      var request = this.BitboxHTTP.get('getmempoolancestors').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getmempooldescendants',
    value: function getmempooldescendants() {

      var request = this.BitboxHTTP.get('getmempooldescendants').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getmempoolentry',
    value: function getmempoolentry() {

      var request = this.BitboxHTTP.get('getmempoolentry').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getmempoolinfo',
    value: function getmempoolinfo() {

      var request = this.BitboxHTTP.get('getmempoolinfo').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getmininginfo',
    value: function getmininginfo() {

      var request = this.BitboxHTTP.get('getmininginfo').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getnettotals',
    value: function getnettotals() {

      var request = this.BitboxHTTP.get('getnettotals').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getnetworkhashps',
    value: function getnetworkhashps() {

      var request = this.BitboxHTTP.get('getnetworkhashps').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getnetworkinfo',
    value: function getnetworkinfo() {

      var request = this.BitboxHTTP.get('getnetworkinfo').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getnewaddress',
    value: function getnewaddress() {

      var request = this.BitboxHTTP.get('getnewaddress').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getpeerinfo',
    value: function getpeerinfo() {

      var request = this.BitboxHTTP.get('getpeerinfo').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getrawchangeaddress',
    value: function getrawchangeaddress() {

      var request = this.BitboxHTTP.get('getrawchangeaddress').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getrawmempool',
    value: function getrawmempool() {

      var request = this.BitboxHTTP.get('getrawmempool').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getrawtransaction',
    value: function getrawtransaction() {

      var request = this.BitboxHTTP.get('getrawtransaction').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getreceivedbyaccount',
    value: function getreceivedbyaccount() {

      var request = this.BitboxHTTP.get('getreceivedbyaccount').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getreceivedbyaddress',
    value: function getreceivedbyaddress() {

      var request = this.BitboxHTTP.get('getreceivedbyaddress').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'gettransaction',
    value: function gettransaction() {

      var request = this.BitboxHTTP.get('gettransaction').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'gettxout',
    value: function gettxout() {

      var request = this.BitboxHTTP.get('gettxout').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'gettxoutproof',
    value: function gettxoutproof() {

      var request = this.BitboxHTTP.get('gettxoutproof').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'gettxoutsetinfo',
    value: function gettxoutsetinfo() {

      var request = this.BitboxHTTP.get('gettxoutsetinfo').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getunconfirmedbalance',
    value: function getunconfirmedbalance() {

      var request = this.BitboxHTTP.get('getunconfirmedbalance').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getwalletinfo',
    value: function getwalletinfo() {

      var request = this.BitboxHTTP.get('getwalletinfo').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'getwork',
    value: function getwork() {

      var request = this.BitboxHTTP.get('getwork').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'help',
    value: function help() {

      var request = this.BitboxHTTP.get('help').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'importaddress',
    value: function importaddress() {

      var request = this.BitboxHTTP.get('importaddress').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'importmulti',
    value: function importmulti() {

      var request = this.BitboxHTTP.get('importmulti').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'importprivkey',
    value: function importprivkey() {

      var request = this.BitboxHTTP.get('importprivkey').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'importprunedfunds',
    value: function importprunedfunds() {

      var request = this.BitboxHTTP.get('importprunedfunds').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'importwallet',
    value: function importwallet() {

      var request = this.BitboxHTTP.get('importwallet').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'keypoolrefill',
    value: function keypoolrefill() {

      var request = this.BitboxHTTP.get('keypoolrefill').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'listaccounts',
    value: function listaccounts() {

      var request = this.BitboxHTTP.get('listaccounts').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'listaddressgroupings',
    value: function listaddressgroupings() {

      var request = this.BitboxHTTP.get('listaddressgroupings').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'listbanned',
    value: function listbanned() {

      var request = this.BitboxHTTP.get('listbanned').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'listlockunspent',
    value: function listlockunspent() {

      var request = this.BitboxHTTP.get('listlockunspent').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'listreceivedbyaccount',
    value: function listreceivedbyaccount() {

      var request = this.BitboxHTTP.get('listreceivedbyaccount').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'listreceivedbyaddress',
    value: function listreceivedbyaddress() {

      var request = this.BitboxHTTP.get('listreceivedbyaddress').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'listsinceblock',
    value: function listsinceblock() {

      var request = this.BitboxHTTP.get('listsinceblock').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'listtransactions',
    value: function listtransactions() {

      var request = this.BitboxHTTP.get('listtransactions').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'listunspent',
    value: function listunspent() {

      var request = this.BitboxHTTP.get('listunspent').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'lockunspent',
    value: function lockunspent() {

      var request = this.BitboxHTTP.get('lockunspent').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'move',
    value: function move() {

      var request = this.BitboxHTTP.get('move').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'pingRpc',
    value: function pingRpc() {

      var request = this.BitboxHTTP.get('pingRpc').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'preciousblock',
    value: function preciousblock() {

      var request = this.BitboxHTTP.get('preciousblock').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'prioritisetransaction',
    value: function prioritisetransaction() {

      var request = this.BitboxHTTP.get('prioritisetransaction').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'pruneblockchain',
    value: function pruneblockchain() {

      var request = this.BitboxHTTP.get('pruneblockchain').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'removeprunedfunds',
    value: function removeprunedfunds() {

      var request = this.BitboxHTTP.get('removeprunedfunds').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'sendfrom',
    value: function sendfrom() {

      var request = this.BitboxHTTP.get('sendfrom').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'sendmany',
    value: function sendmany() {

      var request = this.BitboxHTTP.get('sendmany').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'sendrawtransaction',
    value: function sendrawtransaction() {

      var request = this.BitboxHTTP.get('sendrawtransaction').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'sendtoaddress',
    value: function sendtoaddress() {

      var request = this.BitboxHTTP.get('sendtoaddress').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'setaccount',
    value: function setaccount() {

      var request = this.BitboxHTTP.get('setaccount').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'setban',
    value: function setban() {

      var request = this.BitboxHTTP.get('setban').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'setgenerate',
    value: function setgenerate() {

      var request = this.BitboxHTTP.get('setgenerate').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'setnetworkactive',
    value: function setnetworkactive() {

      var request = this.BitboxHTTP.get('setnetworkactive').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'settxfee',
    value: function settxfee() {

      var request = this.BitboxHTTP.get('settxfee').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'signmessage',
    value: function signmessage(address, message) {
      var _params9;

      // Sign a message with the private key of an address

      // Arguments:
      // 1. "address"         (string, required) The bitcoin address to use for the private key.
      // 2. "message"         (string, required) The message to create a signature of.

      // Result:
      // "signature"          (string) The signature of the message encoded in base 64

      var request = this.BitboxHTTP.get('signmessage', {
        params: (_params9 = {
          address: address }, _defineProperty(_params9, 'address', address), _defineProperty(_params9, 'message', message), _params9)
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'signmessagewithprivkey',
    value: function signmessagewithprivkey(privkey, message) {
      var _params10;

      // Sign a message with the private key of an address

      // Arguments:
      // 1. "privkey"         (string, required) The private key to sign the message with.
      // 2. "message"         (string, required) The message to create a signature of.

      // Result:
      // "signature"          (string) The signature of the message encoded in base 64

      var request = this.BitboxHTTP.get('signmessagewithprivkey', {
        params: (_params10 = {
          privkey: privkey }, _defineProperty(_params10, 'privkey', privkey), _defineProperty(_params10, 'message', message), _params10)
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'signrawtransaction',
    value: function signrawtransaction() {

      var request = this.BitboxHTTP.get('signrawtransaction').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'stop',
    value: function stop() {

      var request = this.BitboxHTTP.get('stop').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'submitblock',
    value: function submitblock() {

      var request = this.BitboxHTTP.get('submitblock').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'validateaddress',
    value: function validateaddress() {

      var request = this.BitboxHTTP.get('validateaddress').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'verifychain',
    value: function verifychain() {

      var request = this.BitboxHTTP.get('verifychain').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'verifymessage',
    value: function verifymessage(address, signature, message) {
      var _params11;

      // Verify a signed message

      // Arguments:
      // 1. "address"         (string, required) The bitcoin address to use for the signature.
      // 2. "signature"       (string, required) The signature provided by the signer in base 64 encoding (see signmessage).
      // 3. "message"         (string, required) The message that was signed.

      // Result:
      // true|false   (boolean) If the signature is verified or not.

      var request = this.BitboxHTTP.get('verifymessage', {
        params: (_params11 = {
          address: address }, _defineProperty(_params11, 'address', address), _defineProperty(_params11, 'signature', signature), _defineProperty(_params11, 'message', message), _params11)
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'verifytxoutproof',
    value: function verifytxoutproof() {

      var request = this.BitboxHTTP.get('verifytxoutproof').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'walletlock',
    value: function walletlock() {

      var request = this.BitboxHTTP.get('walletlock').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'walletpassphrase',
    value: function walletpassphrase() {

      var request = this.BitboxHTTP.get('walletpassphrase').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }, {
    key: 'walletpassphrasechange',
    value: function walletpassphrasechange() {

      var request = this.BitboxHTTP.get('walletpassphrasechange').then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        // console.log('error', error);
      });
      return request;
    }
  }]);

  return BITBOXCli;
}();

module.exports = BITBOXCli;