import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import MyContainer from './components/MyContainer.vue'

const app = createApp(App); 

app.use(createPinia());
app.use(router)
app.component('my-container', MyContainer);
app.mount('#app')
