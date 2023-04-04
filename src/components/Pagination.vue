<template>
  <div
    class="container py-8 px-4 mx-auto flex justify-end items-center gap-x-3"
  >
    <button
      @click="previousPage()"
      :disabled="currentPage === 1"
      class="bg-ipmugo-neutral-90 p-2 flex justify-center items-center rounded-md dark:bg-ipmugo-neutral-20 text-ipmugo-neutral-20 dark:text-ipmugo-neutral-90 hover:bg-ipmugo-primary-50 hover:text-ipmugo-neutral-100 disabled:cursor-none disabled:hover:bg-ipmugo-neutral-90 disabled:dark:hover:bg-ipmugo-neutral-20 disabled:hover:text-ipmugo-neutral-20 disabled:dark:hover:text-ipmugo-neutral-90"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.25 13.5L6.75 9L11.25 4.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div
      class="px-4 py-2 bg-ipmugo-neutral-90 text-l-14 leading-l-14 rounded-md dark:bg-ipmugo-neutral-20 text-ipmugo-neutral-20 dark:text-ipmugo-neutral-90"
    >
      Page {{ localCurrentPage }} of {{ totalPage }}
    </div>
    <button
      @click="nextPage()"
      :disabled="currentPage === totalPage"
      class="bg-ipmugo-neutral-90 p-2 flex justify-center items-center rounded-md dark:bg-ipmugo-neutral-20 text-ipmugo-neutral-20 dark:text-ipmugo-neutral-90 hover:bg-ipmugo-primary-50 hover:text-ipmugo-neutral-100 disabled:cursor-none disabled:hover:bg-ipmugo-neutral-90 disabled:dark:hover:bg-ipmugo-neutral-20 disabled:hover:text-ipmugo-neutral-20 disabled:dark:hover:text-ipmugo-neutral-90"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.75 13.5L11.25 9L6.75 4.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Pagination',
  props: {
    pageSize: Number,
    currentPage: Number,
    totalPage: Number,
  },
  data: () => ({
    localCurrentPage: 1,
  }),
  methods: {
    previousPage() {
      if (this.localCurrentPage > 1) {
        this.localCurrentPage--
        this.$emit('update:currentPage', this.localCurrentPage)
      }
    },
    nextPage() {
      if (this.localCurrentPage < this.totalPage) {
        this.localCurrentPage++
        this.$emit('update:currentPage', this.localCurrentPage)
      }
    },
  },

  watch: {
    $route(route) {
      const page = route.query.page

      if (page) {
        this.localCurrentPage = Number(page)
      }
    },
    localCurrentPage(value) {
      this.$emit('update:currentPage', value)
      this.$router.push({
        query: {
          ...this.$route.query,
          page: value.toString(),
        },
      })
    },
  },
})
</script>
