import app from "./app";

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
