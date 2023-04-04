<template>
  <div>
    <button
      @click="openSidebar"
      class="bg-ipmugo-primary-50 overflow-hidden h-12 px-5 rounded-md relative transition-all duration-300 ease-in-out font-medium gap-2.5 text-l-16 leading-l-16 flex justify-center items-center text-ipmugo-neutral-90 w-max"
    >
      Filter
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.38589 5.66687C2.62955 4.82155 2.25138 4.39889 2.23712 4.03968C2.22473 3.72764 2.35882 3.42772 2.59963 3.22889C2.87684 3 3.44399 3 4.57828 3H19.4212C20.5555 3 21.1227 3 21.3999 3.22889C21.6407 3.42772 21.7748 3.72764 21.7624 4.03968C21.7481 4.39889 21.3699 4.82155 20.6136 5.66687L14.9074 12.0444C14.7566 12.2129 14.6812 12.2972 14.6275 12.3931C14.5798 12.4781 14.5448 12.5697 14.5236 12.6648C14.4997 12.7721 14.4997 12.8852 14.4997 13.1113V18.4584C14.4997 18.6539 14.4997 18.7517 14.4682 18.8363C14.4403 18.911 14.395 18.9779 14.336 19.0315C14.2692 19.0922 14.1784 19.1285 13.9969 19.2012L10.5969 20.5612C10.2293 20.7082 10.0455 20.7817 9.89802 20.751C9.76901 20.7242 9.6558 20.6476 9.583 20.5377C9.49975 20.4122 9.49975 20.2142 9.49975 19.8184V13.1113C9.49975 12.8852 9.49975 12.7721 9.47587 12.6648C9.45469 12.5697 9.41971 12.4781 9.37204 12.3931C9.31828 12.2972 9.2429 12.2129 9.09213 12.0444L3.38589 5.66687Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div
      :class="isOpen ? 'translate-x-0' : '-translate-x-96'"
      class="left-0 absolute top-20 w-80 min-h-max bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 z-50 py-6 px-4 rounded-r-md transition-all duration-300 ease-in-out"
    >
      <div class="flex justify-between items-center">
        <h5 class="text-h5 leading-h5 font-semibold">Filter</h5>

        <button
          @click="openSidebar"
          class="flex justify-center items-center p-2 bg-ipmugo-neutral-90 dark:bg-ipmugo-neutral-20 rounded-md cursor-pointer"
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

      <div
        v-if="aggregations && aggregations.year && aggregations.year.length > 0"
        class="my-4 w-full transition-all duration-300 ease-in-out"
      >
        <button
          @click="accordionHandler('year')"
          class="w-full flex justify-between items-center bg-ipmugo-neutral-90/30 dark:bg-ipmugo-neutral-20/30 px-4 py-2.5 rounded-md"
        >
          Years
          <svg
            :class="accordion.year ? 'rotate-180' : 'rotate-0'"
            class="transition-all duration-300 ease-in-out"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          v-if="accordion.year"
          class="mt-2 px-4 py-2.5 transition-all duration-300 ease-in-out"
        >
          <div
            v-for="(year, id) in aggregations.year"
            :key="id"
            class="flex justify-start items-center gap-x-4 py-2"
          >
            <div
              class="flex justify-center items-center h-4 relative w-4 rounded-md ring-2"
            >
              <input
                type="checkbox"
                :value="year.list"
                :checked="filterByYear === year.list"
                @input="changeFilterYear"
                class="absolute cursor-pointer left-0 top-0 bottom-0 right-0 border-none outline-none opacity-0 z-10"
              />
              <div
                class="absolute left-0 top-0 bottom-0 right-0 bg-ipmugo-primary-50 rounded-md z-0"
              >
                <div
                  :class="
                    filterByYear.length > 0 && filterByYear === year.list
                      ? 'bg-ipmugo-primary-50'
                      : 'bg-ipmugo-neutral-90 dark:bg-ipmugo-neutral-20'
                  "
                  class="absolute left-0 top-0 bottom-0 right-0 rounded-md z-0"
                >
                  <div
                    v-if="filterByYear.length > 0 && filterByYear === year.list"
                    class="w-full h-full absolute bottom-1.5"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <label for="year.list" class="text-l-16 leading-l-16">{{
              year.list
            }}</label>
          </div>
        </div>
      </div>
      <div class="my-4 w-full transition-all duration-300 ease-in-out">
        <button
          @click="accordionHandler('range')"
          class="w-full flex justify-between items-center bg-ipmugo-neutral-90/30 dark:bg-ipmugo-neutral-20/30 px-4 py-2.5 rounded-md"
        >
          Range Year
          <svg
            :class="accordion.range ? 'rotate-180' : 'rotate-0'"
            class="transition-all duration-300 ease-in-out"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          v-if="accordion.range"
          class="mt-2 px-4 py-2.5 transition-all duration-300 ease-in-out"
        >
          <form
            @submit.prevent="changeFilterRange"
            class="flex justify-between flex-col gap-4 items-center gap-x-2 w-full"
          >
            <input
              class="h-12 px-4 ring-2 focus:ring-inset border-none focus:ring-ipmugo-primary-70 dark:focus:ring-ipmugo-primary-30 focus:ring-2 ring-inset ring-ipmugo-primary-90 dark:ring-ipmugo-primary-20 rounded-md outline-none text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 text-l-16 leading-l-16 font-normal"
              placeholder="From"
              v-model="rangeValue.from"
            />
            <input
              class="h-12 px-4 ring-2 focus:ring-inset border-none focus:ring-ipmugo-primary-70 dark:focus:ring-ipmugo-primary-30 focus:ring-2 ring-inset ring-ipmugo-primary-90 dark:ring-ipmugo-primary-20 rounded-md outline-none text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 text-l-16 leading-l-16 font-normal"
              placeholder="To"
              v-model="rangeValue.to"
            />
            <button
              class="bg-ipmugo-primary-50 overflow-hidden h-12 px-5 rounded-md relative transition-all duration-300 ease-in-out font-medium text-l-16 leading-l-16 flex justify-center items-center text-ipmugo-neutral-90 w-full"
            >
              Filter
            </button>
          </form>
        </div>
      </div>
      <div
        v-if="
          aggregations &&
          aggregations.journal &&
          aggregations.journal.length > 0
        "
        class="my-4 w-full transition-all duration-300 ease-in-out"
      >
        <button
          @click="accordionHandler('publicationTitle')"
          class="w-full flex justify-between items-center bg-ipmugo-neutral-90/30 dark:bg-ipmugo-neutral-20/30 px-4 py-2.5 rounded-md"
        >
          Publication Title
          <svg
            :class="accordion.publicationTitle ? 'rotate-180' : 'rotate-0'"
            class="transition-all duration-300 ease-in-out"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          v-if="accordion.publicationTitle"
          class="mt-2 px-4 py-2.5 transition-all duration-300 ease-in-out"
        >
          <div
            v-for="(publication, id) in aggregations.journal"
            :key="id"
            class="flex justify-start items-start gap-x-4 py-2"
          >
            <div
              class="flex justify-center items-center h-4 relative w-4 rounded-md ring-2"
            >
              <input
                type="checkbox"
                :value="publication.name"
                :checked="filterByPublicationName === publication.name"
                @input="changeFilterPublicationName"
                class="absolute cursor-pointer left-0 top-0 bottom-0 right-0 border-none outline-none opacity-0 z-10"
              />
              <div
                class="absolute left-0 top-0 bottom-0 right-0 bg-ipmugo-primary-50 rounded-md z-0"
              >
                <div
                  :class="
                    filterByPublicationName.length > 0 &&
                    filterByPublicationName === publication.name
                      ? 'bg-ipmugo-primary-50'
                      : 'bg-ipmugo-neutral-90 dark:bg-ipmugo-neutral-20'
                  "
                  class="absolute left-0 top-0 bottom-0 right-0 rounded-md z-0"
                >
                  <div
                    v-if="
                      filterByPublicationName.length > 0 &&
                      filterByPublicationName === publication.name
                    "
                    class="w-full h-full absolute bottom-1.5"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <label
              for="publication.name"
              class="text-l-16 flex-1 leading-l-16"
              >{{ publication.name }}</label
            >
          </div>
        </div>
      </div>
      <div
        v-if="
          aggregations && aggregations.author && aggregations.author.length > 0
        "
        class="my-4 w-full transition-all duration-300 ease-in-out"
      >
        <button
          @click="accordionHandler('author')"
          class="w-full flex justify-between items-center bg-ipmugo-neutral-90/30 dark:bg-ipmugo-neutral-20/30 px-4 py-2.5 rounded-md"
        >
          Author
          <svg
            :class="accordion.author ? 'rotate-180' : 'rotate-0'"
            class="transition-all duration-300 ease-in-out"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          v-if="accordion.author"
          class="mt-2 px-4 py-2.5 transition-all duration-300 ease-in-out"
        >
          <div
            v-for="(author, id) in aggregations.author"
            :key="id"
            class="flex justify-start items-start gap-x-4 py-2"
          >
            <div
              class="flex justify-center items-center h-4 relative w-4 rounded-md ring-2"
            >
              <input
                type="checkbox"
                :value="author.name"
                :checked="filterByAuthor === author.name"
                @input="changeFilterAuthor"
                class="absolute cursor-pointer left-0 top-0 bottom-0 right-0 border-none outline-none opacity-0 z-10"
              />
              <div
                class="absolute left-0 top-0 bottom-0 right-0 bg-ipmugo-primary-50 rounded-md z-0"
              >
                <div
                  :class="
                    filterByAuthor.length > 0 && filterByAuthor === author.name
                      ? 'bg-ipmugo-primary-50'
                      : 'bg-ipmugo-neutral-90 dark:bg-ipmugo-neutral-20'
                  "
                  class="absolute left-0 top-0 bottom-0 right-0 rounded-md z-0"
                >
                  <div
                    v-if="
                      filterByAuthor.length > 0 &&
                      filterByAuthor === author.name
                    "
                    class="w-full h-full absolute bottom-1.5"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <label
              for="publication.name"
              class="text-l-16 flex-1 leading-l-16"
              >{{ author.name }}</label
            >
          </div>
        </div>
      </div>
      <div
        v-if="
          aggregations &&
          aggregations.affiliation &&
          aggregations.affiliation.length > 0
        "
        class="my-4 w-full transition-all duration-300 ease-in-out"
      >
        <button
          @click="accordionHandler('affiliation')"
          class="w-full flex justify-between items-center bg-ipmugo-neutral-90/30 dark:bg-ipmugo-neutral-20/30 px-4 py-2.5 rounded-md"
        >
          Affiliation
          <svg
            :class="accordion.affiliation ? 'rotate-180' : 'rotate-0'"
            class="transition-all duration-300 ease-in-out"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          v-if="accordion.affiliation"
          class="mt-2 px-4 py-2.5 transition-all duration-300 ease-in-out"
        >
          <div
            v-for="(affiliation, id) in aggregations.affiliation"
            :key="id"
            class="flex justify-start items-start gap-x-4 py-2"
          >
            <div
              class="flex justify-center items-center h-4 relative w-4 rounded-md ring-2"
            >
              <input
                type="checkbox"
                :value="affiliation.name"
                :checked="filterByYear === affiliation.name"
                @input="changeFilterAffiliation"
                class="absolute cursor-pointer left-0 top-0 bottom-0 right-0 border-none outline-none opacity-0 z-10"
              />
              <div
                class="absolute left-0 top-0 bottom-0 right-0 bg-ipmugo-primary-50 rounded-md z-0"
              >
                <div
                  :class="
                    filterByAffiliation.length > 0 &&
                    filterByAffiliation === affiliation.name
                      ? 'bg-ipmugo-primary-50'
                      : 'bg-ipmugo-neutral-90 dark:bg-ipmugo-neutral-20'
                  "
                  class="absolute left-0 top-0 bottom-0 right-0 rounded-md z-0"
                >
                  <div
                    v-if="
                      filterByAffiliation.length > 0 &&
                      filterByAffiliation === affiliation.name
                    "
                    class="w-full h-full absolute bottom-1.5"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <label
              for="publication.name"
              class="text-l-16 flex-1 leading-l-16"
              >{{ affiliation.name }}</label
            >
          </div>
        </div>
      </div>
      <div
        v-if="
          aggregations &&
          aggregations.keyword &&
          aggregations.keyword.length > 0
        "
        class="my-4 w-full transition-all duration-300 ease-in-out"
      >
        <button
          @click="accordionHandler('publicationTopic')"
          class="w-full flex justify-between items-center bg-ipmugo-neutral-90/30 dark:bg-ipmugo-neutral-20/30 px-4 py-2.5 rounded-md"
        >
          Publication Topic
          <svg
            :class="accordion.publicationTopic ? 'rotate-180' : 'rotate-0'"
            class="transition-all duration-300 ease-in-out"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          v-if="accordion.publicationTopic"
          class="mt-2 px-4 py-2.5 transition-all duration-300 ease-in-out"
        >
          <div
            v-for="(keyword, id) in aggregations.keyword"
            :key="id"
            class="flex justify-start items-start gap-x-4 py-2"
          >
            <div
              class="flex justify-center items-center h-4 relative w-4 rounded-md ring-2"
            >
              <input
                type="checkbox"
                :value="keyword.name"
                :checked="filterByPublicatioTopic === keyword.name"
                @input="changeFilterPublicatioTopic"
                class="absolute cursor-pointer left-0 top-0 bottom-0 right-0 border-none outline-none opacity-0 z-10"
              />
              <div
                class="absolute left-0 top-0 bottom-0 right-0 bg-ipmugo-primary-50 rounded-md z-0"
              >
                <div
                  :class="
                    filterByPublicatioTopic.length > 0 &&
                    filterByPublicatioTopic === keyword.name
                      ? 'bg-ipmugo-primary-50'
                      : 'bg-ipmugo-neutral-90 dark:bg-ipmugo-neutral-20'
                  "
                  class="absolute left-0 top-0 bottom-0 right-0 rounded-md z-0"
                >
                  <div
                    v-if="
                      filterByPublicatioTopic.length > 0 &&
                      filterByPublicatioTopic === aggregations.keyword
                    "
                    class="w-full h-full absolute bottom-1.5"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <label
              for="publication.name"
              class="text-l-16 flex-1 leading-l-16"
              >{{ keyword.name }}</label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Accordion {
  year: boolean
  range: boolean
  publicationTitle: boolean
  author: boolean
  affiliation: boolean
  publicationTopic: boolean
}

export default Vue.extend({
  name: 'FilterComponent',
  data: () => ({
    accordion: {
      year: false,
      range: false,
      publicationTitle: false,
      author: false,
      affiliation: false,
      publicationTopic: false,
    },
    filterByYear: '',
    rangeValue: {
      from: '',
      to: '',
    },
    filterByRange: '',
    filterByAuthor: '',
    filterByPublicationName: '',
    filterByPublicatioTopic: '',
    filterByAffiliation: '',
    isOpen: false,
  }),
  props: {
    aggregations: Object,
  },
  methods: {
    accordionHandler(value: keyof Accordion) {
      for (const key in this.accordion) {
        if (key === value) {
          this.accordion[key] = !this.accordion[key]
        }
      }
    },
    openSidebar() {
      this.isOpen = !this.isOpen
    },
    changeFilterYear(event: any) {
      this.filterByYear = event.target.value
    },
    changeFilterPublicationName(event: any) {
      this.filterByPublicationName = event.target.value
    },
    changeFilterPublicatioTopic(event: any) {
      this.filterByPublicatioTopic = event.target.value
    },
    changeFilterAffiliation(event: any) {
      this.filterByAffiliation = event.target.value
    },
    changeFilterRange() {
      this.filterByRange = this.rangeValue.from + '-' + this.rangeValue.to
    },
    changeFilterAuthor(event: any) {
      this.filterByAuthor = event.target.value
    },
  },
  watch: {
    filterByYear(value) {
      if (value && value.length > 0) {
        this.$router.push({
          query: {
            ...this.$route.query,
            singleYear: value.toString(),
            rangeYear: undefined,
          },
        })
      }
    },
    filterByPublicationName(value) {
      if (value && value.length > 0) {
        this.$router.push({
          query: {
            ...this.$route.query,
            publicationName: value.toString(),
          },
        })
      }
    },
    filterByPublicatioTopic(value) {
      if (value && value.length > 0) {
        this.$router.push({
          query: {
            ...this.$route.query,
            topic: value.toString(),
          },
        })
      }
    },
    filterByAffiliation(value) {
      if (value && value.length > 0) {
        this.$router.push({
          query: {
            ...this.$route.query,
            aff: value.toString(),
          },
        })
      }
    },
    filterByAuthor(value) {
      if (value && value.length > 0) {
        this.$router.push({
          query: {
            ...this.$route.query,
            author: value.toString(),
          },
        })
      }
    },
    filterByRange(value) {
      if (value && value.length > 0) {
        this.$router.push({
          query: {
            ...this.$route.query,
            singleYear: undefined,
            rangeYear: value.toString(),
          },
        })
      }
    },
    $route(route) {
      const singleYear = route.query.singleYear
      const rangeYear = route.query.rangeYear
      const publicationName = route.query.publicationName
      const author = route.query.author
      const aff = route.query.aff
      const topic = route.query.topic

      if (singleYear === undefined) {
        this.filterByYear = ''
      } else {
        this.filterByYear = singleYear
      }
      if (rangeYear !== undefined) {
        this.rangeValue.from = rangeYear.split('-')[0]
        this.rangeValue.to = rangeYear.split('-')[1]
      }
      if (publicationName === undefined) {
        this.filterByPublicationName = ''
      } else {
        this.filterByPublicationName = publicationName
      }
      if (author === undefined) {
        this.filterByAuthor = ''
      } else {
        this.filterByAuthor = author
      }
      if (aff === undefined) {
        this.filterByAffiliation = ''
      } else {
        this.filterByAffiliation = aff
      }
      if (topic === undefined) {
        this.filterByPublicatioTopic = ''
      } else {
        this.filterByPublicatioTopic = topic
      }
    },
  },
})
</script>
