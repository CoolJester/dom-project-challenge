// deno-lint-ignore-file no-explicit-any no-unused-vars
import express from "npm:express@4.18.2";

export const router: any = express.Router();

router.get('/ping', (req: any, res: any) => {
    res.send('Pong');
});