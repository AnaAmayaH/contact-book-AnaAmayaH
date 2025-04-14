import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/home.vue'
import AddContact from './views/AddContact.vue'
import ContactDetails from './views/ContactDetails.vue'
import EditContact from './views/EditContact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddContact',
    component: AddContact
  },
  {
    path: '/contact/:id',
    name: 'ContactDetails',
    component: ContactDetails
  },
  {
    path: '/edit/:id',
    name: 'EditContact',
    component: EditContact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router