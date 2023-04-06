<template>
  <nav
    id="navbar"
    class="fixed z-50 left-0 top-0 right-0 h-16 bg-ipmugo-neutral-100/30 dark:bg-ipmugo-neutral-20/30"
  >
    <div
      class="container px-4 mx-auto flex justify-between items-center min-h-full gap-4 lg:gap-10"
    >
      <!-- Menu Button -->
      <button
        @click="openMenu"
        :class="
          menuOpen
            ? 'items-end -translate-x-[300%]'
            : 'items-start translate-x-0'
        "
        class="flex-none transition-all duration-300 ease-in-out lg:hidden flex flex-col gap-y-1.5 h-full px-2.5 py-3 justify-center bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 rounded-md ring-inset ring-2 ring-ipmugo-primary-90 dark:ring-ipmugo-primary-20"
      >
        <div class="h-[2px] w-5 bg-ipmugo-primary-50 rounded-md"></div>
        <div class="h-[2px] w-4 bg-ipmugo-primary-50 rounded-md"></div>
        <div class="h-[2px] w-6 bg-ipmugo-primary-50 rounded-md"></div>
      </button>
      <nuxt-link
        to="/"
        class="text-ipmugo-primary-50 hover:text-ipmugo-tertiary-50 transition-all duration-300 ease-in-out flex-0"
      >
        <ipmugo-logo />
      </nuxt-link>

      <!-- Nav Menu -->
      <ul
        id="navbarMobile"
        :class="menuOpen ? 'left-0' : '-left-[100%]'"
        class="flex-1 lg:flex justify-start items-center transition-all duration-300 ease-in-out gap-4 fixed lg:static min-h-screen lg:min-h-full bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 lg:bg-transparent lg:dark:bg-transparent top-0 w-full z-20 py-6 px-4 lg:py-0 lg:px-0"
      >
        <li class="px-5 lg:hidden flex justify-between items-center mb-4">
          <nuxt-link
            to="/"
            class="text-ipmugo-primary-50 hover:text-ipmugo-tertiary-50 transition-all duration-300 ease-in-out flex-1 lg:flex-0"
          >
            <ipmugo-logo />
          </nuxt-link>
          <button
            @click="openMenu"
            :class="menuOpen ? 'items-end' : 'items-start'"
            class="flex-none lg:hidden flex flex-col gap-y-1.5 h-full px-2.5 py-3 justify-center bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 rounded-md ring-inset ring-2 ring-ipmugo-primary-90 dark:ring-ipmugo-primary-20"
          >
            <div class="h-[2px] w-5 bg-ipmugo-primary-50 rounded-md"></div>
            <div class="h-[2px] w-4 bg-ipmugo-primary-50 rounded-md"></div>
            <div class="h-[2px] w-6 bg-ipmugo-primary-50 rounded-md"></div>
          </button>
        </li>
        <li
          id="dropdown-article"
          class="text-l-16 leading-l-16 font-medium mt-2 lg:mt-0 transition-all duration-300 ease-in-out"
        >
          <nuxt-link
            to="/article"
            class="relative px-5 flex lg:justify-center items-center h-12 text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 rounded-md before:content-[''] before:absolute before:h-[2px] before:rounded-md before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bg-ipmugo-primary-50 before:bottom-0 overflow-hidden"
            >Articles
          </nuxt-link>
          <!-- Dropdown -->
          <div
            id="article-dropdown"
            class="absolute hidden top-20 bg-ipmugo-neutral-90 dark:bg-ipmugo-neutral-20 -z-10 left-16 py-10 px-8 rounded-md right-16 transition-all duration-300 ease-in-out"
          >
            <form @submit.prevent="searchHandler" class="relative">
              <input
                v-model="query"
                class="min-w-full h-14 px-4 ring-2 focus:ring-inset border-none focus:ring-ipmugo-primary-70 dark:focus:ring-ipmugo-primary-30 focus:ring-2 ring-inset ring-ipmugo-primary-90 dark:ring-ipmugo-primary-20 rounded-md outline-none text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 text-l-16 leading-l-16 font-normal"
                placeholder="Search articles with title, doi or keywords .."
                @input="handleInput"
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
            </form>

            <div class="mt-8 grid grid-cols-3 gap-8 items-start">
              <div class="flex flex-col justify-center min-h-full">
                <h1 class="text-h3 leading-h3">Articles</h1>
                <p class="text-l-16 leading-l-16 py-4 font-light">
                  Want to explore more? Visit our articles page to discover a
                  variety of interesting and useful information that's ready to
                  expand your knowledge
                </p>
                <nuxt-link
                  to="/article"
                  class="bg-ipmugo-primary-50 overflow-hidden h-12 px-5 rounded-md relative transition-all duration-300 ease-in-out font-medium text-l-16 leading-l-16 hidden lg:flex justify-center items-center text-ipmugo-neutral-90 before:content-[''] before:z-[1] before:absolute before:h-full before:rounded-md before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out before:bg-ipmugo-neutral-90 before:ring-2 before:ring-inset before:ring-ipmugo-neutral-80 after:content-['Discover_new_knowledge'] after:justify-center after:items-center after:z-[2] after:absolute after:text-ipmugo-neutral-10 after:w-full after:h-full after:flex after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 after:ease-in-out"
                  >Discover new knowledge
                </nuxt-link>
              </div>
              <div v-for="(group, index) in articles" :key="index">
                <div v-for="(article, idx) in group" :key="idx" class="py-2">
                  <nuxt-link :to="'/article/' + article.id">
                    <span
                      class="text-l-14 leading-l-14 font-light line-clamp-1 hover:text-ipmugo-primary-50"
                      >{{ article.sourceAsMap.title }}</span
                    >

                    <span
                      class="text-l-12 leading-l-12 font-light"
                      v-for="(author, index) in article.sourceAsMap.authors"
                      :key="index"
                    >
                      <span>{{ author.firstName }} {{ author.lastName }}</span>
                      <span
                        v-if="index === article.sourceAsMap.authors.length - 2"
                      >
                        and&nbsp;</span
                      >
                      <span
                        v-else-if="
                          index !== article.sourceAsMap.authors.length - 1
                        "
                        >,&nbsp;</span
                      >
                    </span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li
          id="dropdown-journal"
          class="text-l-16 leading-l-16 font-medium mt-2 lg:mt-0"
        >
          <nuxt-link
            to="/journal"
            class="relative px-5 flex lg:justify-center items-center h-12 text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 rounded-md before:content-[''] before:absolute before:h-[2px] before:rounded-md before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bg-ipmugo-primary-50 before:bottom-0 overflow-hidden"
            >Journals
          </nuxt-link>

          <!-- Dropdown -->
          <div
            id="journal-dropdown"
            class="absolute hidden top-20 bg-ipmugo-neutral-90 dark:bg-ipmugo-neutral-20 -z-10 left-16 py-10 px-8 rounded-md right-16 transition-all duration-300 ease-in-out"
          >
            <div class="mt-8 grid grid-cols-3 gap-8 items-start">
              <div class="flex flex-col justify-center min-h-full">
                <h1 class="text-h3 leading-h3">Journals</h1>
                <p class="text-l-16 leading-l-16 py-4 font-light">
                  Visit our collection of journals to discover a variety of
                  interesting and useful information that is ready to expand
                  your knowledge.
                </p>
                <nuxt-link
                  to="/journal"
                  class="bg-ipmugo-primary-50 overflow-hidden h-12 px-5 rounded-md relative transition-all duration-300 ease-in-out font-medium text-l-16 leading-l-16 hidden lg:flex justify-center items-center text-ipmugo-neutral-90 before:content-[''] before:z-[1] before:absolute before:h-full before:rounded-md before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out before:bg-ipmugo-neutral-90 before:ring-2 before:ring-inset before:ring-ipmugo-neutral-80 after:content-['Get_started_with_our_journals'] after:justify-center after:items-center after:z-[2] after:absolute after:text-ipmugo-neutral-10 after:w-full after:h-full after:flex after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 after:ease-in-out"
                  >Get started with our journals
                </nuxt-link>
              </div>
              <div v-for="(group, index) in journals" :key="index">
                <div v-for="(journal, idx) in group" :key="idx" class="py-2">
                  <nuxt-link :to="'/journal/' + journal.id">
                    <span
                      class="text-l-14 leading-l-14 font-light line-clamp-2 hover:text-ipmugo-primary-50"
                      >{{ journal.name }}</span
                    ><span class="text-l-12 leading-l-12 font-light py-2">{{
                      journal.publisher
                    }}</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="text-l-16 leading-l-16 font-medium mt-2 lg:mt-0">
          <nuxt-link
            to="/about"
            class="relative px-5 flex lg:justify-center items-center h-12 text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 rounded-md before:content-[''] before:absolute before:h-[2px] before:rounded-md before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bg-ipmugo-primary-50 before:bottom-0 overflow-hidden"
            >About
            <!-- Divide -->
          </nuxt-link>
        </li>
        <li class="text-l-16 leading-l-16 font-medium mt-2 lg:mt-0">
          <nuxt-link
            to="/contact"
            class="relative px-5 flex lg:justify-center items-center h-12 text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 rounded-md before:content-[''] before:absolute before:h-[2px] before:rounded-md before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bg-ipmugo-primary-50 before:bottom-0 overflow-hidden"
            >Contact
            <!-- Divide -->
          </nuxt-link>
        </li>
        <li class="px-5 lg:hidden flex justify-between items-center mt-4">
          <form @submit.prevent="searchHandler" class="relative">
            <input
              v-model="query"
              class="h-12 px-4 rounded-md min-w-full bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 outline-none text-ipmugo-neutral-10 dark:text-ipmugo-neutral-90 text-l-16 leading-l-16 font-normal border-b-2 border-ipmugo-neutral-70"
              placeholder="Search ..."
              @input="handleInput"
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
          </form>
        </li>
        <li class="px-5 lg:hidden flex justify-between items-center mt-4">
          <advanced-search />
        </li>
      </ul>

      <!-- Button Action -->
      <div class="flex-none flex justify-end items-center gap-5">
        <div class="hidden lg:block"><advanced-search /></div>

        <button
          type="button"
          class="bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 h-12 px-5 rounded-md ring-inset ring-2 ring-ipmugo-neutral-90 dark:ring-ipmugo-neutral-20 relative transition-all duration-300 ease-in-out font-medium text-l-16 leading-l-16 flex justify-center items-center text-ipmugo-neutral-10 dark:text-ipmugo-neutral-90 before:content-[''] before:z-[1] before:absolute before:h-full before:rounded-md before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out before:bg-ipmugo-primary-50 after:content-['Login'] after:justify-center after:items-center after:z-[2] after:absolute after:text-ipmugo-neutral-90 after:w-full after:h-full after:flex after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 after:ease-in-out"
        >
          Login
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import IpmugoLogo from './IpmugoLogo.vue'
import AdvancedSearch from './AdvancedSearch.vue'
export default Vue.extend({
  components: { IpmugoLogo, AdvancedSearch },
  name: 'HeaderNavbar',
  data: () => ({
    menuOpen: false,
    articles: [] as any,
    query: '',
    journals: [] as any,
  }),
  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen
    },
    handleInput(e: any) {
      this.query = e.target.value
    },
    async fetchArticle(query?: String) {
      let url = '/api/search?size=10'

      if (query) {
        url = `/api/search?size=10&query=${query}`
      }

      const data = await this.$axios.$get(url)
      const articleData = []

      if (data && data.data && data.data.content) {
        const articles = data.data.content
        const articlesPerDiv = Math.ceil(articles.length / 2)

        for (let i = 0; i < articles.length; i += articlesPerDiv) {
          articleData.push(articles.slice(i, i + articlesPerDiv))
        }
      }

      this.articles = articleData

      return articleData
    },
    async fetchJournal() {
      const journalsData = await this.$axios.$get('/api/journal?size=10')
      const journalData = []
      if (journalsData && journalsData.data && journalsData.data.content) {
        const journals = journalsData.data.content

        const journalsPerDiv = Math.ceil(journals.length / 2)

        for (let i = 0; i < journals.length; i += journalsPerDiv) {
          journalData.push(journals.slice(i, i + journalsPerDiv))
        }
      }

      this.journals = journalData

      return journalData
    },
    searchHandler() {
      this.$router.push(`/article?query=${this.query}`)
    },
  },
  async mounted() {
    const navbarMobile = document.getElementById('main')

    const articleDropdown = document.getElementById('dropdown-article')
    const articleList = document.getElementById('article-dropdown')

    const journalDropdown = document.getElementById('dropdown-journal')
    const journalList = document.getElementById('journal-dropdown')

    if (this.menuOpen) {
      window.addEventListener('click', (e) => {
        if (e.target === navbarMobile) {
          this.menuOpen = false
        }
      })
    } else {
      window.addEventListener('click', (e) => {
        if (e.target === navbarMobile) {
          this.menuOpen = false
        }
      })
    }

    if (articleDropdown) {
      articleDropdown?.addEventListener('mouseenter', () => {
        if (articleList) {
          journalList?.classList.remove('lg:block')
          articleList.classList.add('lg:block')
        }
      })

      if (articleList) {
        articleList.addEventListener('mouseleave', () => {
          articleList.classList.remove('lg:block')
        })
      }
    }

    if (journalDropdown) {
      journalDropdown?.addEventListener('mouseenter', () => {
        if (journalList) {
          journalList.classList.add('lg:block')
          articleList?.classList.remove('lg:block')
        }
      })

      if (journalList) {
        journalList.addEventListener('mouseleave', () => {
          journalList.classList.remove('lg:block')
        })
      }
    }

    await this.fetchArticle()

    await this.fetchJournal()
  },
})
</script>
