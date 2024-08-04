# Forced Transfer Subgraph

This Subgraph sources events from the ForcedTransfer Singleton contract.

## Example Query

Here we have an example query:

```graphql
{
  forcedTransferActions {
    id
    sender
    amount
  }
}
```
