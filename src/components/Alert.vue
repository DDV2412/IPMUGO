<template>
  <div
    id="alert"
    :class="
      success
        ? 'text-ipmugo-success-50'
        : 'text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100' || error
        ? 'text-ipmugo-danger-50'
        : 'text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100' || warning
        ? 'text-ipmugo-warning-50'
        : 'text-ipmugo-neutral-10 dark:text-ipmugo-neutral-100'
    "
    class="absolute hidden right-4 z-30 top-20 overflow-hidden h-12 shadow-inner rounded-md bg-ipmugo-neutral-100 justify-start items-center gap-4 flex-nowrap"
  >
    <div class="px-4 flex justify-center items-center">
      <svg
        v-if="success"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-if="error"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8V12M12 16H12.01M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-if="warning"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 14L5.57465 20.2985C5.61893 20.4757 5.64107 20.5643 5.66727 20.6416C5.92317 21.3971 6.60352 21.9283 7.39852 21.9933C7.4799 22 7.5712 22 7.75379 22C7.98244 22 8.09677 22 8.19308 21.9906C9.145 21.8983 9.89834 21.145 9.99066 20.193C10 20.0967 10 19.9824 10 19.7538V5.49997M18.5 13.5C20.433 13.5 22 11.933 22 9.99997C22 8.06698 20.433 6.49997 18.5 6.49997M10.25 5.49997H6.5C4.01472 5.49997 2 7.51469 2 9.99998C2 12.4853 4.01472 14.5 6.5 14.5H10.25C12.0164 14.5 14.1772 15.4469 15.8443 16.3556C16.8168 16.8858 17.3031 17.1508 17.6216 17.1118C17.9169 17.0757 18.1402 16.9431 18.3133 16.7011C18.5 16.4401 18.5 15.918 18.5 14.8737V5.12626C18.5 4.08197 18.5 3.55982 18.3133 3.29886C18.1402 3.05687 17.9169 2.92427 17.6216 2.8881C17.3031 2.84909 16.8168 3.11417 15.8443 3.64433C14.1772 4.55309 12.0164 5.49997 10.25 5.49997Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="flex justify-start items-center px-4">{{ message }}</div>
    <button
      @click="hiddenAlert"
      class="bg-ipmugo-secondary-50 h-full px-4 w-max flex justify-center items-center text-ipmugo-neutral-90 shadow-inner"
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
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Alert',

  props: {
    success: Boolean,
    error: Boolean,
    warning: Boolean,
    message: String,
  },
  methods: {
    showAlert() {
      const alert = document.getElementById('alert')
      if (alert) {
        if (this.success || this.error || this.warning) {
          alert.style.display = 'flex'
          setTimeout(() => {
            alert.style.display = 'none'
          }, 5000)
        } else {
          alert.style.display = 'none'
        }
      }
    },
    hiddenAlert() {
      const alert = document.getElementById('alert')
      if (alert) {
        alert.style.display = 'none'
      }
    },
  },
  mounted() {
    this.showAlert()
  },
  watch: {
    success(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.$emit('update:error', false)
        this.$emit('update:warning', false)
        this.showAlert()
      }
    },
    error(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.$emit('update:success', false)
        this.$emit('update:warning', false)
        this.showAlert()
      }
    },
    warning(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.$emit('update:success', false)
        this.$emit('update:error', false)
        this.showAlert()
      }
    },
  },
})
</script>
