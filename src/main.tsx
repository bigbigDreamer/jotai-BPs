import ReactLauncher from 'react-launcher';
import { ReactLauncherJotaiPlugin } from "./plugins";
import  './index.css';
import routes from "./routes";

const app = new ReactLauncher({
    routes,
    hash: true
})
app.use(ReactLauncherJotaiPlugin)
app.start()
