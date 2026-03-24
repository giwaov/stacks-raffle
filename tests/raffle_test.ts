import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";

describe("raffle", () => {
  it("should create raffle", () => {
    const result = simnet.callPublicFn("raffle", "create-raffle", [Cl.uint(1000000), Cl.uint(100)], deployer);
    expect(result.result).toBeOk(Cl.uint(1));
  });

  it("should allow ticket purchase", () => {
    simnet.callPublicFn("raffle", "create-raffle", [Cl.uint(1000000), Cl.uint(100)], deployer);
    const result = simnet.callPublicFn("raffle", "buy-ticket", [Cl.uint(1)], wallet1);
    expect(result.result).toBeOk(Cl.bool(true));
  });
});
