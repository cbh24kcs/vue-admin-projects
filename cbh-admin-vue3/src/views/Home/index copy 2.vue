<template>
  <div>
    <h1>count = {{ defaultStore.count }}</h1>
    <button @click="defaultStore.count++">count++</button>
  </div>
</template>

<script lang="ts">
import { useDefaultStore } from '@/store/default'
// import { mapState, mapActions, mapStores } from 'pinia'

export default {
  data() {
    return {
      defaultStore: useDefaultStore()
    }
  },
  computed: {
    // ...mapState(useDefaultStore, ['count']),
    // ...mapStores(useDefaultStore)
  }
}

</script>


