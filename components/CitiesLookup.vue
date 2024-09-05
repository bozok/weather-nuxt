<script lang="ts" setup>
const weatherStore = useWeatherStore();
const { activeCity } = storeToRefs(weatherStore);
const emit = defineEmits(["change"]);
</script>

<template>
  <USelectMenu
    v-model="activeCity"
    :searchable="weatherStore.citiesLookup"
    placeholder="Search for a city..."
    @update:modelValue="emit('change', $event)"
  />
</template>

<style></style>
