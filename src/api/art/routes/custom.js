module.exports = {
  routes: [
    {
      method: "GET",
      path: "/custom",
      handler: "art.customAction",
      config: {
        auth: false,
      },
    },
  ],
};
