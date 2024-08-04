# Forced Transfer Subgraph

This Subgraph sources events from the ForcedTransfer Singleton contract.

## Example Query

<img width="1782" alt="Screenshot 2024-08-04 at 4 20 21 PM" src="https://github.com/user-attachments/assets/a51face4-66cd-4d25-988d-88ccd9e68bee">


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
