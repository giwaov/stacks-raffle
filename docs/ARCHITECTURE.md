# Architecture

## Overview

Decentralized raffle contract using VRF for randomness.

## Data Structures
- `raffles`: Map of raffle ID to details
- `entries`: Map of (raffle-id, entry-index) to principal
- `entry-counts`: Map of raffle ID to count

## Raffle Lifecycle
1. Create raffle with ticket price and end block
2. Users buy tickets
3. After end block, trigger drawing
4. Winner selected using VRF
5. Prize pool transferred to winner
