<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir Modal</button>

  <modal v-if="isOpen"
      title="Hola mundo"
      otherTitle="Otro titulo"
      @on:close="closeModal">
      <!-- <h2>Titulo del modal</h2>
      <p>Magna ut occaecat et proident enim nostrud sit amet cupidatat quis culpa laborum.</p>
      <button>Salir</button> -->
     
     <template v-slot:body>
        <p>Magna ut occaecat et proident enim nostrud sit amet cupidatat quis culpa laborum.</p>
     </template>

     <template v-slot:footer>
        <button @click="closeModal">Salir</button>
     </template>

      <template v-slot:header>
        <h2>Titulo del modal</h2>
      </template>

      <template v-slot:exposed="{newTitle}">
        <h2>{{newTitle}}</h2>
      </template>

  </modal>
</template>

<script>
import { ref } from "vue"
import Modal from '../components/Modal.vue'

export default {
    components: {Modal},
    setup() {

      const isOpen = ref(false)

      return{
        isOpen,

        openModal: () => isOpen.value = true,
        closeModal: () => isOpen.value = false,
      }

    }

}
</script>

<style scoped>

</style>