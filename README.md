# BITBOX SDK
This is a pure JavaScript fork of
the [BITBOX SDK](https://github.com/Bitcoin-com/bitbox-sdk) maintained
by Bitcoin.com. It was forked 5/9/19. This fork of the repository will remove
babel and typescript as dependencies, making the code base pure JavaScript.
This removes the time-lag in compiling the library and also means that error messages
will indicate the actual lines of code (helpful), rather than lines in the
compiled output (less helpful).

I created this fork because I think many JavaScript developers are unwilling to
learn TypeScript, or simply hate compiled back-end apps like I do. This
repository is for
these marginalized developers. This fork will be maintained by
me ([Chris Troutner](https://memo.cash/profile/1NpYaazpQ26KrMTeFf66zVKy6x9KzcLgTA)) as
a hobby. There will most likely be a big lag when it comes to porting new
features in BITBOX to this repository.

## Original Documentation:

Extensive documentation available at:

- [General docs](https://developer.bitcoin.com)
- [BITBOX Introduction](https://developer.bitcoin.com/bitbox)
- [BITBOX API Reference](https://developer.bitcoin.com/bitbox/docs/getting-started)
- [BITBOX Examples](./examples)

## IPFS Releases

I will periodically publish IPFS releases of this repository, including all
dependencies in the `node_modules` folder. This ensures working copies of this
repository can be retrieved in case there is any drift in dependency files.

- Initial release on 5/9/2019
  - without node_modules folder: [QmQFHfbBQdEHfhtiRLbXtX1NcgnfL45hZb7TbQimTXAuzG](ipfs://QmQFHfbBQdEHfhtiRLbXtX1NcgnfL45hZb7TbQimTXAuzG) (4 MB)
  - with node_modules folder: [QmXq9Ds6Qdkg9xbRhcF8pay9KabA6QN2y7bx3wvSqiXifk](ipfs://QmXq9Ds6Qdkg9xbRhcF8pay9KabA6QN2y7bx3wvSqiXifk) (107 MB)
