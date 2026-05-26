// app.ts
import { App } from 'vue'

App({
onLaunch() {
console.log('智慧电梯小程序启动')
},
// 👇【关键】请在此处填入你的真实后端 API 地址
globalData: {
apiBase: '' // 例如：'https://uu998070-9549-fb4aea38.westc.seetacloud.com:8443/api'
}
})