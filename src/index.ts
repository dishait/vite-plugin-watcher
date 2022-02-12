import { Plugin, FSWatcher } from 'vite'
import { createPluginName } from './shared/create'

const useName = createPluginName(true)

interface IUseWatcher {
	(watcher: FSWatcher): void
}

const usePlugin = (useWatcher: IUseWatcher): Plugin => {
	return {
		name: useName('watcher'),
		configureServer(server) {
			useWatcher(server.watcher)
		}
	}
}

export default usePlugin
