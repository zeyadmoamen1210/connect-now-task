<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
const props = defineProps(['clear'])
const emit = defineEmits(['change', 'cleared']);

import {OrderBy} from "../../types/OrderBy";

const dropdownActive = ref<boolean>(false);

onMounted(() => {
  document.addEventListener('click', () => {
    dropdownActive.value = false;
  });
})

watch(() => props.clear ,(val) => {
  if(val) {
    setSelectedOption(orderByOptions.value[0]);
    emit('cleared')
  }
})

const orderByOptions = ref<OrderBy[]>([
  {label: 'Release Date', value: 1},
  {label: 'Score', value: 2},
  {label: 'Name', value: 3},
]);

const selectedOption = ref<OrderBy>();
const setSelectedOption = (item: OrderBy) => {
  selectedOption.value = item;
  dropdownActive.value = false;
  emit('change', item);
}
setSelectedOption(orderByOptions.value[0]);

</script>


<script lang="ts">
export default {
  methods: {
    hi() {
      console.log('hi')
    }
  }
}
</script>

<template>
  <section class="dropdown-container" @click.stop="dropdownActive = true">
    <div class="dropdown" >
      <button>
        <img src="@/assets/imgs/up.svg" alt="">
      </button>
      <div>
        <span> {{selectedOption.label}} </span>
        <span class="dropdown__icon">
        <img src="@/assets/imgs/chevron.svg" alt="">
      </span>
      </div>
    </div>
    <div class="dropdown-list" v-if="dropdownActive">
      <button v-for="(item, i) in orderByOptions" :key="i" class="dropdown-list__item" @click.stop="setSelectedOption(item)">
        {{ item.label }}
      </button>
    </div>
  </section>
</template>