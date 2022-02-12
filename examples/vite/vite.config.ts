import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import Watcher from 'vite-plugin-watcher'

export default defineConfig({
	plugins: [
		Vue(),
		Inspect(),
		Watcher(w => {
			w.add('./src/demo')
			w.on('add', path => {
				console.log(path)
			})
		})
	]
})
