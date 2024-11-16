"use server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3Bucket from "../aws/s3Bucket";
import connectDB from "../db/connectDB";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const getSignedURL = async (fileName) => {
  const putCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
  });

  const signedUrl = await getSignedUrl(s3Bucket, putCommand, { expiresIn: 60 });
  return {
    status: 200,
    message: "Signed URL generated successfully",
    url: signedUrl,
  };
};

export const createUser = async (name, username, email, password) => {
  try {
    await connectDB();

    const userByEmail = await User.findOne({ email: email });

    if (userByEmail) {
      return {
        status: 400,
        message: "Account already exists with same email 😥",
      };
    }

    const userByUsername = await User.findOne({ username: username });

    if (userByUsername) {
      return {
        status: 400,
        message: "Account already exists with same username 😥",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name,
      username: username,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    return { status: 200, message: "Account Created Successfully 🥳" };
  } catch (error) {
    console.error("Failed to create user", err);
    throw err;
  }
};

export const updateUserImageURL = async (email, fileName) => {
  try {
    await connectDB();

    const userByEmail = await User.findOne({
      email: email,
    });

    if (!userByEmail) {
      return {
        status: 400,
        message: "Account doesn't exist with this email 😥",
      };
    }

    userByEmail.profilePictureURL = `${process.env.AWS_BUCKET_URL}/${fileName}`;

    await userByEmail.save();
    return { status: 200, message: "Image URL updated successfully 🥳" };
  } catch (err) {
    console.error("Failed to update image URL", err);
    throw err;
  }
};

export const getSession = async () => {
  const token = cookies().get("token");
  if (!token) {
    console.error("Token not found in cookies");
    return {
      status: 400,
      message: "Token not found in cookies 😥",
    };
  }

  const value = token.value;

  const user = jwt.verify(value, process.env.JWT_SECRET_KEY);
  return {
    status: 200,
    message: "Session retrieved successfully 🥳",
    user: user,
  };
};

export const signIn = async (email, password) => {
  try {
    await connectDB();

    const userByEmail = await User.findOne({ email: email });

    if (!userByEmail) {
      return {
        status: 400,
        message: "Account doesn't exist with this email 😥",
      };
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      userByEmail.password
    );

    if (!isPasswordCorrect) {
      return {
        status: 400,
        message: "Invalid Password 😥",
      };
    }

    const tokenData = {
      id: userByEmail._id,
      username: userByEmail.username,
      email: userByEmail.email,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    return { status: 200, message: "Sign In Successful 🥳", token: token };
  } catch (err) {
    console.error("Failed to find user", err);
    throw err;
  }
};

export const signOut = async () => {
  cookies().delete("token");
  return {
    status: 200,
    message: "Sign Out Successful 🥳",
  };
};
