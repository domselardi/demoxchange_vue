import app from './config/configApp'
import router from './router'
import store from '@/vuex/store'
import './assets/styles/main.scss'

app.use(store)
app.use(router)
app.mount('#demoxchangeApp')
