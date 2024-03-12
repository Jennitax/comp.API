<template>
  <h1>Counter View</h1>
  <h2>{{mycounter}}</h2>

  <button @click="decrease">-1</button>
  <button @click="increase">+1</button>


</template>

<script>
import useCounter from '@/composables/useCounter'

export default {
  name: 'MyCounter',
  props: {},
  emits: [],
  setup() {

    const {mycounter, decrease, increase} = useCounter(25)

    return {
      mycounter, increase, decrease
    }
  },
}
</script>

<style>

</style>