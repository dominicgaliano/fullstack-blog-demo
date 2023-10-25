_Originally written on October 11, 2023._

I started this project as a small demo to learn how to use [JWTs](https://jwt.io/) as part of the the fullstack development path on [roadmap.sh](https://roadmap.sh). After experimenting with JWT creation and validation, I saw that the next goal along the development path was to learn about redis. I learn best by creating and doing, so I went ahead and learned about redis by creating a redis cache to store refreshTokens within this same project. As I followed along the development path further, this small project ended up ballooning in size to approach the partially completed fullstack application that is contained in this repository today.

This being my first full stack app developed from scratch, I encountered many roadblocks and slowdowns that challenged me. In all cases, I did my best to look for best practices and best solutions for solving these issues. However, overtime, the tech debt of my naive/beginner solutions began to accumulate, leading to this point in time in which I believe that it would be better to start a new project from scratch using the lessons I've learned through failing to complete this project.

So, here are a few lessons that I have learned along the way:

### (Learn about) and implement testing early (TDD)

I learned pretty quickly that hand testing a backend api is extremely tedious and a waste of time. I was able to speed up testing using Postman, but the problem was still mostly that I was manually running requests and analyzing the server response. In other projects, I have found great success by implementing TDD. By having the expected behavior laid out from the start, I have found that development becomes more directed, and thus, more efficient.

### Spend more time on ideation and planning

Because this project slowly ballooned from a small demo to a full application, there was little time spent on big picture ideation and planning. This led to things like TDD or using Typescript being neglected out of desire to iterate quickly. If I had created a big picture plan from the beginning rather than adding features slowly without an idea for the final product, lots of the development process would have been sped up and improved.

### Use Typescript (for JS projects)

Initially I did not use TS because I wanted to experiment quickly with JWTs. In my experience, learning new concepts is much slower in TS because of the need to correctly learn and use types. I know now, however, that types are a good way to learn a new module/package even faster, as they allow you to understand more concretely what is occurring within the code.

### Write clean code

I ended up refactoring the code several time to help clean up the ballooning functions, routes, and controllers within the backend code. I believe that major refactoring could have been avoided if I wrote cleaner code from the beginning. I plan to read and learn more about writing clean code in the future.

### Do your (own) research

I jumped right into use JWTs based on the suggestion of [roadmap.sh](https://roadmap.sh). I, however, did not realize the limitations and common use cases of JWTs until I attended a INFOSEC related talk in the Boston area about JWTs. Knowing what I know now, I would never attempt to use JWTs for maintaining client sessions in the browser. My take away is to learn new things but also look at how they are actually being used by real world applications and not just in tutorials and guides.

### Ask questions from experienced programmers

A lot of my problems could probably have been avoided by asking for advice from senior/more experience programmers. I hope to do this more in the future as I build up my connections to more programmers.

### Don't be afraid to fail

Yes, this project is seemingly a failure at the moment. However, I feel like the roughly two week development time was a great learning opportunity. Failure has helped me push my comfort zone, forced me to seek out new solutions, and given me insight into the problems that modern developers are currently working on. As a result, I ultimately consider this project to be a success.

### Some notes from a better project

After moving on from this project, I decided to look into more developed projects to see how they solved some of the issues I had. I found [this project](https://github.com/jigar-sable/instagram-mern/) which I really liked and used it to take some notes on what I could do better:

### Return newly created object on POST request

I did not do this because of convenience sake and it ended up making frontend development much harder.

#### Frontend

- Uses redux

  - uses 17 reducers for all kinds of website functionality
  - saves the following state variables:
    - user
    - users
    - post
    - posts
    - totalPosts
    - newMessage
    - message
    - messages
    - chat
    - chats
    - loading
    - isAuthenticated
    - isUpdated
    - success
    - error
  - uses _thunk middleware_

    - ['thunks' are a pattern of writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.](https://redux.js.org/usage/writing-logic-thunks)
    - thunks are a standard approach for writing async logic in Redux apps
    - rather than taking in (state, action) args like a reducer, a thunk is passed the redux (dispatch, setState) methods.
    - similar to how redux typically uses action creators to generate actions for dispatching, we normally use thunk action creators for generating thunk functions
    - In a sense, a thunk is a loophole where you can write any code that needs to interact with the Redux store, ahead of time, without needing to know which Redux store will be used.
    - Example:

  ```javascript
  // actions/todoAction.js
  // fetchTodoById is the "thunk action creator"
  export function fetchTodoById(todoId) {
    // fetchTodoByIdThunk is the "thunk function"
    return async function fetchTodoByIdThunk(dispatch, getState) {
      const response = await client.get(`/fakeApi/todo/${todoId}`);
      dispatch(todosLoaded(response.todos));
    };
  }

  // components/TodoComponent.jsx
  function TodoComponent({ todoId }) {
    const dispatch = useDispatch();

    const onFetchClicked = () => {
      // Calls the thunk action creator, and passes the thunk function to dispatch
      dispatch(fetchTodoById(todoId));
    };
  }
  ```

  - uses a file with constants for redux action types to eliminate risk of typing action type strings incorrectly.

- Uses react router as well
  - Deals with private routes, (those that need authentication), by wrapping the routes with `<PrivateRoute>` component.
    - `<PrivateRoute>` is a component that accepts children components and redirects to login if
      `(loading === false) && (isAuthenticated === false)`
  - uses `useParams()` to get route params for use in components
  - uses `useLocation()` on `<App />` to monitor route changes and always scroll to top left on route change. (implemented using `useEffect(func, [pathname])`)
- Uses `<Suspense fallback={<SpinLoader />}></ Suspense>` to wrap routes and ensure that all page components have loaded before displaying them
- Uses react's [lazy loading functionality](https://react.dev/reference/react/lazy) to defer loading of components until they are rendered for the first time. Ex:

  ```javascript
  const SignUp = lazy(() => import('./components/User/SignUp'));
  const Login = lazy(() => import('./components/User/Login'));

  function App() {
     const returningUser = false;

     return (
        {returningUser ? <Login /> : <SignUp />}
     );

  }

  // Login will not be imported until <Login />
  // needs to be rendered for the first time.
  ```

- This project uses [react-helmet-async](https://www.npmjs.com/package/react-helmet-async).
  - an async fork of react-helmet, a tool designed to help manage changes to the document head
  - helps SEO rankings when combined with SSR
  - just need to wrap app in `<Helmet Provider>` and place a `<Helmet>` with new metadata in each component we want to change the document head for
- Make sure to use a cleanup function when using `useEffect()`
- Uses react-toastify for nicer error messages
- Uses tailwindCSS to eliminate the need for as many CSS files

#### Backend

- Express backend
  - Global Middleware: JSON Parser, URLEncoded Parser, cookieParser(), errorHandler (custom)
  - 4 main route trees: post, user, chat, message
  - Auth:
    - Implemented using JWT passed via cookie
    - Protected routes are first based to `isAuthenticated` middleware that parses and validates JWT
    - user is passed JWT as a cookie on register, login, reset password, or change password
    - **I don't believe that this system is very secure, as:**
      - **There is no way to invalidate tokens.**
      - **On logout, the user is simply passed an expired token.**
      - **This means that a bad actor could easily use the old token to access the account.**
      - **Only safe-guard is sending the JWT as an httpOnly cookie, which merely prevents scripts from accessing the token on supported browsers.**
- MongoDB database accessed using Mongoose
- Uses [Socket.io](https://socket.io/) for low-latency chat server
- Uses error middleware as well

  - To prevent the need to explicitly check for any and all errors, all controllers are wrapped by passing them to the following function:

  ```javascript
  (errorFunction) => (req, res, next) => {
    Promise.resolve(errorFunction(req, res, next)).catch(next);
  };
  ```

  - Expected/defined errors are created and passed to next(), the wrapper function just catches all other errors. This prevents api calls from hanging on unexpected errors.

Currently stuck on how to implement client side refresh token behavior.
