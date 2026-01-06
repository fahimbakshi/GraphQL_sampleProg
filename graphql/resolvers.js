
// -------------------------/THIS CODE IS  GOOD FOR UNDERTANGING ////----------------

// import prisma from "../config/prisma.js";

// const resolvers = {
//   Query: {
//     users: async () => {
//       return prisma.user.findMany({
//         include: { posts: true }
//       });
//     },

//     posts: async () => {
//       return prisma.post.findMany({
//         include: { user: true }
//       });
//     }
//   },

//   Mutation: {
//     createUser: async (_, args) => {
//       return prisma.user.create({
//         data: {
//           name: args.name,
//           email: args.email
//         }
//       });
//     },

//     createPost: async (_, args) => {
//       return prisma.post.create({
//         data: {
//           title: args.title,
//           userId: args.userId
//         }
//       });
//     },
    
//   }
// };

// export default resolvers;


// ------------------------------//PRODUCTION READY CODE UDED IN INDUSTRYS----------------------
//   USED ARROW  function HEAR 
import prisma from "../config/prisma.js";

const resolvers = {
  Query: {
    users: () => prisma.user.findMany({ include: { posts: true } }),
    posts: () => prisma.post.findMany({ include: { user: true } })
  },

  Mutation: {
    createUser: (_, args) =>
      prisma.user.create({ data: args }),

    createPost: (_, args) =>
      prisma.post.create({ data: args }),

    deleteUser: async (_, { id }) => {
      // Delete posts first (important!)
      await prisma.post.deleteMany({
        where: { userId: id }
      });

      await prisma.user.delete({
        where: { id }
      });

      return true;
    },

    deletePost: async (_, { id }) => {
      await prisma.post.delete({
        where: { id }
      });

      return true;
    }
  }
};

export default resolvers;
