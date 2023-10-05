<script setup lang="ts">
import type { Game } from '../../types/Games/game';
const props = defineProps<{
  item: Game,
  count: number
}>()
</script>

<template>
    <div class="gamecard">
        <div>
          <h4 class="gamecard__title"> {{item.name}} </h4>
          <span class="gamecard__date">Release Date: {{ new Date(item.first_release_date).toLocaleDateString() }} </span>
          <p class="gamecard__desc"> {{item.summary}} </p>
        </div>
        <div>
          <span class="gamecard__index">{{count}}</span>
        </div>
    </div>
</template>

