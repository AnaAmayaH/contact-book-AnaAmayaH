<template>
    <div class="form-container">
      <h2>Add New Contact</h2>
  
      <form @submit.prevent="saveContact">
        <input v-model="firstName" type="text" placeholder="First Name" required />
        <input v-model="lastName" type="text" placeholder="Last Name" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="phone" type="tel" placeholder="Phone" />
        <button type="submit">Save Contact</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const phone = ref('')
  
  function saveContact() {
    const newContact = {
      id: Date.now(),
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value
    }
  
    const contacts = JSON.parse(localStorage.getItem('contacts')) || []
    contacts.push(newContact)
    localStorage.setItem('contacts', JSON.stringify(contacts))
  
    router.push(`/contact/${newContact.id}`)
  }
  </script>
  
  <style scoped>
  .form-container {
    max-width: 500px;
    margin: auto;
    padding: 1rem;
  }
  input {
    display: block;
    margin: 0.5rem 0;
    padding: 0.5rem;
    width: 100%;
  }
  button {
    background-color: #42b983;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    border-radius: 0.3rem;
  }
  button:hover {
    background-color: #36986d;
  }
  </style>