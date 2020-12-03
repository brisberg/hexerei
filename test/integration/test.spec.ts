/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import ScreepsIntegrationTest from "@brisberg/screeps-integration-test";

describe("Screeps Integration Test", () => {
  let server: ScreepsIntegrationTest;

  beforeEach(() => {
    server = new ScreepsIntegrationTest({
      bots: ["./dist/main.js"]
    });
  });

  afterEach(async () => {
    console.log("test afterEach");
    await server.stop();
  });

  it("should print run the server ", async () => {
    await server.start();

    await server.tick(2);
  });
});
