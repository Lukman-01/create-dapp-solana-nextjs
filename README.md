# Solana Multi-Send Tool

This repository contains a decentralized application (dApp) built on the Solana blockchain, enabling users to send multiple tokens or NFTs to various recipients efficiently. It supports sending via public addresses, .sol domain names, and Twitter handles.

## Features

- **Multiple Token Sends**: Send one type of token to many addresses with a single transaction.
- **Domain and Twitter Handle Support**: Integration with the Solana Name Service allows sending to .sol domains and Twitter usernames.
- **CSV Uploads**: Upload a CSV file to process bulk transactions at once.
- **Emergency Send**: Quickly transfer all assets to another wallet in emergencies.

## Installation

To get started with this project, clone the repository and install the dependencies.

```bash
git clone https://github.com/Lukman-01/create-dapp-solana-nextjs.git
cd create-dapp-solana-nextjs
npm install
```

## Usage

To run the project locally:

```bash
npm run dev
```

Navigate to `http://localhost:3000` in your web browser to access the application.

## Configuration

The application requires connection to a Solana wallet and network. These are configured in the `_app.tsx` file where you can set the default network and wallet providers.


 