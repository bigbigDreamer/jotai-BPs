import  { PluginType } from 'react-launcher';
import {Provider} from "jotai";

/**
 * @description this plugin will setup jotai scope for every page
 */
const ReactLauncherJotaiPlugin: PluginType = {
    name: 'ReactLauncherJotaiPlugin',
    inner(children) {
        return <Provider>
            {children}
        </Provider>
    }
}

export { ReactLauncherJotaiPlugin }
