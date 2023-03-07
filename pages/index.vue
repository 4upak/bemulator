<template>
  <v-row justify="center" align="center">
    <p>{{ message }}</p>
  </v-row>
</template>

<script>


export default {
  name: 'IndexPage',
  data() {
    return {
      message: 'Message Data'
    }
  },

  mounted() {
    alert('works')
    this.message = 'page mounted'
    console.log('IndexPage mounted')

    this.$ws.on('open', () => {
      console.log('WebSocket connected')
    })

    this.$ws.on('message', message => {
      this.message = message
      console.log('Received message:', message)
    })
  }

}
</script>
