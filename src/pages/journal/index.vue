<template>
  <section
    class="transition-all duration-300 ease-in-out pt-16 pb-12 bg-ipmugo-neutral-100/30 dark:bg-ipmugo-neutral-10/30 backdrop-blur-sm"
  >
    <div class="container px-4 mx-auto py-5 lg:py-8">
      <div
        class="flex flex-col lg:flex-row flex-wrap justify-between items-start lg:items-center gap-4"
      >
        <h5 class="text-h5 leading-h5 font-medium">
          Result {{ journals.length }} Journals
        </h5>
        <div class="flex justify-end items-center gap-4 flex-wrap">
          <div class="relative">
            <input
              class="min-w-full h-12 pl-4 pr-10 ring-2 focus:ring-inset border-none focus:ring-ipmugo-primary-70 dark:focus:ring-ipmugo-primary-30 focus:ring-2 ring-inset ring-ipmugo-primary-90 dark:ring-ipmugo-primary-20 rounded-md outline-none text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 text-l-16 leading-l-16 font-normal"
              placeholder="Search .."
              v-model="search"
            />
            <button
              class="h-10 px-2 absolute flex justify-center items-center right-0 top-1 text-ipmugo-neutral-10/30 dark:text-ipmugo-neutral-100/30"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div class="flex justify-start items-center gap-x-4">
            <p class="font-medium">Sort By</p>
            <select
              v-model="sortOptions"
              class="relative flex justify-center items-center gap-x-3 h-12 px-4 ring-2 focus:ring-inset border-none focus:ring-ipmugo-primary-70 dark:focus:ring-ipmugo-primary-30 focus:ring-2 ring-inset ring-ipmugo-primary-90 dark:ring-ipmugo-primary-20 rounded-md outline-none text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 text-l-16 leading-l-16 font-normal"
            >
              <option selected value="score:desc">Relevance</option>
              <option value="name:asc">Publication Title A - Z</option>
              <option value="name:desc">Publication Title Z - A</option>
            </select>
          </div>
          <div class="flex justify-start items-center gap-x-4">
            <p class="font-medium">Show</p>
            <select
              v-model="pageSize"
              class="relative flex justify-center items-center gap-x-3 h-12 px-4 ring-2 focus:ring-inset border-none focus:ring-ipmugo-primary-70 dark:focus:ring-ipmugo-primary-30 focus:ring-2 ring-inset ring-ipmugo-primary-90 dark:ring-ipmugo-primary-20 rounded-md outline-none text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 text-l-16 leading-l-16 font-normal"
            >
              <option selected value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
            </select>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 justify-center gap-4 mt-8">
        <div
          v-for="(journal, id) in journals"
          :key="id"
          class="rounded-md pb-8 group hover:-mt-4 h-[23rem] transition-all duration-300 ease-in-out hover:shadow-md overflow-hidden relative cursor-pointer"
        >
          <figure class="h-32 overflow-hidden">
            <img
              :src="journal.pageImage"
              :alt="journal.name"
              class="h-full w-full object-cover rounded-md"
            />
          </figure>
          <figure
            class="absolute z-20 w-full h-32 top-0 left-0 flex justify-center translate-y-8 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
          >
            <div
              class="absolute -bottom-10 w-40 h-40 bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 rounded-md p-3"
            >
              <img
                :src="journal.coverImage"
                :alt="journal.name"
                class="w-full h-full object-cover rounded-md"
              />
            </div>
          </figure>

          <div
            class="px-4 pt-12 text-center translate-y-8 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
          >
            <nuxt-link
              :to="'/journal/' + journal.abbreviation"
              class="text-h4 leading-h4 font-semibold line-clamp-2"
            >
              {{ journal.name }}
            </nuxt-link>
            <p
              class="text-p-14 mt-3 leading-p-14 line-clamp-2"
              v-html="journal.description"
            ></p>
          </div>
          <div
            class="flex translate-y-20 group-hover:translate-y-0 mt-4 justify-center items-center gap-4 transition-all duration-300 ease-linear"
          >
            <div
              class="w-10 h-10 bg-ipmugo-neutral-50 flex justify-center items-center px-4 text-l-16 leading-l-16 font-medium text-ipmugo-neutral-100 rounded-md overflow-hidden"
            >
              <nuxt-link to="journal.journalSite">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </nuxt-link>
            </div>
            <div
              class="w-10 h-10 bg-ipmugo-primary-50 flex justify-center items-center px-4 text-l-16 leading-l-16 font-medium text-ipmugo-neutral-100 rounded-md overflow-hidden"
            >
              <nuxt-link to="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 15V17M12 11V17M16 7V17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </nuxt-link>
            </div>
            <div
              class="w-max bg-ipmugo-secondary-50 flex justify-center items-center px-4 text-l-16 leading-l-16 font-medium text-ipmugo-neutral-100 h-10 rounded-md overflow-hidden"
            >
              <nuxt-link :to="'/journal/' + journal.id"> Read More </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <pagination
        v-if="journals"
        :current-page="currentPage"
        :total-page="Math.ceil(journals.length / pageSize)"
        :page-size="pageSize"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    arrow: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `,
    journals: [] as any,
    error: false,
    success: false,
    loading: false,
    sortOptions: 'score:desc',
    currentPage: 1,
    isPageable: false,
    pageSize: 30,
    search: '',
  }),
  methods: {
    async getJournal(
      pageSize?: number,
      sortBy?: string,
      currentPage?: number,
      search?: string
    ) {
      this.loading = true
      try {
        let url = '/api/journal'

        if (currentPage) {
          url += `${url.includes('?') ? '&' : '?'}page=${currentPage - 1}`
        }

        if (pageSize) {
          url += `${url.includes('?') ? '&' : '?'}size=${pageSize}`
        }

        if (sortBy) {
          url += `${url.includes('?') ? '&' : '?'}sort=${sortBy}`
        }

        if (search) {
          url += `${url.includes('?') ? '&' : '?'}search=${search}`
        }

        const data = await this.$axios.get(url)

        if (data && data.data && data.data.data && data.data.data.content) {
          this.success = true
          this.journals = data.data.data.content
        }
      } catch (error: any) {
        this.error = true
      } finally {
        this.loading = false
      }
    },
  },
  async mounted() {
    if (
      typeof this.$route.query.page !== 'undefined' &&
      this.$route.query.page !== null
    ) {
      this.currentPage = Number(this.$route.query.page)
    }

    if (
      typeof this.$route.query.size !== 'undefined' &&
      this.$route.query.size !== null
    ) {
      this.pageSize = Number(this.$route.query.size)
    }

    if (
      typeof this.$route.query.sort !== 'undefined' &&
      this.$route.query.sort !== null
    ) {
      this.sortOptions = String(this.$route.query.sort)
    }

    if (
      typeof this.$route.query.search !== 'undefined' &&
      this.$route.query.search !== null
    ) {
      this.search = String(this.$route.query.search)
    }

    await this.getJournal(
      Number(this.$route.query.size),
      this.$route.query.sort ? String(this.$route.query.sort) : undefined,
      Number(this.$route.query.page),
      this.$route.query.search ? String(this.$route.query.search) : undefined
    )
  },
  watch: {
    pageSize(value) {
      this.$router.push({ query: { ...this.$route.query, size: value } })
    },

    sortOptions(value) {
      this.$router.push({ query: { ...this.$route.query, sort: value } })
    },
    async $route(route) {
      const size = route.query.size
      const sort = route.query.sort
      const page = route.query.page
      const search = route.query.search

      await this.getJournal(size, sort, page, search)
    },
    search(value) {
      this.$router.push({
        query: { ...this.$route.query, search: value },
      })
    },
  },
})
</script>
