const assert = require("assert")
const BITBOXSDK = require("../../src/BITBOX")
const BITBOX = new BITBOXSDK()

describe("#price", () => {
  describe("#current", () => {
    describe("#single currency", () => {
      it("should get current price for single currency", async () => {
        const result = await BITBOX.Price.current("usd")
        assert.notEqual(0, result)
      })
    })
  })
})
