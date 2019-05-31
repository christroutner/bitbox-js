# BITBOX JS

[![Greenkeeper badge](https://badges.greenkeeper.io/christroutner/bitbox-js.svg)](https://greenkeeper.io/)

This is a pure JavaScript fork of
the [BITBOX SDK](https://github.com/Bitcoin-com/bitbox-sdk) maintained
by Bitcoin.com. It was forked 5/9/19. This fork removes bable, typescript, and
flow as dependencies. The code base is pure JavaScript, tested against
[node.js v10 LTS](https://nodejs.org/en/).
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

Whereas BITBOX SDK has a big focus on integrating the latest features in the
the ecosystem, this BITBOX JS fork will remain relatively stable, integrating
new features at a much slower pace.

Major features of this fork:
- Pure, standard, uncompiled JavaScript
- [Semantic Release](https://github.com/semantic-release/semantic-release) for
continuous delivery using semantic versioning.
- [Greenkeeper](https://greenkeeper.io/) automatic dependency management for
automatically maintaining the latest, most secure dependencies.
- [IPFS uploads](https://ipfs.io) of all files and dependencies, to backup
dependencies in case they are ever inaccessible from GitHub or npm.

## Original Documentation:

Extensive documentation available at:

- [General docs](https://developer.bitcoin.com)
- [BITBOX Introduction](https://developer.bitcoin.com/bitbox)
- [BITBOX API Reference](https://developer.bitcoin.com/bitbox/docs/getting-started)
- [BITBOX Examples](./examples)

## IPFS Releases

I will periodically publish IPFS releases of this repository, including all
dependencies in the `node_modules` folder. This ensures working copies of this
repository can be retrieved in case there is any drift in dependency files, or
if dependencies are pulled from npm or GitHub.

- Initial fork on 5/9/2019:
  - without node_modules folder: QmQFHfbBQdEHfhtiRLbXtX1NcgnfL45hZb7TbQimTXAuzG (4 MB)
  - with node_modules folder: QmXq9Ds6Qdkg9xbRhcF8pay9KabA6QN2y7bx3wvSqiXifk (107 MB)

- v7.0.0 - refactored to pure JavaScript:
  - without node_modules folder: QmNjFsiTZRMAUa9rZpXqZqivv9JLaNicwLSPHjyLB7PVDk (1 MB)
  - with node_modules folder: Qma9ScApwBtuL7dpdSk7jpBFTxbqRdiR921WjyP75SU7bT (100 MB)
