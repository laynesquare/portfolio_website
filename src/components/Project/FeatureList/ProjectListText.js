export const textMemProject = {
  overview: [
    'Create a platform where people could share treasured memories in their lives with anyone out there throughout the globe.',
    'Each user can register a whole new account to enable full functionality coming with the application, or just simply log in via Google Oauth 2.0 to enjoy the full access.',
    `With the account, you can create, delete, edit your posts, and bookmark, comment on, or give a thumbs-up to other users' posts.`,
    `Each post delivers Youtube video recommendations based on respective content. You can venture around further if any posts pique your interest.`,
  ],

  techStack: {
    lan: ['Javascript', 'HTML', 'CSS'],
    fe: ['React (hooks)', 'React Router', 'React Redux', 'Material UI'],
    be: ['Node.js', 'Express', 'Mongoose', 'MongoDB', 'REST API'],
    others: ['Axios', 'Render', 'jsonwebtoken', 'bcryptjs'],
  },

  workingsOutline: [
    'Account registration data will be sent to the backend via the HTTP POST request method with the REST API routes.',
    'Upon receiving, the password will be hashed using the bcryptjs library and then, along with other account info, stored in the non-relational database MongoDB.',
    'The server will proceed to generate a token for the given user through the jsonwebtoken library to allow for later-on verification, sending the package afterward, in JSON form, that includes the account data and the token to the client side.',
    'On the frontend, the processed user info and the token will be stored in the DOM storage (local storage mechanism), enabling a persistent logged-in state.',
    'CRUD operations (Create, Read, Update, Delete) on the given posts are therefore allowed for the user via the REST API routes, with a token included in the HTTP request header of authorization.',
    'The server will decode the included token and go on to validation and expiration check (an hour, in this case), leading up to the permission on the intended operations.',
    "The updated data from the backend will be handled in the Redux's state container and mainly with destructuring assignment, after which, dependent upon different scenarios, respective React components are allowed to make use of the handled data.",
  ],
};

export const textEngProject = {
  overview: [
    'Solve the inconvenience of encountering unknown words upon reading an English passage and having to look up elsewhere.',
    'Read multiple professional-written passages fetched via New York Times API with a juxtaposed dictionary to facilitate English learning.',
    'Co-located design of text and relevant keyword tags. You can explore more in a topic-oriented way.',
    'Responsive dictionary panel design that delivers an app-like reading experience even if you are on the go.',
  ],
  techStack: {
    lan: ['Javascript', 'HTML', 'CSS'],
    fe: ['React (hooks)', 'React Redux', 'Material UI'],
    be: ['Node.js', 'Express'],
    others: ['Axios', 'Render'],
  },
  workingsOutline: [
    'Once the search button is clicked, the browser will initiate an HTTP GET request sent to the REST API endpoint of the back-end server.',
    'The carried keyword term in JSON form along with the request will then be handled by the backend, subsequently serving as the URL parameter for the New York Times API.',
    'The backend will then relay the data fetched from the New York Times API to the frontend on which the returned data will be filtered using the destructuring assignment.',
    "Only the relevant data will be then stored in the Redux's state container.",
    `State changes trigger the re-rendering, and the text, images, and tags will be shown in the main display panel ultimately.`,
    `Every word within the given passages is clickable. Once it's clicked, another HTTP GET request will be initiated carrying the keyword which serves as the URL parameter for the Free Dictionary API.`,
    `The fetched data will be filtered using the destructuring assignment and stored in Redux's state container.`,
    `State changes trigger the re-rendering, and the definition, part of speech, and usage example will be shown in the main display panel ultimately.`,
  ],
};
