
<script setup lang="ts">
import UnoTest from './components/uno-test/index.vue'
</script>

<template>
  <div>
    <biu-button>Default</biu-button>
    <biu-button color="yellow">Primary</biu-button>
    <biu-button type="primary" circle :round="true">Primary</biu-button>
    <biu-button type="success" plain>Success</biu-button>
    <biu-button type="danger">Danger</biu-button>
    <biu-button type="danger">Danger</biu-button>
    <biu-button type="success" grayOut >Danger</biu-button>
    <biu-button type="yellow" size="large">222</biu-button>
    <biu-button type="Warning" size="small">222</biu-button>
    <biu-button type="Warning" size="small">222</biu-button>
    <biu-button type="yellow" plain :size="['200px', '300px']">222</biu-button>
  </div>
</template>

<style scoped></style>
