<template>
    <div v-if="contact" class="details-container">
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      <p><strong>Email:</strong> {{ contact.email }}</p>
      <p v-if="contact.phone"><strong>Phone:</strong> {{ contact.phone }}</p>
  
      <div class="buttons">
        <router-link :to="`/edit/${contact.id}`">
          <button>Edit</button>
        </router-link>
        <button @click="deleteContact">Delete</button>
        <router-link to="/">
          <button>Back to Contacts</button>
        </router-link>
      </div>
    </div>
  
    <div v-else>
      <p>Contact not found.</p>
      <router-link to="/"><button>Back to Contacts</button></router-link>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  const route = useRoute()
  const router = useRouter()
  const contact = ref(null)
  
  onMounted(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || []
    contact.value = contacts.find(c => c.id === Number(route.params.id))
  })
  
  function deleteContact() {
    if (confirm('Are you sure you want to delete this contact?')) {
      let contacts = JSON.parse(localStorage.getItem('contacts')) || []
      contacts = contacts.filter(c => c.id !== contact.value.id)
      localStorage.setItem('contacts', JSON.stringify(contacts))
      router.push('/')
    }
  }
  </script>
  
  <style scoped>
  .details-container {
    max-width: 600px;
    margin: auto;
    padding: 1rem;
    color: #fff;
  }
  p {
    font-size: 1.1rem;
  }
  .buttons {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.3rem;
    background: #42b983;
    color: #fff;
    cursor: pointer;
  }
  button:hover {
    background: #36986d;
  }
  </style>
