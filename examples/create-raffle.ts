import { makeContractCall, broadcastTransaction, uintCV, AnchorMode } from "@stacks/transactions";
import { StacksTestnet } from "@stacks/network";

async function createRaffle(ticketPrice: number, duration: number) {
  const tx = await makeContractCall({
    contractAddress: "ST...",
    contractName: "raffle",
    functionName: "create-raffle",
    functionArgs: [uintCV(ticketPrice), uintCV(duration)],
    senderKey: process.env.STACKS_PRIVATE_KEY,
    network: new StacksTestnet(),
    anchorMode: AnchorMode.Any,
  });
  const result = await broadcastTransaction(tx, new StacksTestnet());
  console.log("Raffle TX:", result.txid);
}

createRaffle(1000000, 14400);
