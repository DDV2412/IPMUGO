<template>
  <footer
    class="bg-ipmugo-neutral-100 pt-4 transition-all duration-300 ease-in-out relative border-t-[1px] border-ipmugo-neutral-80 dark:border-ipmugo-neutral-20 dark:bg-ipmugo-neutral-10 text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100"
  >
    <div
      class="py-12 md:py-6 px-4 container mx-auto text-l-14 leading-l-14 font-medium flex gap-4 flex-col md:flex-row justify-between items-center transition-all duration-300 ease-in-out"
    >
      <span> &COPY; 2023 IPMUGO Digital Library</span>
      <ul
        class="flex justify-start items-center gap-x-4 transition-all duration-300 ease-in-out"
      >
        <li
          class="px-2 h-8 font-medium rounded-md flex justify-center items-center hover:text-ipmugo-primary-50 transition-all duration-300 ease-in-out"
        >
          <NuxtLink class="w-full" to="/article">Articles</NuxtLink>
        </li>
        <li
          class="px-2 h-8 font-medium rounded-md flex justify-center items-center hover:text-ipmugo-primary-50 transition-all duration-300 ease-in-out"
        >
          <NuxtLink class="w-full" to="/journal">Journals</NuxtLink>
        </li>

        <li
          class="px-2 h-8 font-medium rounded-md flex justify-center items-center hover:text-ipmugo-primary-50 transition-all duration-300 ease-in-out"
        >
          <NuxtLink class="w-full" to="/about-us">About</NuxtLink>
        </li>
        <li
          class="px-2 h-8 font-medium rounded-md flex justify-center items-center hover:text-ipmugo-primary-50 transition-all duration-300 ease-in-out"
        >
          <NuxtLink class="w-full" to="/contact">Contact</NuxtLink>
        </li>
      </ul>
      <div
        class="flex justify-end items-center gap-4 transition-all duration-300 ease-in-out"
      >
        <button
          @click="changeTheme()"
          class="flex items-center justify-center w-full transition-all duration-300 ease-in-out"
        >
          <label
            for="swicthTheme"
            class="flex items-center cursor-pointer transition-all duration-300 ease-in-out"
          >
            <div class="relative">
              <div
                class="block bg-ipmugo-neutral-70 dark:bg-ipmugo-neutral-30 w-14 h-7 rounded-full transition-all duration-300 ease-in-out"
              ></div>
              <div
                class="absolute left-1 top-[2px] w-6 h-6 flex justify-center items-center bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 text-ipmugo-neutral-50 rounded-full transition-all duration-300 ease-in-out"
                :class="darkMode ? 'translate-x-[100%]' : 'translate-x-0'"
              >
                <span v-html="darkMode ? darkModeIcon : lightModeIcon"></span>
              </div>
            </div>
          </label>
        </button>
        <button
          class="text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 hover:text-ipmugo-neutral-60 h-8 px-2 transition-all duration-300 ease-in-out"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5004 1.49854H11.2504C10.2558 1.49854 9.30198 1.89362 8.59872 2.59688C7.89545 3.30015 7.50037 4.25397 7.50037 5.24854V7.49854H5.25037V10.4985H7.50037V16.4985H10.5004V10.4985H12.7504L13.5004 7.49854H10.5004V5.24854C10.5004 5.04962 10.5794 4.85886 10.72 4.71821C10.8607 4.57755 11.0515 4.49854 11.2504 4.49854H13.5004V1.49854Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          class="text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 hover:text-ipmugo-neutral-60 h-8 px-2 transition-all duration-300 ease-in-out"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.2504 2.24875C16.5322 2.75536 15.7369 3.14283 14.8954 3.39625C14.4437 2.87689 13.8434 2.50877 13.1756 2.3417C12.5079 2.17462 11.805 2.21665 11.1619 2.46209C10.5189 2.70754 9.9667 3.14455 9.5801 3.71404C9.19351 4.28353 8.99114 4.958 9.00037 5.64625V6.39625C7.68234 6.43043 6.37632 6.13811 5.19862 5.54534C4.02092 4.95256 3.0081 4.07773 2.25037 2.99875C2.25037 2.99875 -0.749634 9.74875 6.00037 12.7488C4.45576 13.7972 2.61573 14.3229 0.750366 14.2488C7.50037 17.9988 15.7504 14.2488 15.7504 5.62375C15.7497 5.41484 15.7296 5.20645 15.6904 5.00125C16.4558 4.24637 16.996 3.29329 17.2504 2.24875Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          class="text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100 hover:text-ipmugo-neutral-60 h-8 px-2 transition-all duration-300 ease-in-out"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.74963 14.2716C2.99963 15.3966 2.99963 12.3966 1.49963 12.0216M11.9996 16.5216V13.6191C12.0278 13.2614 11.9795 12.9019 11.8579 12.5644C11.7363 12.2269 11.5443 11.9191 11.2946 11.6616C13.6496 11.3991 16.1246 10.5066 16.1246 6.41156C16.1244 5.36443 15.7217 4.35746 14.9996 3.59906C15.3415 2.68294 15.3174 1.67032 14.9321 0.77156C14.9321 0.77156 14.0471 0.50906 11.9996 1.88156C10.2806 1.41568 8.46863 1.41568 6.74963 1.88156C4.70213 0.50906 3.81713 0.77156 3.81713 0.77156C3.43192 1.67032 3.40774 2.68294 3.74963 3.59906C3.02223 4.36308 2.61903 5.37916 2.62463 6.43406C2.62463 10.4991 5.09963 11.3916 7.45463 11.6841C7.20788 11.939 7.01758 12.2431 6.89612 12.5765C6.77465 12.9099 6.72474 13.2651 6.74963 13.6191V16.5216"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="absolute h-20 bg-ipmugo-neutral-100 dark:bg-ipmugo-neutral-10 -top-11 text-ipmugo-primary-50 mx-auto rounded-full left-[50%] translate-x-[-50%] transition-all duration-300 ease-in-out"
    >
      <ipmugo-logo class="h-full" />
    </div>
    <button
      id="toTop"
      @click="getTop()"
      class="fixed flex justify-center items-center bottom-20 bg-ipmugo-secondary-50 text-ipmugo-neutral-100 p-4 rounded-full right-4 cursor-pointer transition-all duration-300 ease-in-out"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 20V4M12 4L6 10M12 4L18 10"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    darkMode: false,
    lightModeIcon: `<svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_77_1199)">
                    <path
                      d="M9 1.5V3M9 15V16.5M3 9H1.5M4.73559 4.73559L3.67493 3.67493M13.2644 4.73559L14.3251 3.67493M4.73559 13.2675L3.67493 14.3282M13.2644 13.2675L14.3251 14.3282M16.5 9H15M12.75 9C12.75 11.0711 11.0711 12.75 9 12.75C6.92893 12.75 5.25 11.0711 5.25 9C5.25 6.92893 6.92893 5.25 9 5.25C11.0711 5.25 12.75 6.92893 12.75 9Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_77_1199">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>`,
    darkModeIcon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_77_1201)">
        <path d="M7.875 1.125V2.325M2.7 7.5H1.5M4.0884 3.71353L3.23987 2.865M11.6624 3.71353L12.5109 2.865M14.25 7.5H13.05M4.87505 7.50006C4.87505 5.8432 6.2182 4.50005 7.87506 4.50005C9.00456 4.50005 9.98828 5.12427 10.5001 6.04654M4.5 16.5C2.84315 16.5 1.5 15.1569 1.5 13.5C1.5 11.8431 2.84315 10.5 4.5 10.5C4.84814 10.5 5.18243 10.5593 5.49332 10.6684C6.03046 9.25467 7.3979 8.25 9 8.25C10.6021 8.25 11.9695 9.25467 12.5067 10.6684C12.8176 10.5593 13.1519 10.5 13.5 10.5C15.1569 10.5 16.5 11.8431 16.5 13.5C16.5 15.1569 15.1569 16.5 13.5 16.5C10.0198 16.5 7.40941 16.5 4.5 16.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
        <clipPath id="clip0_77_1201">
            <rect width="18" height="18" fill="white"/>
        </clipPath>
    </defs>
</svg>
`,
  }),
  methods: {
    changeTheme() {
      this.darkMode = !this.darkMode

      const html = document.documentElement

      const prev = this.darkMode ? 'light' : 'dark'
      html.classList.remove(prev)

      const next = this.darkMode ? 'dark' : 'light'
      html.classList.add(next)

      localStorage.setItem('theme', next)
    },

    getTop() {
      const toTop = document.getElementById('toTop')
      if (toTop) {
        toTop.addEventListener('click', function () {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        })
      }
    },
  },
  mounted() {
    const html = document.documentElement

    const navbar = document.getElementById('navbar')
    const toTop = document.getElementById('toTop')

    const prev = this.darkMode ? 'light' : 'dark'
    html.classList.remove(prev)

    const next = this.darkMode ? 'dark' : 'light'
    html.classList.add(next)

    localStorage.setItem('theme', next)

    window.addEventListener('scroll', () => {
      if (navbar) {
        if (this.darkMode) {
          navbar.classList.replace(
            'dark:bg-ipmugo-neutral-20/30',
            'dark:bg-ipmugo-neutral-20'
          )
        } else {
          navbar.classList.replace(
            'bg-ipmugo-neutral-100/30',
            'bg-ipmugo-neutral-100'
          )
        }

        // Check if user has scrolled to top
        if (window.scrollY === 0) {
          if (this.darkMode) {
            navbar.classList.replace(
              'dark:bg-ipmugo-neutral-20',
              'dark:bg-ipmugo-neutral-20/30'
            )
          } else {
            navbar.classList.replace(
              'bg-ipmugo-neutral-100',
              'bg-ipmugo-neutral-100/30'
            )
          }
        }

        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          if (toTop) {
            toTop.classList.replace('bottom-4', 'bottom-20')
          }
        } else {
          if (toTop) {
            toTop.classList.replace('bottom-20', 'bottom-4')
          }
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (toTop) {
          toTop.classList.replace('bottom-4', 'bottom-20')
        }
      } else {
        if (toTop) {
          toTop.classList.replace('bottom-20', 'bottom-4')
        }
      }
    })
  },
})
</script>
