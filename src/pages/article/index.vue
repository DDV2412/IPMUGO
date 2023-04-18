<template>
  <section
    class="transition-all duration-300 ease-in-out pt-16 pb-12 bg-ipmugo-neutral-100/30 dark:bg-ipmugo-neutral-10/30 backdrop-blur-sm"
  >
    <div class="container px-4 mx-auto py-5 lg:py-8">
      <div
        class="flex flex-col lg:flex-row flex-wrap justify-between items-start lg:items-center gap-4"
      >
        <h5 class="text-h5 leading-h5 font-medium">
          Result {{ totalHits }} Article
        </h5>
        <div class="flex justify-end items-center gap-4 flex-wrap">
          <button
            @click="exportCitation"
            class="flex justify-center items-center gap-x-3 h-12 px-4 ring-2 focus:ring-inset border-none focus:ring-ipmugo-primary-70 dark:focus:ring-ipmugo-primary-30 focus:ring-2 ring-inset ring-ipmugo-primary-90 dark:ring-ipmugo-primary-20 rounded-md outline-none text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 text-l-16 leading-l-16 font-normal"
          >
            Export
          </button>

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
              <option value="publicationTitle:asc">
                Publication Title A - Z
              </option>
              <option value="publicationTitle:desc">
                Publication Title Z - A
              </option>
              <option value="publishDate:desc">Newest First</option>
              <option value="publishDate:asc">Oldest First</option>
              <option value="popularity:desc">Most Popular</option>
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
          <filter-component :aggregations="aggregations" />
        </div>
      </div>

      <div
        v-if="
          singleYear ||
          rangeYear ||
          aff ||
          author ||
          publicationName ||
          topic ||
          query ||
          search
        "
        class="p-6 flex flex-wrap justify-start gap-4 relative bg-ipmugo-neutral-90 dark:bg-ipmugo-neutral-20 mt-4 rounded-md"
      >
        <button
          @click="resetFilter"
          class="absolute -top-4 font-semibold text-p-18 leading-p-18 bg-ipmugo-neutral-90 dark:bg-ipmugo-neutral-20 px-4 py-1.5 rounded-md"
        >
          Reset Filter
        </button>
        <p v-if="singleYear" class="relative">
          By Year: {{ singleYear }}
          <span
            class="absolute -right-4 -top-4 cursor-pointer"
            @click="removeFilter('singleYear')"
            ><svg
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
          </span>
        </p>
        <p v-if="rangeYear" class="relative">
          By Ranges: {{ rangeYear }}
          <span
            class="absolute -right-4 -top-4 cursor-pointer"
            @click="removeFilter('rangeYear')"
            ><svg
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
          </span>
        </p>
        <p v-if="aff" class="relative">
          Affiliation: {{ aff }}
          <span
            class="absolute -right-4 -top-4 cursor-pointer"
            @click="removeFilter('aff')"
            ><svg
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
          </span>
        </p>
        <p v-if="author" class="relative">
          Author: {{ author }}
          <span
            class="absolute -right-4 -top-4 cursor-pointer"
            @click="removeFilter('author')"
            ><svg
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
          </span>
        </p>
        <p v-if="publicationName" class="relative">
          Publication Name: {{ publicationName }}
          <span
            class="absolute -right-4 -top-4 cursor-pointer"
            @click="removeFilter('publicationName')"
            ><svg
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
          </span>
        </p>
        <p v-if="topic" class="relative">
          Publication Topic: {{ topic }}
          <span
            class="absolute -right-4 -top-4 cursor-pointer"
            @click="removeFilter('topic')"
            ><svg
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
          </span>
        </p>
        <p v-if="query" class="relative">
          Query: {{ query }}
          <span
            class="absolute -right-4 -top-4 cursor-pointer"
            @click="removeFilter('q')"
            ><svg
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
          </span>
        </p>
        <p v-if="search" class="relative">
          Search: {{ search }}
          <span
            class="absolute -right-4 -top-4 cursor-pointer"
            @click="removeFilter('query')"
            ><svg
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
          </span>
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 justify-center gap-4 mt-8">
        <div
          v-for="(article, id) in articles"
          :key="id"
          class="rounded-md hover:shadow-md h-full overflow-hidden cursor-pointer transition-all ease-in-out duration-300 hover:-mt-4"
        >
          <figure class="h-56 overflow-hidden relative">
            <nuxt-link
              :to="{
                name: 'article',
                params: {
                  id: article.sourceAsMap.doi,
                },
              }"
            >
              <img
                src="https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
                alt=""
                class="h-full w-full object-cover rounded-md"
              />
            </nuxt-link>
            <div
              v-if="
                article.sourceAsMap.keywords &&
                article.sourceAsMap.keywords.length > 0 &&
                article.sourceAsMap.keywords[0].name
              "
              class="px-1.5 py-1 text-l-14 leading-l-14 rounded-md bg-ipmugo-primary-90 absolute z-10 top-4 right-4"
            >
              <span class="text-ipmugo-primary-50 font-semibold">{{
                article.sourceAsMap.keywords[0].name
              }}</span>
            </div>
          </figure>
          <div class="px-4 py-8 lg:p-4">
            <p
              class="mb-2 text-l-14 leading-l-14 text-ipmugo-neutral-30 dark:text-ipmugo-neutral-70"
            >
              {{
                new Date(article.sourceAsMap.publishDate).toLocaleDateString(
                  'en-US',
                  { month: 'long', day: 'numeric', year: 'numeric' }
                )
              }}
            </p>
            <nuxt-link
              :to="{
                name: 'article',
                params: {
                  id: article.sourceAsMap.doi,
                },
              }"
              class="text-h4 leading-h4 font-semibold line-clamp-2"
            >
              {{ article.sourceAsMap.title }}
            </nuxt-link>
            <p class="text-p-14 mt-3 leading-p-14 line-clamp-2">
              {{ article.sourceAsMap.abstractText }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <pagination
      v-if="articles"
      :total-page="Math.ceil(totalHits / pageSize)"
      :current-page="currentPage"
      :page-size="pageSize"
    />
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
    articles: [] as any,
    totalHits: 0,
    sortOptions: 'score:desc',
    currentPage: 1,
    isPageable: false,
    pageSize: 30,
    error: false,
    success: false,
    loading: false,
    search: '',
    aggregations: {} as any,
    singleYear: '',
    rangeYear: '',
    publicationName: '',
    author: '',
    aff: '',
    topic: '',
    query: '',
  }),
  methods: {
    async getArticle(
      pageSize?: number,
      sortBy?: string,
      currentPage?: number,
      search?: string,
      singleYear?: string,
      rangeYear?: string,
      publicationName?: string,
      author?: string,
      aff?: string,
      topic?: string,
      query?: string
    ) {
      this.loading = true
      try {
        let url = '/api/search'

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
          url += `${url.includes('?') ? '&' : '?'}query=${search}`
        }
        if (query) {
          url += `${url.includes('?') ? '&' : '?'}q=${query}`
        }

        if (singleYear) {
          url += `${url.includes('?') ? '&' : '?'}singleYear=${singleYear}`
        }

        if (rangeYear) {
          url += `${url.includes('?') ? '&' : '?'}rangeYear=${rangeYear}`
        }

        if (publicationName) {
          url += `${
            url.includes('?') ? '&' : '?'
          }publicationName=${publicationName}`
        }

        if (author) {
          url += `${url.includes('?') ? '&' : '?'}author=${author}`
        }

        if (aff) {
          url += `${url.includes('?') ? '&' : '?'}aff=${aff}`
        }

        if (topic) {
          url += `${url.includes('?') ? '&' : '?'}topic=${topic}`
        }

        const data = await this.$axios.get(url)

        if (
          data &&
          data.data &&
          data.data.data &&
          data.data.data.content &&
          data.data.data.totalHits &&
          data.data.data.totalHits.value
        ) {
          this.success = true
          this.articles = data.data.data.content
          this.totalHits = data.data.data.totalHits.value
          this.aggregations = data.data.data.aggregations
        }
      } catch (error: any) {
        this.error = true
      } finally {
        this.loading = false
      }
    },
    resetFilter() {
      this.$router.replace({ query: undefined })
    },
    removeFilter(option: string) {
      const query = { ...this.$route.query }
      delete query[option]
      this.$router.replace({ query })
    },
    async exportCitation() {
      const data = await this.$axios.get(
        `/api/article/citation/export?count=200`
      )

      if (data && data.data) {
        const downloadLink = document.createElement('a')
        downloadLink.href =
          'data:text/csv;charset=utf-8,' + encodeURIComponent(data.data)
        downloadLink.download = 'citation.bib'
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
      }
    },
  },
  async mounted() {
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
      typeof this.$route.query.query !== 'undefined' &&
      this.$route.query.query !== null
    ) {
      this.search = String(this.$route.query.query)
    }
    if (
      typeof this.$route.query.q !== 'undefined' &&
      this.$route.query.q !== null
    ) {
      this.query = String(this.$route.query.q)
    }

    if (
      typeof this.$route.query.singleYear !== 'undefined' &&
      this.$route.query.singleYear !== null
    ) {
      this.singleYear = String(this.$route.query.singleYear)
    }

    if (
      typeof this.$route.query.rangeYear !== 'undefined' &&
      this.$route.query.rangeYear !== null
    ) {
      this.rangeYear = String(this.$route.query.rangeYear)
    }

    if (
      typeof this.$route.query.publicationName !== 'undefined' &&
      this.$route.query.publicationName !== null
    ) {
      this.publicationName = String(this.$route.query.publicationName)
    }

    if (
      typeof this.$route.query.author !== 'undefined' &&
      this.$route.query.author !== null
    ) {
      this.author = String(this.$route.query.author)
    }

    if (
      typeof this.$route.query.aff !== 'undefined' &&
      this.$route.query.aff !== null
    ) {
      this.aff = String(this.$route.query.aff)
    }

    await this.getArticle(
      Number(this.$route.query.size),
      this.$route.query.sort ? String(this.$route.query.sort) : undefined,
      Number(this.$route.query.page),
      this.$route.query.query ? String(this.$route.query.query) : undefined,
      this.$route.query.singleYear
        ? String(this.$route.query.singleYear)
        : undefined,
      this.$route.query.rangeYear
        ? String(this.$route.query.rangeYear)
        : undefined,
      this.$route.query.publicationName
        ? String(this.$route.query.publicationName)
        : undefined,
      this.$route.query.author ? String(this.$route.query.author) : undefined,
      this.$route.query.aff ? String(this.$route.query.aff) : undefined,
      this.$route.query.topic ? String(this.$route.query.topic) : undefined,
      this.$route.query.q
        ? String(this.$route.query.q).replaceAll('@', '&')
        : undefined
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
      const search = route.query.query
      const query = route.query.q
      const singleYear = route.query.singleYear
      const rangeYear = route.query.rangeYear
      const publicationName = route.query.publicationName
      const author = route.query.author
      const aff = route.query.aff
      const topic = route.query.topic

      if (search === undefined) {
        this.search = ''
      } else {
        this.search = search
      }

      if (query === undefined) {
        this.query = ''
      } else {
        this.query = String(query)
      }

      if (query === undefined) {
        this.query = ''
      } else {
        this.query = String(query)
      }
      if (singleYear === undefined) {
        this.singleYear = ''
      } else {
        this.singleYear = singleYear
      }
      if (rangeYear === undefined) {
        this.rangeYear = ''
      } else {
        this.rangeYear = rangeYear
      }
      if (publicationName === undefined) {
        this.publicationName = ''
      } else {
        this.publicationName = publicationName
      }
      if (author === undefined) {
        this.author = ''
      } else {
        this.author = author
      }
      if (aff === undefined) {
        this.aff = ''
      } else {
        this.aff = aff
      }
      if (topic === undefined) {
        this.topic = ''
      } else {
        this.topic = topic
      }

      await this.getArticle(
        size,
        sort,
        page,
        search,
        singleYear,
        rangeYear,
        publicationName,
        author,
        aff,
        topic,
        query
      )
    },

    search(value) {
      this.$router.push({ query: { ...this.$route.query, query: value } })
    },
  },
})
</script>
