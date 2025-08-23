import crypto from "crypto";
import { Token } from "../models/token.model";
const TOKEN_BYTES = 32;

export const createOneTimeToken = async ({ userId, type, ttlMinutes }) => {
  const raw = crypto.randomBytes(TOKEN_BYTES).toString("hex");
  const tokenHash = crypto.createHash("sha256").update(raw).digest("hex");
  const expiresAt = new Date(Date.now() + ttlMinutes * 60 * 1000);
  await Token.create({ userId, tokenHash, type, expiresAt });
  return raw;
};

export const consumeOneTimeToken = async (raw, type) => {
  const tokenHash = crypto.createHash("sha256").update(raw).digest("hex"); // raw is the token we are receiving from frontend that is stored in the database during registration 
  const token = await Token.findOne({
    tokenHash,
    type,
    expiresAt: { $gt: new Date() }, //Find only those tokens whose expiresAt is greater than now
    used: false,
  });
  if(!token) return null;

  token.used = true;
  await token.save();

  return token;
};


export const deleteUserTokens = async (userId, type)=>{
  await Token.deleteMany({userId,type});
}