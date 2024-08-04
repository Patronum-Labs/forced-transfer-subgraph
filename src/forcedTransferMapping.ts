import { ForcedTransferAction } from "../generated/schema";
import { ForcedTransfer } from "../generated/ForcedTransfers/ForcedTransferABI";

export function handleForcedTransfer(event: ForcedTransfer): void {
  let id = event.params.sender.toHex();

  // Load or create a new ForcedTransferAction entity
  let senderForcedTransfers = ForcedTransferAction.load(id);

  if (!senderForcedTransfers) {
    // If the entity does not exist, create a new one with both id and sender fields
    senderForcedTransfers = new ForcedTransferAction(id);
    senderForcedTransfers.sender = event.params.sender.toHex();
    senderForcedTransfers.amount = event.params.amount;
  } else {
    // If the entity exists, update the amount
    senderForcedTransfers.amount = senderForcedTransfers.amount.plus(event.params.amount);
  }

  // Save the entity to the store
  senderForcedTransfers.save();
}
