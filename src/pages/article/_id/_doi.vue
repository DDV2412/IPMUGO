<template>
  <section
    class="transition-all duration-300 ease-in-out pt-16 pb-12 bg-ipmugo-neutral-100/30 dark:bg-ipmugo-neutral-10/30 backdrop-blur-sm"
  >
    <div class="container px-4 mx-auto py-5 lg:py-8">
      <div class="flex justify-start items-center gap-x-4">
        <nuxt-link to="/article">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12H4M4 12L10 18M4 12L10 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </nuxt-link>
        <p
          v-if="
            article.keywords &&
            article.keywords.length > 0 &&
            article.keywords[0].name
          "
        >
          {{ article.keywords[0].name }}
        </p>
      </div>

      <!-- Content -->
      <div
        class="mt-8 flex flex-col lg:flex-row justify-start items-start gap-8"
      >
        <div class="flex-0">
          <h2 class="text-h2 leading-h2 font-bold">
            {{ article.title }}
          </h2>
          <p
            v-if="article.journal && article.journal.name"
            class="py-2 text-l-16 leading-l-16 font-medium"
          >
            {{ article.journal.name }}
          </p>
          <p
            v-if="article.journal && article.journal.publisher"
            class="text-l-14 leading-l-14 font-medium"
          >
            <span class="font-bold">Pubsliher : </span>
            {{ article.journal.publisher }}
          </p>
          <p
            v-if="article.authors"
            class="py-4 text-l-16 leading-l-16 font-medium"
          >
            <span class="font-bold">Authors by </span><br /><span
              v-for="(author, id) in article.authors"
              :key="id"
              >{{ author.firstName }} {{ author.lastName }}
              <span v-if="id === article.authors.length - 2"> and&nbsp;</span>
              <span v-else-if="id !== article.authors.length - 1"
                >,&nbsp;</span
              ></span
            >
          </p>

          <div
            class="flex justify-end mt-8 text-l-16 leading-l-16 font-medium py-2"
          >
            <p>
              {{
                new Date(article.publishDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              }}
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
            alt=""
            class="h-[25rem] w-full object-cover rounded-md"
          />

          <div class="py-8">
            <h4 class="font-bold leading-h4 text-h4">Abstract</h4>
            <article class="py-2">
              {{ article.abstractText }}
            </article>
          </div>
        </div>
        <div class="flex-1 min-h-full min-w-[25rem]">
          <div>
            <a
              :href="`http://scholar.google.com/scholar?hl=en&lr=&cites=http://dx.doi.org/${article.doi}`"
              class="w-full overflow-hidden relative h-[10rem] bg-ipmugo-primary-50 rounded-md text-ipmugo-neutral-100 flex justify-start items-end p-4 cursor-pointer"
            >
              <div class="absolute h-full right-0 text-ipmugo-neutral-90/30">
                <svg
                  class="w-full h-full"
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
              </div>
              <p class="text-p-14 leading-p-14">
                Search for Citations in <br />Google Scholar
              </p>
            </a>
          </div>
          <div class="flex flex-col lg:flex-row justify-start gap-2 flex-wrap">
            <div class="my-4 flex-1">
              <div
                class="w-full overflow-hidden relative h-[10rem] bg-ipmugo-secondary-50 rounded-md text-ipmugo-neutral-100 flex justify-end items-start p-4 cursor-pointer flex-col"
              >
                <div class="absolute h-full right-0 text-ipmugo-neutral-90/30">
                  <svg
                    class="w-full h-full"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h2 class="text-h2 leading-h2 font-bold">
                  {{ article.viewsCount }}
                </h2>
                <p class="text-p-14 leading-p-14">Article Views</p>
              </div>
            </div>
            <div class="my-4 flex-1">
              <div
                class="w-full overflow-hidden relative h-[10rem] bg-ipmugo-danger-50 rounded-md text-ipmugo-neutral-100 flex justify-end items-start p-4 cursor-pointer flex-col"
              >
                <div class="absolute h-full right-0 text-ipmugo-neutral-90/30">
                  <svg
                    class="w-full h-full"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 17L12 21M12 21L16 17M12 21V12"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h2 class="text-h2 leading-h2 font-bold">
                  {{ article.downloadCount }}
                </h2>
                <p class="text-p-14 leading-p-14">Article Downloads</p>
              </div>
            </div>
          </div>
          <div
            class="my-4"
            v-if="article.keywords && article.keywords.length > 0"
          >
            <h4 class="font-bold leading-h4 text-h4">Keywords</h4>
            <div class="flex justify-start items-start my-2 flex-wrap gap-3">
              <p
                v-for="(keyword, id) in article.keywords"
                :key="id"
                class="py-2 px-3 rounded-md bg-ipmugo-neutral-90 dark:bg-ipmugo-neutral-20"
              >
                {{ keyword.name }}
              </p>
            </div>
          </div>
          <div class="my-8">
            <h4 class="font-bold leading-h4 text-h4">DOI</h4>

            <p class="mt-2">{{ article.doi }}</p>
          </div>
          <div class="my-8 relative">
            <h4 class="font-bold leading-h4 text-h4">Citation</h4>
            <div
              class="mt-2 py-2 bg-ipmugo-neutral-90 dark:bg-ipmugo-neutral-20 flex justify-start items-center"
            >
              <button
                @click="optionCite('plainTex')"
                class="px-4 h-full text-l-14 leading-l-14 font-semibold"
              >
                Plain Text
              </button>
              <button
                @click="optionCite('bib')"
                class="px-4 h-full text-l-14 leading-l-14 font-semibold"
              >
                BibTeX
              </button>
            </div>
            <p
              id="citation"
              v-if="plainTex"
              class="mt-2 shadow-inner p-4 rounded-md text-l-14 leading-l-14"
            >
              {{ plainText }}
            </p>
            <p
              id="citation"
              v-if="bib"
              class="mt-2 shadow-inner p-4 rounded-md text-l-14 leading-l-14"
            >
              {{ bibtex }}
            </p>
            <button
              @click="copyClipboard"
              title="Clipboard Citation"
              class="bg-ipmugo-neutral-90 dark:bg-ipmugo-neutral-20 p-1 rounded-md flex justify-center items-center absolute right-0 bottom-1"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 4C16.93 4 17.395 4 17.7765 4.10222C18.8117 4.37962 19.6204 5.18827 19.8978 6.22354C20 6.60504 20 7.07003 20 8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V8C4 7.07003 4 6.60504 4.10222 6.22354C4.37962 5.18827 5.18827 4.37962 6.22354 4.10222C6.60504 4 7.07003 4 8 4M9.6 6H14.4C14.9601 6 15.2401 6 15.454 5.89101C15.6422 5.79513 15.7951 5.64215 15.891 5.45399C16 5.24008 16 4.96005 16 4.4V3.6C16 3.03995 16 2.75992 15.891 2.54601C15.7951 2.35785 15.6422 2.20487 15.454 2.10899C15.2401 2 14.9601 2 14.4 2H9.6C9.03995 2 8.75992 2 8.54601 2.10899C8.35785 2.20487 8.20487 2.35785 8.10899 2.54601C8 2.75992 8 3.03995 8 3.6V4.4C8 4.96005 8 5.24008 8.10899 5.45399C8.20487 5.64215 8.35785 5.79513 8.54601 5.89101C8.75992 6 9.03995 6 9.6 6Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div class="my-8" v-if="related">
            <h4 class="font-bold leading-h4 text-h4">Related Articles</h4>

            <div
              v-for="(article, id) in related"
              :key="id"
              class="mt-2 rounded-md h-full overflow-hidden bg-ipmugo-neutral-90 dark:bg-ipmugo-neutral-20"
            >
              <div class="p-4">
                <p
                  class="mb-2 text-l-14 leading-l-14 text-ipmugo-neutral-30 dark:text-ipmugo-neutral-70"
                >
                  {{
                    new Date(
                      article.sourceAsMap.publishDate
                    ).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })
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
      </div>
    </div>

    <div
      class="fixed -translate-x-10 hover:translate-x-0 transition-all duration-300 ease-in-out group flex justify-start items-center flex-col gap-y-2 left-0 top-[18rem] bg-ipmugo-secondary-50 rounded-md py-2"
    >
      <button
        class="p-2 rounded-md text-ipmugo-neutral-100 hover:text-ipmugo-neutral-10"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4758 12.875L15.8906 10.3413H13.2968V8.69715C13.2968 8.00399 13.6591 7.32832 14.8208 7.32832H16V5.17117C16 5.17117 14.9299 5 13.9068 5C11.7707 5 10.3744 6.21351 10.3744 8.41031V10.3413H8V12.875H10.3744V19H13.2968V12.875H15.4758Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        class="p-2 rounded-md text-ipmugo-neutral-100 hover:text-ipmugo-neutral-10"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6625 8.73827C19.6743 8.90232 19.6743 9.06641 19.6743 9.23047C19.6743 14.2344 15.8445 20 8.84484 20C6.68836 20 4.68511 19.3789 3 18.3008C3.30639 18.3359 3.60096 18.3476 3.91914 18.3476C5.69849 18.3476 7.33648 17.75 8.6445 16.7305C6.97118 16.6953 5.56889 15.6055 5.08574 14.1055C5.32144 14.1406 5.5571 14.1641 5.80459 14.1641C6.14631 14.1641 6.48807 14.1171 6.80621 14.0351C5.0622 13.6836 3.75414 12.1601 3.75414 10.3203V10.2735C4.26083 10.5547 4.85008 10.7305 5.47458 10.7539C4.44937 10.0742 3.77772 8.91404 3.77772 7.60154C3.77772 6.89842 3.96623 6.25389 4.2962 5.69139C6.16985 7.98826 8.98623 9.48824 12.1443 9.65233C12.0854 9.37108 12.05 9.07814 12.05 8.78516C12.05 6.6992 13.7469 5 15.8562 5C16.9521 5 17.942 5.45703 18.6372 6.19531C19.4974 6.03126 20.3223 5.71484 21.0529 5.28125C20.7701 6.16018 20.1691 6.89846 19.3796 7.36718C20.1456 7.28519 20.888 7.0742 21.5714 6.78126C21.053 7.53124 20.4049 8.19917 19.6625 8.73827Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        class="p-2 rounded-md text-ipmugo-neutral-100 hover:text-ipmugo-neutral-10"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.38445 19H4.24975V9.65292H7.38445V19ZM5.81541 8.37789C4.81304 8.37789 4 7.60912 4 6.68097C4 6.23515 4.19127 5.80759 4.53172 5.49235C4.87218 5.1771 5.33394 5 5.81541 5C6.29689 5 6.75865 5.1771 7.0991 5.49235C7.43956 5.80759 7.63083 6.23515 7.63083 6.68097C7.63083 7.60912 6.81745 8.37789 5.81541 8.37789ZM15.9886 19V14.4499C15.9886 13.3655 15.9651 11.9749 14.3589 11.9749C12.7291 11.9749 12.4794 13.153 12.4794 14.3718V19H9.34803V9.65292H12.3545V10.9279H12.3984C12.8169 10.1936 13.8391 9.41853 15.3643 9.41853C18.5368 9.41853 19.12 11.353 19.12 13.8655V19H15.9886Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        class="p-2 rounded-md text-ipmugo-neutral-100 hover:text-ipmugo-neutral-10"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        @click="exportCitation"
        class="p-2 rounded-md text-ipmugo-neutral-100 hover:text-ipmugo-neutral-10"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 17L12 21M12 21L16 17M12 21V12"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        class="p-2 rounded-md text-ipmugo-neutral-100 hover:text-ipmugo-neutral-10"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div
        class="absolute cursor-pointer group-hover:-translate-x-20 transition-all duration-300 ease-in-out bg-ipmugo-secondary-50 p-2 rounded-md -right-8 bottom-0 text-ipmugo-neutral-100"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    article: {} as any,
    related: [] as any,
    bibtex: '',
    plainText: `IEEE Standard for Environmental Assessment of Personal Computer
              Products, Including Notebook Personal Computers, Desktop Personal
              Computers, and Personal Computer Displays," in IEEE Std
              1680.1-2009 , vol., no., pp.1-43, 5 March 2010, doi:
              10.1109/IEEESTD.2010.8319900.`,
    plainTex: true,
    bib: false,
  }),
  methods: {
    async articleDetail() {
      const data = await this.$axios.get(
        `/api/article/${this.$route.params.id}/${this.$route.params.doi}`
      )

      if (data && data.data && data.data.data) {
        this.article = data.data.data
      }
    },

    copyClipboard() {
      const clipboard = document.getElementById('citation')

      if (clipboard && navigator.clipboard) {
        navigator.clipboard
          .writeText(clipboard.innerText)
          .then(() => {
            alert('Text copied to clipboard')
          })
          .catch((error) => {
            alert('Failed to copy text')
          })
      }
    },

    optionCite(option: String) {
      if (option === 'bib') {
        this.bib = true
        this.plainTex = false
      } else {
        this.bib = false
        this.plainTex = true
      }
    },

    async viewCount() {
      const data = await this.$axios.post(
        `/api/set-counter/${this.$route.params.id}/${this.$route.params.doi}/View`
      )
    },

    async relatedArticle() {
      let url = `/api/search?query=${this.article.title}&size=4&sort=score:desc`

      if (
        this.article.keywords &&
        this.article.keywords.lenght > 0 &&
        this.article.keywords[0].name
      ) {
        url = `/api/search?query=${this.article.keywords[0].name}&size=4&sort=score:desc`
      }

      const data = await this.$axios.get(url)

      if (data && data.data && data.data.data && data.data.data.content) {
        this.related = data.data.data.content
      }
    },

    async exportCitation() {
      const data = await this.$axios.get(
        `/api/article/export-citation/${this.article.id}`
      )

      if (data && data.data) {
        await this.$axios.post(
          `/api/set-counter/${this.$route.params.id}/${this.$route.params.doi}/Download`
        )

        const downloadLink = document.createElement('a')
        downloadLink.href =
          'data:text/csv;charset=utf-8,' + encodeURIComponent(data.data)
        downloadLink.download = 'citation.bib'
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
      }
    },

    async getBibText() {
      const data = await this.$axios.get(
        `/api/article/export-citation/${this.article.id}`
      )
      if (data && data.data) {
        this.bibtex = data.data
      }
    },
  },
  async mounted() {
    await this.articleDetail()

    await this.relatedArticle()

    await this.viewCount()

    await this.getBibText()
  },
})
</script>
