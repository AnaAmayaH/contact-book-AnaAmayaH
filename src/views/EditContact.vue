<template>
    <div class="form-container">
      <h2>Edit Contact</h2>
      <form @submit.prevent="updateContact">
        <input v-model="firstName" type="text" placeholder="First Name" required />
        <input v-model="lastName" type="text" placeholder="Last Name" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="phone" type="tel" placeholder="Phone (optional)" />
  
        <div class="buttons">
          <button type="submit">Save</button>
          <router-link :to="`/contact/${id}`"><button type="button">Cancel</button></router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  const route = useRoute()
  const router = useRouter()
  
  const id = Number(route.params.id)
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const phone = ref('')
  
  onMounted(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || []
    const contact = contacts.find(c => c.id === id)
    if (contact) {
      firstName.value = contact.firstName
      lastName.value = contact.lastName
      email.value = contact.email
      phone.value = contact.phone || ''
    }
  })
  
  function updateContact() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || []
    const index = contacts.findIndex(c => c.id === id)
    if (index !== -1) {
      contacts[index] = {
        id,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value
      }
      localStorage.setItem('contacts', JSON.stringify(contacts))
      router.push(`/contact/${id}`)
    }
  }
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: auto;
    padding: 1rem;
    color: #fff;
  }
  input {
    display: block;
    margin: 0.5rem 0;
    padding: 0.5rem;
    width: 100%;
  }
  .buttons {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }
  button {
    background: #9F86C0;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    cursor: pointer;
  }
  button:hover {
    background:  #613995;
  }
  </style>