# Usage Guide

## Creating a Raffle
```clarity
(contract-call? .raffle create-raffle u1000000 u14400)
```

## Buying Tickets
```clarity
(contract-call? .raffle buy-ticket u1)
```

## Drawing Winner
```clarity
(contract-call? .raffle draw-winner u1)
```

## Checking Results
```clarity
(contract-call? .raffle get-winner u1)
```
