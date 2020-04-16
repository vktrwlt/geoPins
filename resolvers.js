const user = {
  _id: "1",
  name: "victor",
  email: "victor@gmail.com",
  picture: "https://example.com",
};

module.exports = {
  Query: {
    me: () => user,
  },
};
