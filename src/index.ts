



import * as web3 from "@solana/web3.js";
import dotenv from "dotenv";
dotenv.config();



const world = 'world';
console.log(`Hello ${world}! `);


// KEYPAIR_PRIVATE_KEY should be in the format of a [] with lots of numbers that were generated from your keypair using solana cli
const secret = JSON.parse(process.env.KEYPAIR_PRIVATE_KEY ?? "") as number[];
const secretKey = Uint8Array.from(secret)
const keypairFromSecretKey = web3.Keypair.fromSecretKey(secretKey)

const programID = new web3.PublicKey(process.env.PROGRAM_ID ?? "");


