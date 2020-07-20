import serverLogger from "./serverLogger";
serverLogger(true, true);

import express, { Request, Response } from "express";
import path from "path";
import middlewares from "./middlewares";
import documentProvider from "./documentProvider";


const app = express();
const PORT: number = 3000;

const assetPath: string = path.join(__dirname, "../client/")

middlewares(app);

app.use(express.static(assetPath));


app.get("*", (req: Request, res: Response) => {
    res.send(
        documentProvider()
    )
});

app.listen(PORT, () => console.server(`Server Listening on Port ${PORT}`));

