// @deno-types="npm:@types/express@4.17.15"
// deno-lint-ignore-file no-explicit-any no-unused-vars
import express from "npm:express@4.18.2";

// Custom imports
import {router} from "./Routes/test.routes.ts"

const app = express();

// plugging in routes
app.use('/api', router)

// Wild card
app.get("**", (req: any, res: any) => {
  res.json({
    status: "not found",
    message: "This endpoint doesn't exist"
  });
});

app.listen(8000);
