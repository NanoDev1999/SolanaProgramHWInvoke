import * as web3 from "@solana/web3.js";
import dotenv from "dotenv";
dotenv.config();

const welcomeMsg = "Welcome to Solana! Activating a Program on the Solana Blockchain.";
console.log(`${welcomeMsg}!`);


// KEYPAIR_PRIVATE_KEY should be in the format of a [] with lots of numbers that were generated from your keypair using solana cli
const secret = JSON.parse(process.env.KEYPAIR_PRIVATE_KEY ?? "") as number[];
const secretKey = Uint8Array.from(secret);
const keypairFromSecretKey = web3.Keypair.fromSecretKey(secretKey);

const programId = new web3.PublicKey(process.env.PROGRAM_ID ?? "");

const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

const transaction = new web3.Transaction();

const instruction = new web3.TransactionInstruction({keys: [], programId,});

transaction.add(instruction);

console.log(`Executing transaction with public key: ${process.env.KEYPAIR_PUBLIC_KEY} on program id: ${programId}`);

const transactionSignature = await web3.sendAndConfirmTransaction(connection, transaction, [keypairFromSecretKey]);

console.log(`Transaction: https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`);


