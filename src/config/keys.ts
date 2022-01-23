import prodConfig from "./prod";
import devConfig from "./dev";

type Config = any;
 
let config: Config
if (process.env.NODE_ENV === "production") {
    config = prodConfig;
} else {
    config = devConfig;
}

export default config;