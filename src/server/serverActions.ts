"use server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3Bucket from "../aws/s3Bucket";
import connectDB from "../db/connectDB";
import User from "../models/user";

interface fetchUserResponse {
  status: number;
  message: string;
  user: {
    name: string;
    username: string;
    email: string;
    profilePictureURL: string;
  } | null;
}

export const fetchUser = async (email: string): Promise<fetchUserResponse> => {
  try {
    await connectDB();

    const userByEmail = await User.findOne({
      email: email,
    });

    if (!userByEmail) {
      return {
        status: 400,
        message: "Account doesn't exist with this email 😥",
        user: null,
      };
    }

    return {
      status: 200,
      message: "User fetched successfully 🥳",
      user: {
        name: userByEmail.name,
        username: userByEmail.username,
        email: userByEmail.email,
        profilePictureURL: userByEmail.profilePictureURL,
      },
    };
  } catch (error) {
    console.error("Failed to fetch user", error);
    throw error;
  }
};

interface SignedURLResponse {
  status: number;
  message: string;
  url: string;
}

export const getSignedURL = async (
  fileName: string
): Promise<SignedURLResponse> => {
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
  fullName: {
    firstName: string;
    lastName: string;
  },
  username: string,
  email: string,
  password: string
): Promise<CreateUserResponse> => {
  try {
    await connectDB();

    const userByEmail = await User.findOne({ email: email });
    console.log(userByEmail);
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

    const newUser = new User({
      fullName: fullName,
      username: username,
      email: email,
      password: password,
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
