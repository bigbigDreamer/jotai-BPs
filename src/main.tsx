import ReactLauncher from 'react-launcher';

import routes from "./routes";

const app = new ReactLauncher({
    routes,
    hash: true
})


app.start()
