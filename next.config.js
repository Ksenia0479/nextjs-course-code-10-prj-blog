const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "kseniyachervonaya",
        mongodb_password: "spEOOYew8Kw0QmAl",
        mongodb_clustername: "cluster0",
        mongodb_database: "blog-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "kseniyachervonaya",
      mongodb_password: "spEOOYew8Kw0QmAl",
      mongodb_clustername: "cluster0",
      mongodb_database: "blog",
    },
  };
};
