import React, { FunctionComponent } from "react";
import Controls from "../Controls";

import { pandemic } from "./index.scss";
import Canvas from "../Canvas";

const Pandemic: FunctionComponent = () => {
    return <div className={pandemic}>
        <Controls />
        <Canvas />
    </div>
}

export default Pandemic;