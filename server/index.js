require("dotenv").config();
const express = require("express");
const jose = require("jose");
const app = express();
const port = 3001;

const user = {
  username: "exampleUser",
  password: "examplePassword",
};

const posts = {
  posts: [
    {
      post_id: "1",
      author: {
        user_id: "101",
        username: "user123",
        full_name: "John Doe",
        avatar_url: "https://example.com/avatar/user123.png",
      },
      content: "Just enjoying a beautiful day outdoors. 🌞 #naturelover",
      timestamp: "2023-09-25T12:30:00Z",
      likes: 56,
      comments: [
        {
          comment_id: "101",
          author: {
            user_id: "202",
            username: "friend456",
            full_name: "Jane Smith",
          },
          text: "Wow, what a lovely day! 😍",
        },
        {
          comment_id: "102",
          author: {
            user_id: "303",
            username: "user789",
            full_name: "Alice Johnson",
          },
          text: "I wish I could be there too. Looks amazing!",
        },
      ],
    },
    {
      post_id: "2",
      author: {
        user_id: "404",
        username: "coolcat22",
        full_name: "Sarah Williams",
        avatar_url: "https://example.com/avatar/coolcat22.png",
      },
      content:
        "Just finished reading a great book. Highly recommend! 📚 #booklover",
      timestamp: "2023-09-24T18:15:00Z",
      likes: 82,
      comments: [
        {
          comment_id: "103",
          author: {
            user_id: "505",
            username: "bookworm",
            full_name: "Tom Mitchell",
          },
          text: "Which book is it? I'm looking for a good read.",
        },
      ],
    },
  ],
};

app.get("/", (req, res) => {
  res.status(200).json(posts);
});

app.post("/login", (req, res) => {
  // rudimentary authenticate user
  const { username, password } = req.body;

  if (username !== user.username || password !== user.password) {
    res
      .status(401)
      .json({ error: "Unauthorized", message: "Invalid username or password" });
  }

  // create JWT
  (async () => {
    const secret = new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET);
    const alg = "HS256";

    try {
      const jwt = await new jose.SignJWT({ "urn:example:claim": true })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer("urn:example:issuer")
        .setAudience("urn:example:audience")
        .setExpirationTime("2h")
        .sign(secret);

      res.status(200).json({ accessToken: jwt });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        error: "Internal Server Error",
        message: "An error occurred while generating the JWT.",
      });
    }
  })();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
