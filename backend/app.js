const express = require('express');

const app = express();

const PORT = 3000;


app.listen(PORT, () => {
  if (!error)
        console.log(`Server is running on http://localhost:${PORT}`);
  else
        console.error(`Error starting server: ${error.message}`);
});