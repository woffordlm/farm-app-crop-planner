const { AuthenticationError } = require("apollo-server-express");
const { User, Planting, CropReference } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log("context:", context.user);

      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("allPlantings");
        // .populate('friends');
        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    allCrops: async () => {
      return CropReference.find();
    },
    allPlantings: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Planting.find(params).sort({ createdAt: -1 });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      console.log("args:", args);
      const user = await User.create(args);
      const token = signToken(user);
      console.log("you are logged in ");
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      console.log("you made IIIIIIIITTTT");
      return { token, user };
    },
    addPlanting: async (parent, args) => {
      const individualPlanting = await Planting.create({
        ...args,
        username: context.user.username,
      });
      await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { allPlantings: individualPlanting._id } },
        { new: true }
      );
      return individualPlanting;
    },
  },
};
module.exports = resolvers;
