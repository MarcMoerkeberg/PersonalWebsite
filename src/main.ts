import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import { i18n } from './resources/i18n'

loadFonts()

createApp(App).use(i18n)
.use(createPinia())
.use(router)
.use(vuetify)
.mount('#app')