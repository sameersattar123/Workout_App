import User from "../models/User.model.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
  }
};
export const signupController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
 
    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
