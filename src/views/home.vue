<template>
    <div class="home-container">
      <h1>My Contact Book 📖</h1>
  
      <div class="top-bar">
        <input v-model="filter" type="text" placeholder="Search contacts..." />
        <router-link to="/add" class="add-button">+ Add Contact</router-link>
      </div>
  
      <ul v-if="filteredContacts.length">
        <li v-for="(contact, index) in filteredContacts" :key="index">
          <router-link :to="`/contact/${contact.id}`">
            {{ contact.firstName }} {{ contact.lastName }}
          </router-link>
        </li>
      </ul>
      <p v-else>No contacts found.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  
  const contacts = ref([])
  const filter = ref('')
  
  // Load from localStorage
  onMounted(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || []
    contacts.value = savedContacts.sort((a, b) =>
      a.lastName.localeCompare(b.lastName)
    )
  })
  
  // Filter contacts
  const filteredContacts = computed(() => {
    return contacts.value.filter((c) => {
      const fullName = `${c.firstName} ${c.lastName}`.toLowerCase()
      return fullName.includes(filter.value.toLowerCase())
    })
  })
  </script>
  
  <style scoped>
  .home-container {
    max-width: 600px;
    margin: auto;
    padding: 1rem;
  }
  .top-bar {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  input {
    flex: 1;
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: none;
  }
  .add-button {
    background-color: #42b983;
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 0.3rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 0.5rem;
  }
  a {
    color: #42b983;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>