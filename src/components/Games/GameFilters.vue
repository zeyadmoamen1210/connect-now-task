<script setup lang="ts">
import {ref} from 'vue';
import OrderByComponent from '@/components/Layouts/OrderBy.vue';
import type {OrderBy} from "../../types/OrderBy";
import type {FilterDataInterface} from "../../types/Games/filter";

const emit = defineEmits(['selectedData']);

const filterData = ref<FilterDataInterface | {}>({});

const filterTheGames = () => {
  emit('selectedData', filterData.value)
}

const changeOrderBy = (item: OrderBy) => {
  filterData.value.orderBy = item;
  filterTheGames();
}

const clearClicked = ref<boolean>(false)
const clearData = () => {
  filterData.value = {};
  clearClicked.value = true;
  filterTheGames();
}

</script>

<template>
    <div class="gamefilter">
      <h4 class="gamefilter__heading">Filter Result</h4>

      <div class="gamefilter__form">

        <div class="form-item">
          <label class="form-item__label" for="">Name (Contains)</label>
          <input @input="filterTheGames" v-model="filterData.name" class="form-item__input" type="text" placeholder="Text string">
        </div>

        <div class="form-item__wrap">
          <div class="form-item">
            <label class="form-item__label" for="">Minimum Score</label>
            <input @input="filterTheGames" v-model="filterData.rating" class="form-item__input" type="number" :min="1" :max="10" placeholder="1 - 10">
          </div>
          <div class="form-item">
            <label class="form-item__label" for="">Order By</label>
            <OrderByComponent @cleared="clearClicked = false" :clear="clearClicked" @change="changeOrderBy" />
          </div>
          <div class="gamefilter__footer">
            <button @click="clearData" class="btn btn--primary" >Clear</button>
          </div>
        </div>
      </div>

    </div>
</template>