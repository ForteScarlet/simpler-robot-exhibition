import { createApp } from 'vue'
import naive from "naive-ui";
import App from './App.vue'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)

app.use(naive)
// root app mount


const vm = app.mount('#app')


const modules = import.meta.glob('./works/*.js')
for (const modulesKey in modules) {
    const mods = modules[modulesKey]()
    mods.then((mod) => {
        return mod.default.workData()
    }).then((work) => {
        vm.works.push(work)
    })
}