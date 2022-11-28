export const textForMemProject = {
  overview: [
    'Create a platform where people could share treasured memories in their lives with anyone out there throughout the globe.',
    'Each user can register a whole new account to enable full functionality coming with the application, or just simply log in via Google Oauth 2.0 to enjoy the full access.',
    "With the account, you can not only create, delete, and edit your posts but also give a thumbs up to other users' posts.",
    'Incorporation of jsonwebtoken and bcryptjs libraries allows for authorization and authentication.',
  ],

  techStack: {
    lan: ['Javascript', 'HTML', 'CSS'],
    fe: ['React (hooks)', 'React Router', 'React Redux', 'Material UI'],
    be: ['Node.js', 'Express', 'Mongoose', 'MongoDB', 'REST API'],
    others: ['Axios', 'jsonwebtoken', 'bcryptjs', 'Netlify', 'Heroku'],
  },

  workingsOutline: [
    'Account registration data will be sent to the backend via the HTTP POST request method with the REST API routes.',
    'Upon receiving, the password will be hashed using the bcryptjs library and then, along with other account info, stored in the non-relational database MongoDB.',
    'The server will proceed to generate a token for the given user through the jsonwebtoken library to allow for later-on verification, afterward sending the package, in JSON form, that includes the account data and the token to the client-side.',
    'On the frontend, the processed user info, and the token will be stored in the DOM storage (local storage mechanism), enabling a persistent logged-in state.',
    'CRUD operations (Create, Read, Update, Delete) on the given posts are therefore allowed for the user via the REST API routes, with a token included in the HTTP request header of authorization.',
    'The server will decode the included token and go on to validation and expiration check (an hour, in this case), leading up to the permission on the intended operations.',
    "The updated data from the backend will be handled in the Redux's state container and mainly with destructuring assignment, after which, dependent upon different scenarios, respective React components are allowed to make use of the handled data.",
  ],
};

export const textForEngProject = {
  overview: [
    'Solve the inconvenience of encountering unknown words upon reading an English passage and having to look up elsewhere.',
    'Read multiple professional-written passages fetched via New York Times API with a juxtaposed dictionary to facilitate English learning.',
    'Responsive design fitting for all mobile devices.',
  ],
  techStack: {
    lan: ['Javascript', 'HTML', 'CSS'],
    fe: ['React (hooks)', 'React Redux', 'Material UI'],
    be: ['Node.js', 'Express'],
    others: ['Axios', 'Netlify', 'Heroku'],
  },
  workingsOutline: [
    'The input search keyword will serve as the value to the property name of searchTerm, which corresponds to the URL specification for the New York Times API.',
    'The fetched passages, along with the images coming with the texts, will be shown in the main display panel.',
    "Every word within the given passages is clickable. Once it's clicked, another HTTP GET request will be sent with the intended word serving as the URL parameter for the Free Dictionary API.",
    "All the fetched data through NTY and Free Dictionary APIs are stored in the Redux's state container, after which, dependent upon different scenarios, respective React components are allowed to make use of the handled data.",
  ],
};
