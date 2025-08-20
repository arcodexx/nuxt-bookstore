<script setup lang="ts">
// -------------------- Imports --------------------
import { ref } from 'vue'

// ----------------- Nuxt-Related Constants -----------------

// ---------------- Page Meta & Head Management ----------------

// -------------------- Props & Emits Definition --------------------

// ---------------- Constants & Reactive Variables ----------------
const drawer = ref(false)
const searchDialog = ref(false)
const searchQuery = ref('')

const navigationItems = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Contact Us', href: '#contact-us' },
]

// ------------------- Computed Properties -------------------

// ---------------------- Methods ----------------------
const toggleSearch = () => {
  searchDialog.value = !searchDialog.value
}

// ---------------------- Watchers ----------------------

// ------------------- Lifecycle Hooks -------------------

// -------------------- Expose Public Methods --------------------

// -------------------- Initial Code Execution --------------------
</script>

<template>
  <v-app>
    <!-- Top Bar with Social Links and User Actions -->
    <v-app-bar 
      app 
      flat 
      height="auto" 
      class="tw:border-b tw:border-gray-200"
    >
      <v-container fluid>
        <!-- Main Header -->
        <v-row align="center" class="tw:py-1">
          <!-- Logo -->
          <v-col cols="12" md="2">
            <NuxtLink to="/" class="tw:block">
              <h1 class="tw:text-4xl"><span class="tw:font-bold">BK</span> Publishers</h1>
            </NuxtLink>
          </v-col>

          <!-- Navigation -->
          <v-col cols="12" md="10">
            <!-- Desktop Navigation -->
            <v-row justify="end" class="md:tw:flex">
              <v-btn
                v-for="item in navigationItems"
                :key="item.title"
                :href="item.href"
                variant="text"
                color="grey-darken-2"
                class="tw:mx-1 tw:font-medium"
              >
                {{ item.title }}
                <v-menu 
                  v-if="item.children" 
                  activator="parent"
                  open-on-hover
                >
                  <v-list>
                    <v-list-item
                      v-for="child in item.children"
                      :key="child.title"
                      :href="child.href"
                      :title="child.title"
                    />
                  </v-list>
                </v-menu>
              </v-btn>
            </v-row>

            <!-- Mobile Navigation Button -->
            <!-- <v-row justify="end" class="tw:flex md:tw:hidden">
              <v-btn
                icon="mdi-menu"
                variant="text"
                @click="drawer = !drawer"
              />
            </v-row> -->
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      width="300"
    >
      <v-list>
        <template v-for="item in navigationItems" :key="item.title">
          <v-list-group v-if="item.children" :value="item.title">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="item.title"
                prepend-icon="mdi-chevron-down"
              />
            </template>
            <v-list-item
              v-for="child in item.children"
              :key="child.title"
              :href="child.href"
              :title="child.title"
              class="tw:pl-8"
            />
          </v-list-group>
          <v-list-item
            v-else
            :href="item.href"
            :title="item.title"
          />
        </template>
      </v-list>
    </v-navigation-drawer>

    <!-- Search Dialog -->
    <v-dialog v-model="searchDialog" max-width="600">
      <v-card>
        <v-card-title class="tw:text-lg tw:font-semibold">
          Search Books
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="searchQuery"
            placeholder="Search for books..."
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            clearable
            autofocus
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="grey" variant="text" @click="searchDialog = false">
            Cancel
          </v-btn>
          <v-btn color="primary" variant="elevated">
            Search
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Main Content -->
    <v-main class="tw:mt-4">
      <NuxtPage />
    </v-main>
  </v-app>
</template>
