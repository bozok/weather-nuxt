<script lang="ts" setup>
const weatherStore = useWeatherStore();
const { weatherData } = storeToRefs(weatherStore);
</script>

<template>
  <div class="text-center">
    <h2 class="text-4xl font-bold">
      {{ weatherData?.current.temp.toFixed(0) / 10 }}°
    </h2>
    <p class="text-xl">
      {{ weatherData?.current.weather[0].description }}
    </p>
    <img
      :src="`http://openweathermap.org/img/wn/
 ${weatherData?.current.weather[0].icon}@2x.png`"
      alt="Weather Icon"
      class="mx-auto"
    />
  </div>
</template>

<style></style>
