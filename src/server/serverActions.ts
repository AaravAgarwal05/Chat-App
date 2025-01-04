"use server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3Bucket from "../aws/s3Bucket";
import connectDB from "../db/connectDB";
import User from "../models/user";
import bcrypt from "bcryptjs";

interface SignedURLResponse {
  status: number;
  message: string;
  url: string;
}

export const getSignedURL = async (fileName: string): Promise<SignedURLResponse> => {
  const putCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: fileName,
  });

  const signedUrl = await getSignedUrl(s3Bucket, putCommand, { expiresIn: 60 });
  return {
    status: 200,
    message: "Signed URL generated successfully",
    url: signedUrl,
  };
};

interface CreateUserResponse {
  status: number;
  message: string;
}

export const createUser = async (
  name: string,
  username: string,
  email: string,
  password: string
): Promise<CreateUserResponse> => {
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
    console.error("Failed to create user", error);
    throw error;
  }
};

interface UpdateUserImageURLResponse {
  status: number;
  message: string;
}

export const updateUserImageURL = async (
  email: string,
  fileName: string
): Promise<UpdateUserImageURLResponse> => {
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

