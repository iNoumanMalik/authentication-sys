import { User } from "../models/users.model";
import { signAuthToken } from "../utils/jwt";
import { sendMail } from "../utils/email";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ error: "All fields are required" });

  const exists = await User.findOne({ email });
  if (exists)
    return res
      .status(409)
      .json({ error: "User with this email already exists" });

  const user = new User({ name, email });
  await user.setPassword(password);
  await user.save();

  // Email verification link (valid 60 min)
  const raw = createOneTimeToken(user._id, "verify", 60);
  const verifyUrl = `${process.env.CLIENT_URL}/verify-email/${raw}`;

  sendMail({
    to: email,
    subject: "Verification Required",
    html: `<p>Hello ${user.name},</p>
    <p>Click to verify your account:</p>
    <p><a href="${verifyUrl}">${verifyUrl}</a></p>`,
  });
  res.status(201).json({ message: "Registered. Check email to verify." });
};

export const verifyEmail = async (req, res) => {
  const { token } = req.query;
  if (!token) return res.status(400).json({ error: "Token missing" });

  const consumed = await createOneTimeToken(token, "verify");
  if (!consumed)
    return res.status(400).json({ error: "Invalid or Expired token!" });
  await User.findByIdAndUpdate(consumed.user._id, { $set: { isVerified } });
  res.json({ message: "Email Verified" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "All fields are required" });

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: "Invalid Credentials" });

  const ok = await user.comparePassword(password);
  if (!ok) return res.status(401).json({ error: "Invalid Credentials" });

  const jwt = signAuthToken(user);
};
