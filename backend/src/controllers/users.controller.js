import { User } from "../models/users.model.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const uploadDir = path.join(_dirname, "..", "uploads");

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  },
});

export const upload = multer({ storage });

export const me = async (req, res) => {
  const user = await User.findById(req.user.uid).select("-passwordHash");
  return res.json({ user });
};

export const updateProfile = async (req, res) => {
  const { name } = req.body;
  const update = {};
  if (name) update.name = name;
  if (req.file) update.avatarUrl = `uploads/${req.file.filename}`;
  const user = await User.findOneAndUpdate({ _id: req.user.uid }, update, {
    new: true,
  }).select("-passwordHash");
  res.json({ user });
};

export const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const user = await User.findById(req.user.uid);
  const ok = await user.comparePassword(currentPassword || ""); // '' are used for fallback
  if (!ok)
    return res
      .status(400)
      .json({ error: "Your current password is incorrect!" });
  await user.setPassword(newPassword);
  await user.save();
  res.status(201).json({ message: "Password has been updated!" });
};
