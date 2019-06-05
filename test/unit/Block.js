const assert = require("chai").assert
const BITBOXSDK = require("../../src/BITBOX")
const BITBOX = new BITBOXSDK()
const axios = require("axios")
const sinon = require("sinon")

const blockMock = require("./fixtures/block-mock")

describe("#Block", () => {
  describe("#detailsByHash", () => {
    let sandbox
    beforeEach(() => (sandbox = sinon.createSandbox()))
    afterEach(() => sandbox.restore())

    it(`should GET a single hash`, async () => {
      // Mock out data for unit test, to prevent live network call.
      const data = blockMock.details
      const resolved = new Promise(r => r({ data: data }))
      sandbox.stub(axios, "get").returns(resolved)

      const result = await BITBOX.Block.detailsByHash(
        "000000001c6aeec19265e9cc3ded8ba5ef5e63fae7747f30bf9c02c7bc8883f0"
      )
      //console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.deepEqual(blockMock.details, result)
    })

    it(`should POST an array of hashes`, async () => {
      const hashes = [
        "000000001c6aeec19265e9cc3ded8ba5ef5e63fae7747f30bf9c02c7bc8883f0",
        "000000000000000002160687d7f39b6232b5acbb2e2b44cd68e3c6b2debe9ea3"
      ]

      // Mock out data for unit test, to prevent live network call.
      const data = [blockMock.details, blockMock.details]
      const resolved = new Promise(r => r({ data: data }))
      sandbox.stub(axios, "post").returns(resolved)

      const result = await BITBOX.Block.detailsByHash(hashes)
      //console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.deepEqual(data, result)
    })

    it(`should pass error from server to user`, async () => {
      try {
        // Mock out data for unit test, to prevent live network call.
        sandbox
          .stub(axios, "get")
          .throws("error", "Input must be a string or array of strings.")

        const hash = 12345

        await BITBOX.Block.detailsByHash(hash)
        assert.equal(true, false, "Unexpected result!")
      } catch (err) {
        //console.log(`err: `, err)
        assert.include(
          err.message,
          `Input must be a string or array of strings.`
        )
      }
    })
  })

  describe("#detailsByHeight", () => {
    let sandbox
    beforeEach(() => (sandbox = sinon.createSandbox()))
    afterEach(() => sandbox.restore())

    it(`should GET a single height`, async () => {
      // Mock out data for unit test, to prevent live network call.
      const data = blockMock.details
      const resolved = new Promise(r => r({ data: data }))
      sandbox.stub(axios, "get").returns(resolved)

      const height = 500007

      const result = await BITBOX.Block.detailsByHeight(height)
      //console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.deepEqual(blockMock.details, result)
    })

    it(`should POST an array of heights`, async () => {
      const heights = [500007, 500008]

      // Mock out data for unit test, to prevent live network call.
      const data = [blockMock.details, blockMock.details]
      const resolved = new Promise(r => r({ data: data }))
      sandbox.stub(axios, "post").returns(resolved)

      const result = await BITBOX.Block.detailsByHeight(heights)
      //console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.deepEqual(data, result)
    })

    it(`should pass error from server to user`, async () => {
      try {
        // Mock out data for unit test, to prevent live network call.
        sandbox
          .stub(axios, "get")
          .throws("error", "Input must be a number or array of numbers.")

        const height = "abc123"

        await BITBOX.Block.detailsByHeight(height)
        assert.equal(true, false, "Unexpected result!")
      } catch (err) {
        //console.log(`err: `, err)
        assert.include(
          err.message,
          `Input must be a number or array of numbers.`
        )
      }
    })

    it("should get block details", async () => {
      const data = {
        hash:
          "000000001c6aeec19265e9cc3ded8ba5ef5e63fae7747f30bf9c02c7bc8883f0",
        size: 216,
        height: 507,
        version: 1,
        merkleroot:
          "a85fa3d831ab6b0305e7ff88d2d4941e25a810d4461635df51490653822071a8",
        tx: [
          "a85fa3d831ab6b0305e7ff88d2d4941e25a810d4461635df51490653822071a8"
        ],
        time: 1231973656,
        nonce: 330467862,
        bits: "1d00ffff",
        difficulty: 1,
        chainwork:
          "000000000000000000000000000000000000000000000000000001fc01fc01fc",
        confirmations: 528402,
        previousblockhash:
          "00000000a99525c043fd7e323414b60add43c254c44860094048f9c01e9a5fdd",
        nextblockhash:
          "000000000d550f4161f2702165fdd782ec72ff9c541f864ebb8256b662b7e51a",
        reward: 50,
        isMainChain: true,
        poolInfo: {}
      }
      const resolved = new Promise(r => r({ data: data }))
      sandbox.stub(axios, "get").returns(resolved)

      const result = await BITBOX.Block.detailsByHeight(500007)

      assert.deepEqual(result, data)
    })
  })
})
