<script setup lang="ts">
const weatherStore = useWeatherStore();
const { activeCity, weatherData } = storeToRefs(weatherStore);
const loading = ref(false);
const onCityChanged = async () => {
  loading.value = true;
  await weatherStore.getWeatherData();
  loading.value = false;
};
</script>

<template>
  <div class="bg-slate-100 min-h-screen">
    <u-container>
      <u-card>
        <h1 class="text-3xl font-bold text-center text-gray-700 mb-6">
          Weather Sky
        </h1>
        <p class="text-center text-gray-500 mb-4">
          Search for current weather data by city
        </p>
        <cities-lookup @change="onCityChanged" />
      </u-card>

      <empty-placeholder v-if="!weatherData && !loading" />

      <div v-if="loading" class="animate-pulse w-full space-y-4">
        <div class="h-96 bg-slate-300 dark:bg-slate-900 rounded" />
        <div class="h-96 bg-slate-300 dark:bg-slate-900 rounded" />
      </div>

      <u-card v-else-if="weatherData">
        <h1 class="text-3xl font-bold text-center mb-6">
          {{ activeCity?.name }}, {{ activeCity?.country }}
        </h1>
        <div class="space-y-6 mb-8">
          <!-- Current Weather -->
          <current-weather-data />
          <!-- Hourly Weather Slider -->
          <div class="flex overflow-x-auto py-4 space-x-4">
            <hourly-weather-card
              v-for="(hour, index) in weatherData.hourly"
              :key="index"
              :hour="hour"
            />
          </div>
        </div>
        <!-- 7 Day Forecast -->
        <div class="p-4 rounded-lg">
          <h3 class="font-semibold text-center mb-4">7 Day Forecast</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 *:lg:grid-cols-3 gap-4">
            <forecast-card
              v-for="(day, index) in weatherData.daily"
              :key="index"
              :day="day"
            />
          </div>
        </div>
      </u-card>
    </u-container>
  </div>
</template>
