<script lang="ts" setup>
import dayjs from "dayjs";
defineProps<{
  day: DailyWeather;
}>();
</script>

<template>
  <div
    class="flex flex-col items-center p-4 border-dashed border-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg"
  >
    <p class="text-lg font-semibold">
      {{ dayjs(day.dt * 1000).format("dddd") }}
    </p>
    <img
      :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`"
      alt="Weather Icon"
      class="w-12 h-12"
    />
    <p class="mt-1">
      {{ day.temp.day.toFixed(0) / 10 }}°C /
      {{ day.temp.night.toFixed(0) / 10 }}°C
    </p>
  </div>
</template>

<style></style>
