const { AuthenticationError } = require('apollo-server-express');
const { User, Planting } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('thoughts')
            .populate('friends');
          return userData;
        }
    }
  },
  
    Mutation: {
      addUser: async (parent, args) => {
        console.log('args:', args)
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
        const token = signToken(user);
        return { token, user };
      },
      addPlanting: async (parent, args) => {
          const individualPlanting = await Planting.create({ ...args,});
          console.log('individualPlanting:', individualPlanting)
          return individualPlanting
      },
    }
  };
  module.exports = resolvers;
  


  // addPlanting: async (parent, args, context) => {
  //   if (context.user) {
  //     const singlePlanting = await Thought.create({ ...args, username: context.user.username });

  //     await User.findByIdAndUpdate(
  //       { _id: context.user._id },
  //       { $push: { allPlantings: singlePlanting._id } },
  //       { new: true }
  //     );

  //     return thought;
  //   }

  //   throw new AuthenticationError('You need to be logged in!');
  // }