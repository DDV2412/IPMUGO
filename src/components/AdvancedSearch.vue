<template>
  <div>
    <button
      type="button"
      @click="openAdvanced()"
      class="bg-ipmugo-primary-50 overflow-hidden h-12 px-5 rounded-md relative transition-all duration-300 ease-in-out font-medium text-l-16 leading-l-16 flex justify-center items-center text-ipmugo-neutral-90 before:content-[''] before:z-[1] before:absolute before:h-full before:rounded-md before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out before:bg-ipmugo-neutral-90 before:ring-2 before:ring-inset before:ring-ipmugo-neutral-80 after:content-['Advanced_Search'] after:justify-center after:items-center after:z-[2] after:absolute after:text-ipmugo-neutral-10 after:w-full after:h-full after:flex after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 after:ease-in-out"
    >
      Advanced Search
    </button>
    <div
      v-if="show"
      class="right-0 fixed bottom-0 top-0 left-0 z-50 bg-ipmugo-neutral-90/30 min-w-full dark:bg-ipmugo-neutral-20/30 rounded-l-md"
    >
      <div class="flex min-h-screen justify-center items-center">
        <div
          class="flex justify-center flex-col bg-ipmugo-neutral-90 dark:bg-ipmugo-neutral-20 p-6 rounded-md"
        >
          <div class="flex justify-between items-center">
            <h5 class="text-h5 leading-h5 font-semibold">Advanced Search</h5>
            <button
              @click="openAdvanced()"
              class="flex justify-center items-center p-2 cursor-pointer bg-ipmugo-neutral-80 dark:bg-ipmugo-neutral-30 rounded-md"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 7L7 17M7 7L17 17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <form @submit.prevent="inputTerm" class="mt-4 relative">
            <p class="text-l-14 leading-l-14 py-2 font-medium">
              Add Terms to the query search preview
            </p>
            <div class="flex flex-wrap justify-start gap-3">
              <select
                v-model="termValue"
                class="w-full lg:w-max h-14 px-4 ring-2 focus:ring-inset border-none focus:ring-ipmugo-primary-70 dark:focus:ring-ipmugo-primary-30 focus:ring-2 ring-inset ring-ipmugo-primary-90 dark:ring-ipmugo-primary-20 rounded-md outline-none text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 text-l-16 leading-l-16 font-normal placeholder:w-max relative"
              >
                <option value="_all">All Field</option>
                <option value="*_text">Full Text</option>
                <option value="title">Document Title</option>
                <option value="authors.firstName">Author Firstname</option>
                <option value="authors.lastName">Author Lastname</option>
                <option value="abstractText">Abstract</option>
                <option value="publishYear">Publish Year</option>
                <option value="doi">DOI</option>
                <option value="journal.issn">ISSN</option>
                <option value="journal.name">Publication Title</option>
                <option value="journal.publisher">Publisher</option>
                <option value="authors.affiliation">Author Affiliation</option>
                <option value="keywords.name">Keyword</option>
              </select>
              <div class="relative flex-1">
                <input
                  v-model="termQuery"
                  class="min-w-full h-14 px-4 ring-2 focus:ring-inset border-none focus:ring-ipmugo-primary-70 dark:focus:ring-ipmugo-primary-30 focus:ring-2 ring-inset ring-ipmugo-primary-90 dark:ring-ipmugo-primary-20 rounded-md outline-none text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 text-l-16 leading-l-16 font-normal placeholder:w-max relative"
                  placeholder="Search Term"
                />
                <button
                  class="h-10 px-2 absolute flex justify-center items-center right-0 top-2 text-ipmugo-neutral-10/30 dark:text-ipmugo-neutral-100/30"
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
              <select
                v-model="operation"
                class="min-w-max h-14 px-4 ring-2 focus:ring-inset border-none focus:ring-ipmugo-primary-70 dark:focus:ring-ipmugo-primary-30 focus:ring-2 ring-inset ring-ipmugo-primary-90 dark:ring-ipmugo-primary-20 rounded-md outline-none text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 text-l-16 leading-l-16 font-normal placeholder:w-max relative"
              >
                <option value="AND">AND</option>
                <option value="OR">OR</option>
                <option value="NOT">NOT</option>
              </select>
            </div>
          </form>
          <form @submit.prevent="searchQuery" class="mt-4 relative">
            <p class="text-l-14 leading-l-14 py-2 font-medium">Query Preview</p>
            <textarea
              v-model="searchTerm"
              class="min-w-full px-4 py-3 h-32 ring-2 focus:ring-inset border-none focus:ring-ipmugo-primary-70 dark:focus:ring-ipmugo-primary-30 focus:ring-2 ring-inset ring-ipmugo-primary-90 dark:ring-ipmugo-primary-20 rounded-md outline-none text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 text-l-16 leading-l-16 font-normal placeholder:w-max relative"
              placeholder="Search Term"
            ></textarea>

            <div class="mt-3" v-if="rangeField">
              <p class="text-l-14 leading-l-14 py-2 font-medium">
                Add Ranges to the query search preview
              </p>
              <div class="mt-1 flex flex-wrap gap-3 justify-between">
                <input
                  v-model="from"
                  class="flex-1 h-14 px-4 ring-2 focus:ring-inset border-none focus:ring-ipmugo-primary-70 dark:focus:ring-ipmugo-primary-30 focus:ring-2 ring-inset ring-ipmugo-primary-90 dark:ring-ipmugo-primary-20 rounded-md outline-none text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 text-l-16 leading-l-16 font-normal placeholder:w-max relative"
                  placeholder="From"
                />
                <input
                  class="flex-1 h-14 px-4 ring-2 focus:ring-inset border-none focus:ring-ipmugo-primary-70 dark:focus:ring-ipmugo-primary-30 focus:ring-2 ring-inset ring-ipmugo-primary-90 dark:ring-ipmugo-primary-20 rounded-md outline-none text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 text-l-16 leading-l-16 font-normal placeholder:w-max relative"
                  placeholder="To"
                  v-model="to"
                />
                <button class="hidden">Add</button>
              </div>
            </div>
            <div class="mt-3 flex flex-wrap justify-between items-center gap-3">
              <button
                type="button"
                @click="openRangeField"
                class="bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 overflow-hidden h-10 px-5 rounded-md relative transition-all duration-300 ease-in-out font-medium text-l-14 leading-l-14 flex justify-center items-center text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100"
              >
                Add Date Range
              </button>
              <div class="flex justify-end gap-x-3 items-center">
                <button
                  type="reset"
                  class="bg-ipmugo-secondary-50 overflow-hidden h-10 px-5 rounded-md relative transition-all duration-300 ease-in-out font-medium text-l-14 gap-2 leading-l-14 flex justify-center items-center text-ipmugo-neutral-90"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 7L7 17M7 7L17 17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Clear</span>
                </button>
                <button
                  type="submit"
                  class="bg-ipmugo-primary-50 overflow-hidden h-10 px-5 rounded-md relative transition-all duration-300 ease-in-out font-medium text-l-14 leading-l-14 flex justify-center items-center text-ipmugo-neutral-90"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AdvancedSearch',
  data: () => ({
    searchTerm: '',
    show: false,
    rangeField: false,
    operation: 'AND',
    termQuery: '',
    termValue: '_all',
    from: '',
    to: '',
    rangeQuery: '',
  }),
  methods: {
    openAdvanced() {
      this.show = !this.show
    },
    inputTerm() {
      if (this.searchTerm) {
        switch (this.operation) {
          case 'AND':
            this.searchTerm += ' AND '
            break
          case 'OR':
            this.searchTerm += ' OR '
            break
          case 'NOT':
            this.searchTerm += ' NOT '
            break
        }
      }

      switch (this.termValue) {
        case '_all':
          this.searchTerm += this.termQuery + '&default_field=_all'
          break
        case '*_text':
          this.searchTerm += this.termQuery + '&df=*_text'
          break
        case 'title':
          this.searchTerm += 'title:' + this.termQuery
          break
        case 'authors.firstName':
          this.searchTerm += 'authors.firstName:' + this.termQuery
          break
        case 'authors.lastName':
          this.searchTerm += 'authors.lastName:' + this.termQuery
          break
        case 'abstractText':
          this.searchTerm += 'abstractText:' + this.termQuery
          break
        case 'publishYear':
          this.searchTerm += 'publishYear:' + this.termQuery
          break
        case 'doi':
          this.searchTerm += 'doi:' + this.termQuery
          break
        case 'journal.issn':
          this.searchTerm += 'journal.issn:' + this.termQuery
          break
        case 'journal.name':
          this.searchTerm += 'journal.name:' + this.termQuery
          break
        case 'journal.publisher':
          this.searchTerm += 'journal.publisher:' + this.termQuery
          break
        case 'authors.affiliation':
          this.searchTerm += 'authors.affiliation:' + this.termQuery
          break
        case 'keywords.name':
          this.searchTerm += 'keywords.name:' + this.termQuery
          break
      }
    },

    openRangeField() {
      this.from = ''
      this.to = ''
      this.rangeField = !this.rangeField
    },

    searchQuery() {
      this.rangeQuery = this.from + '-' + this.to
      const redirect = this.searchTerm
        ? `/article?q=${this.searchTerm}${
            this.rangeQuery && this.rangeQuery !== '-'
              ? `&rangeYear=${this.rangeQuery}`
              : ''
          }`
        : this.rangeQuery && this.rangeQuery !== '-'
        ? `/article?rangeYear=${this.rangeQuery}`
        : '/'

      this.$router.replace(redirect)
      this.show = false
    },
  },
  mounted() {
    if (
      typeof this.$route.query.q !== 'undefined' &&
      this.$route.query.q !== null
    ) {
      this.searchTerm = String(this.$route.query.q)
    }
  },
})
</script>
