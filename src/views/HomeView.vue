<script setup lang="ts">
import GameFilters from '@/components/Games/GameFilters.vue';
import GameCard from '@/components/Games/GameCard.vue';
import IsLoading from '@/components/Layouts/IsLoading.vue';

import { onMounted, ref, computed } from "vue";

import { useGetGames } from '../composables/Games';

import type {FilterDataInterface} from "@/types/Games/filter";
import type {Game} from "@/types/Games/game";
const { getGames , games } = useGetGames();
const isLoading = ref<boolean>(true);
const closeLoading = () => {
  isLoading.value = false;
}
onMounted(() => {
  getGames(null, null, closeLoading);
});

const selectedData = ref<FilterDataInterface>()
const setSelectedData = (data: FilterDataInterface) => {
  selectedData.value = {...data}
}

const filteredGames = computed(() => {
  const name = selectedData.value?.name?.toString().trim()?.toLowerCase();
  const score = selectedData.value?.rating;
  const orderBy = selectedData.value?.orderBy;

  // filter the games with name and score
  const data = games.value.filter((item: Game) => {
      if(name) {
        return item.name.toLowerCase().includes(name)
      }
      return true;
  })
  .filter((item:Game) => {
    if(score) {
      return Math.round((item.rating / 10)) === score
    }
    return true;
  });
  // order the data
  // Release Date
  if(orderBy?.value === 1) {
    return data.sort((a:Game, b:Game) => a.first_release_date - b.first_release_date);
  }
  //score
  if(orderBy?.value === 2) {
    return data.sort((a:Game, b:Game) => b.rating - a.rating);
  }
  // name
  if(orderBy?.value === 3) {
    return data.sort((a:Game, b:Game) => a.name.localeCompare(b.name));
  }
})

</script>

<template>
   <div class="container">
        <section class="homepage">
            <GameFilters class="homepage__filters" @selected-data="setSelectedData" />
            <div v-if="isLoading" class="mx-auto">
              <IsLoading />
            </div>
            <div v-else class="homepage__cards">
              <div v-if="games.length > 0">
                <div v-for="(item, i) in filteredGames" :key="i">
                  <GameCard :item="item" :count="Math.round(item.rating / 10)" />
                </div>
              </div>
              <div v-else>
                <h6>No Games Founded</h6>
              </div>
            </div>
        </section>
   </div> 
</template>