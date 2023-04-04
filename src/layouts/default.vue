<template>
  <div
    id="main"
    class="min-h-screen relative max-w-[1536px] mx-auto bg-ipmugo-neutral-100 text-ipmug-neutral-10 dark:bg-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 transition-all duration-300 ease-in-out"
  >
    <main>
      <header-navbar />
      <div class="min-h-screen"><Nuxt /></div>
      <footer-section />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderNavbar from '../components/HeaderNavbar.vue'
import FooterSection from '../components/FooterSection.vue'

export default Vue.extend({
  components: { HeaderNavbar, FooterSection },
})
</script>
