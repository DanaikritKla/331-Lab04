<script setup lang="ts">
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const store = useEventStore()
const event = storeToRefs(store).event
const id = ref(event?.value?.id)


</script>

<template>
    <div>
        <div v-if="event">
            <h1>{{ event.title }}</h1>
            <div id="nav">
                <RouterLink :to="{ name: 'event-detail', params: { id } }">Details</RouterLink>
                <RouterLink :to="{ name: 'event-register', params: { id } }">Register</RouterLink>
                <RouterLink :to="{ name: 'event-edit', params: { id } }">Edit</RouterLink>
            </div>
            <RouterView :event="event"></RouterView>
        </div>
    </div>
</template>


