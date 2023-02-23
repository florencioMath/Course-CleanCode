// Parâmetros e Desestruturação

// used destructuring and passed parameters as objects.
function updateUserRoute({ body, params }) {
  updateUserController({ body, params });
}

function updateUserController({ body, params }) {
  const { id, name, email, password } = body;
  userRepository.update({
    body: {
      id,
      name,
      email,
      password,
    },
    params,
  });
}

const userRepository = {
  update: ({ body, params }) => {},
};
