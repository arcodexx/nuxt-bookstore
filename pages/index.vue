<script setup lang="ts">
// -------------------- Imports --------------------
import { ref } from 'vue'
import mainBanner1 from '@/assets/images/main-banner1.jpg';
import mainBanner2 from '@/assets/images/main-banner2.jpg';
import featuredBook1 from '@/assets/images/product-item1.jpg';
import featuredBook2 from '@/assets/images/product-item2.jpg';
import featuredBook3 from '@/assets/images/product-item3.jpg';
import featuredBook4 from '@/assets/images/product-item4.jpg';
import featuredBook5 from '@/assets/images/product-item5.jpg';
import featuredBook6 from '@/assets/images/product-item6.jpg';
import featuredBook7 from '@/assets/images/product-item7.jpg';
import featuredBook8 from '@/assets/images/product-item8.jpg';
import book1 from '@/assets/images/tab-item1.jpg';
import book2 from '@/assets/images/tab-item2.jpg';
import book3 from '@/assets/images/tab-item3.jpg';
import book4 from '@/assets/images/tab-item4.jpg';
import book5 from '@/assets/images/tab-item5.jpg';
import book6 from '@/assets/images/tab-item6.jpg';
import book7 from '@/assets/images/tab-item7.jpg';
import book8 from '@/assets/images/tab-item8.jpg';
import clientLogo1 from '@/assets/images/client-image1.png';
import clientLogo2 from '@/assets/images/client-image2.png';
import clientLogo3 from '@/assets/images/client-image3.png';
import clientLogo4 from '@/assets/images/client-image4.png';
import clientLogo5 from '@/assets/images/client-image5.png';




// ---------------- Constants & Reactive Variables ----------------
const currentSlide = ref(0)
const activeTab = ref('all-genre')

// Banner slides data
const bannerSlides = [
  {
    title: 'Life of the Wild',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.',
    image: mainBanner1
  },
  {
    title: 'Birds gonna be Happy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.',
    image: mainBanner2
  }
]

// Featured books data
const featuredBooks = [
  { id: 1, title: 'Simple way of piece life', author: 'Armor Ramsey', price: 40.00, image: featuredBook1 },
  { id: 2, title: 'Great travel at desert', author: 'Sanchit Howdy', price: 38.00, image: featuredBook2 },
  { id: 3, title: 'The lady beauty Scarlett', author: 'Arthur Doyle', price: 45.00, image: featuredBook3 },
  { id: 4, title: 'Once upon a time', author: 'Klien Marry', price: 35.00, image: featuredBook4 }
]

// Tab categories data
const tabCategories = [
  { id: 'all-genre', label: 'All Genre' },
  { id: 'business', label: 'Business' },
  { id: 'technology', label: 'Technology' },
  { id: 'romantic', label: 'Romantic' },
  { id: 'adventure', label: 'Adventure' },
  { id: 'fictional', label: 'Fictional' }
]

// Popular books by category
const popularBooks: Record<string, Array<{id: number, title: string, author: string, price: number, image: string}>> = {
  'all-genre': [
    { id: 1, title: 'Portrait photography', author: 'Adam Silber', price: 40.00, image: book1 },
    { id: 2, title: 'Once upon a time', author: 'Klien Marry', price: 35.00, image: book2 },
    { id: 3, title: 'Tips of simple lifestyle', author: 'Bratt Smith', price: 40.00, image: book3 },
    { id: 4, title: 'Just felt from outside', author: 'Nicole Wilson', price: 40.00, image: book4 },
    { id: 5, title: 'Peaceful Enlightment', author: 'Marmik Lama', price: 40.00, image: book5 },
    { id: 6, title: 'Great travel at desert', author: 'Sanchit Howdy', price: 40.00, image: book6 },
    { id: 7, title: 'Life among the pirates', author: 'Armor Ramsey', price: 40.00, image: book7 },
    { id: 8, title: 'Simple way of piece life', author: 'Armor Ramsey', price: 40.00, image: book8 }
  ],
  'business': [
    { id: 2, title: 'Peaceful Enlightment', author: 'Marmik Lama', price: 40.00, image: book2 },
    { id: 4, title: 'Great travel at desert', author: 'Sanchit Howdy', price: 40.00, image: book4 },
    { id: 6, title: 'Life among the pirates', author: 'Armor Ramsey', price: 40.00, image: book6 },
    { id: 8, title: 'Simple way of piece life', author: 'Armor Ramsey', price: 40.00, image: book8 }
  ],
  'technology': [
    { id: 1, title: 'Peaceful Enlightment', author: 'Marmik Lama', price: 40.00, image: book1 },
    { id: 3, title: 'Great travel at desert', author: 'Sanchit Howdy', price: 40.00, image: book3 },
    { id: 5, title: 'Life among the pirates', author: 'Armor Ramsey', price: 40.00, image: book5 },
    { id: 7, title: 'Simple way of piece life', author: 'Armor Ramsey', price: 40.00, image: book7 }
  ],
  'romantic': [
    { id: 1, title: 'Peaceful Enlightment', author: 'Marmik Lama', price: 40.00, image: book1 },
    { id: 3, title: 'Great travel at desert', author: 'Sanchit Howdy', price: 40.00, image: book3 },
    { id: 5, title: 'Life among the pirates', author: 'Armor Ramsey', price: 40.00, image: book5 },
    { id: 7, title: 'Simple way of piece life', author: 'Armor Ramsey', price: 40.00, image: book7 }
  ],
  'adventure': [
    { id: 5, title: 'Life among the pirates', author: 'Armor Ramsey', price: 40.00, image: book5 },
    { id: 7, title: 'Simple way of piece life', author: 'Armor Ramsey', price: 40.00, image: book7 }
  ],
  'fictional': [
    { id: 5, title: 'Life among the pirates', author: 'Armor Ramsey', price: 40.00, image: book5 },
    { id: 7, title: 'Simple way of piece life', author: 'Armor Ramsey', price: 40.00, image: book7 }
  ]
}

// Special offer books
const specialOfferBooks = [
  { id: 1, title: 'Simple way of piece life', author: 'Armor Ramsey', price: 40.00, prevPrice: 50.00, image: featuredBook5 },
  { id: 2, title: 'Great travel at desert', author: 'Sanchit Howdy', price: 38.00, prevPrice: 30.00, image: featuredBook6 },
  { id: 3, title: 'The lady beauty Scarlett', author: 'Arthur Doyle', price: 45.00, prevPrice: 35.00, image: featuredBook7 },
  { id: 4, title: 'Once upon a time', author: 'Klien Marry', price: 35.00, prevPrice: 25.00, image: featuredBook8 },
  { id: 5, title: 'Simple way of piece life', author: 'Armor Ramsey', price: 40.00, image: featuredBook2 }
]

// Blog articles
const blogArticles = [
  { id: 1, title: 'Reading books always makes the moments happy', date: 'Mar 30, 2021', category: 'inspiration', image: '/assets/images/post-img1.jpg' },
  { id: 2, title: 'Reading books always makes the moments happy', date: 'Mar 29, 2021', category: 'inspiration', image: '/assets/images/post-img2.jpg' },
  { id: 3, title: 'Reading books always makes the moments happy', date: 'Feb 27, 2021', category: 'inspiration', image: '/assets/images/post-img3.jpg' }
]

// Client logos
const clientLogos = [
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5
]

// Newsletter form
const emailSubscription = ref('')

// ------------------- Methods -------------------
const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? bannerSlides.length - 1 : currentSlide.value - 1
}

const nextSlide = () => {
  currentSlide.value = currentSlide.value === bannerSlides.length - 1 ? 0 : currentSlide.value + 1
}

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId
}

const addToCart = (book: any) => {
  // Add to cart functionality
  console.log('Added to cart:', book.title)
}

const subscribeNewsletter = () => {
  // Newsletter subscription functionality
  console.log('Subscribed with email:', emailSubscription.value)
  emailSubscription.value = ''
}
</script>

<template>
  <!-- Hero Banner Section -->
  <section class="tw:relative tw:bg-gray-50 tw:py-16">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12">
          <div class="tw:relative tw:overflow-hidden tw:rounded-lg">
            <!-- Banner Carousel -->
            <v-carousel
              v-model="currentSlide"
              height="500"
              hide-delimiters
              show-arrows="hover"
              class="tw:rounded-lg"
            >
              <v-carousel-item
                v-for="(slide, index) in bannerSlides"
              >
                <div class="tw:absolute tw:inset-0 tw:white tw:bg-opacity-40 tw:flex tw:items-center">
                  <v-container>
                    <v-row align="center">
                      <v-col class="tw:ps-10">
                        <div class="tw:space-y-6">
                          <h2 class="tw:text-4xl md:tw:text-5xl tw:font-bold tw:leading-tight">
                            {{ slide.title }}
                          </h2>
                          <p class="tw:text-lg tw:leading-relaxed">
                            {{ slide.description }}
                          </p>
                          <div class="tw:pt-4">
                            <v-btn
                              color="primary"
                              variant="outlined"
                              size="large"
                              append-icon="mdi-arrow-right"
                              class=" hover:tw:bg-white hover:tw:text-gray-900"
                            >
                              Read More
                            </v-btn>
                          </div>
                        </div>
                      </v-col>
                      <v-col>
                        <v-img
                          :src="slide.image"
                          height="400"                       
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- Client Logos Section -->
  <section class="tw:py-12">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <div class="tw:grid tw:grid-cols-2 md:tw:grid-cols-5 tw:gap-8 tw:items-center tw:justify-items-center">
            <div
              v-for="(logo, index) in clientLogos"
              :key="index"
              class="tw:grayscale hover:tw:grayscale-0 tw:transition-all tw:duration-300 tw:text-white"
            >
              <v-img
                :src="logo"
                :alt="`Client ${index + 1}`"
                max-height="60"
                contain
                class="tw:opacity-70 hover:tw:opacity-100 tw:transition-opacity"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- Featured Books Section -->
  <section id="featured-books" class="tw:py-16 tw:bg-gray-50">
    <v-container>
      <v-row>
        <v-col cols="12">
          <!-- Section Header -->
          <div class="tw:text-center tw:mb-12">
            <div class="tw:text-sm tw:text-gray-500 tw:uppercase tw:tracking-wider tw:mb-2">
              Some quality items
            </div>
            <h2 class="tw:text-3xl md:tw:text-4xl tw:font-bold tw:text-gray-900">
              Featured Books
            </h2>
          </div>

          <!-- Books Grid -->
          <v-row>
            <v-col
              v-for="book in featuredBooks"
              :key="book.id"
              cols="12"
              sm="6"
              md="3"
            >
              <v-card>
                <v-img
                  :src="book.image"
                  :alt="book.title"
                  height="600"
                  cover
                />
                <v-card-text class="tw:text-center tw:py-6">
                  <h3 class="tw:text-lg tw:font-semibold tw:text-gray-900 tw:mb-2">
                    {{ book.title }}
                  </h3>
                  <p class="tw:text-gray-600 tw:mb-3">
                    {{ book.author }}
                  </p>
                  <div class="tw:text-xl tw:font-bold tw:text-primary">
                    ${{ book.price.toFixed(2) }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- View All Button -->
          <v-row class="tw:mt-8">
            <v-col cols="12" class="tw:text-right">
              <v-btn
                color="primary"
                variant="text"
                append-icon="mdi-arrow-right"
                size="large"
              >
                View all products
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- Best Selling Book Section -->
  <section class="tw:py-16 tw:bg-white tw:relative">
    <!-- Background Pattern -->
    <div class="tw:absolute tw:inset-0 tw:opacity-5">
      <div class="tw:absolute tw:top-0 tw:right-0 tw:w-64 tw:h-64 tw:bg-gradient-to-bl tw:from-green-200 tw:to-transparent tw:rounded-full tw:transform tw:translate-x-32 tw:-translate-y-32"></div>
      <div class="tw:absolute tw:bottom-0 tw:left-0 tw:w-48 tw:h-48 tw:bg-gradient-to-tr tw:from-blue-200 tw:to-transparent tw:rounded-full tw:transform tw:-translate-x-24 tw:translate-y-24"></div>
    </div>
    
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-row align="center">
            <v-col cols="12" md="6">
              <v-img
                src="/assets/images/single-image.jpg"
                alt="Best Selling Book"
                class="tw:rounded-lg tw:shadow-lg"
                cover
              />
            </v-col>
            <v-col cols="12" md="6">
              <div class="tw:space-y-6">
                <div>
                  <h2 class="tw:text-3xl md:tw:text-4xl tw:font-bold tw:text-gray-900 tw:mb-4">
                    Best Selling Book
                  </h2>
                  <div class="tw:w-16 tw:h-1 tw:bg-primary tw:mb-6"></div>
                </div>
                
                <div class="tw:space-y-4">
                  <p class="tw:text-sm tw:text-gray-600 tw:uppercase tw:tracking-wider">
                    By Timbur Hood
                  </p>
                  <h3 class="tw:text-2xl tw:font-semibold tw:text-gray-900">
                    Birds gonna be happy
                  </h3>
                  <p class="tw:text-gray-600 tw:leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
                  </p>
                  <div class="tw:text-2xl tw:font-bold tw:text-primary tw:mb-6">
                    $45.00
                  </div>
                  <v-btn
                    color="primary"
                    variant="text"
                    append-icon="mdi-arrow-right"
                    size="large"
                    class="tw:px-0"
                  >
                    Shop it now
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- Popular Books Section -->
  <section id="popular-books" class="tw:py-16 tw:bg-gray-50">
    <v-container>
      <v-row>
        <v-col cols="12">
          <!-- Section Header -->
          <div class="tw:text-center tw:mb-12">
            <div class="tw:text-sm tw:text-gray-500 tw:uppercase tw:tracking-wider tw:mb-2">
              Some quality items
            </div>
            <h2 class="tw:text-3xl md:tw:text-4xl tw:font-bold tw:text-gray-900">
              Popular Books
            </h2>
          </div>

          <!-- Category Tabs -->
          <div class="tw:flex tw:flex-wrap tw:justify-center tw:mb-8 tw:space-x-2">
            <v-btn
              v-for="category in tabCategories"
              :key="category.id"
              :variant="activeTab === category.id ? 'elevated' : 'text'"
              :color="activeTab === category.id ? 'primary' : 'grey'"
              class="tw:mb-2"
              @click="setActiveTab(category.id)"
            >
              {{ category.label }}
            </v-btn>
          </div>

          <!-- Books Grid -->
          <v-row>
            <v-col
              v-for="book in popularBooks[activeTab]"
              :key="book.id"
              cols="12"
              sm="6"
              md="3"
            >
              <v-card>
                <v-img
                  :src="book.image"
                  :alt="book.title"
                  height="600"
                  cover
                />
                <v-card-text class="tw:text-center tw:py-6">
                  <h3 class="tw:text-lg tw:font-semibold tw:text-gray-900 tw:mb-2">
                    {{ book.title }}
                  </h3>
                  <p class="tw:text-gray-600 tw:mb-3">
                    {{ book.author }}
                  </p>
                  <div class="tw:text-xl tw:font-bold tw:text-primary">
                    ${{ book.price.toFixed(2) }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- Quote Section -->
  <section class="tw:py-16 tw:bg-white tw:text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <div class="tw:space-y-6">
            <h2 class="tw:text-3xl md:tw:text-4xl tw:font-bold tw:text-gray-900 tw:mb-4">
              Quote of the day
            </h2>
            <div class="tw:w-16 tw:h-1 tw:bg-primary tw:mx-auto tw:mb-8"></div>
            
            <blockquote class="tw:text-xl md:tw:text-2xl tw:text-gray-700 tw:italic tw:leading-relaxed tw:mb-6">
              "The more that you read, the more things you will know. The more that you learn, the more places you'll go."
            </blockquote>
            
            <div class="tw:text-lg tw:text-gray-600 tw:font-medium">
              Dr. Seuss
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- Special Offer Section -->
  <section id="special-offer" class="tw:py-16 tw:bg-gray-50">
    <v-container>
      <v-row>
        <v-col cols="12">
          <!-- Section Header -->
          <div class="tw:text-center tw:mb-12">
            <div class="tw:text-sm tw:text-gray-500 tw:uppercase tw:tracking-wider tw:mb-2">
              Grab your opportunity
            </div>
            <h2 class="tw:text-3xl md:tw:text-4xl tw:font-bold tw:text-gray-900">
              Books with offer
            </h2>
          </div>

          <!-- Special Offer Books Grid -->
          <v-row>
            <v-col
              v-for="book in specialOfferBooks"
              :key="book.id"
              cols="12"
              sm="6"
              md="4"
              lg="2.4"
            >

              <v-card>
                <v-img
                  :src="book.image"
                  :alt="book.title"
                  height="600"
                  cover
                />
                <v-card-text class="tw:text-center tw:py-6">
                  <h3 class="tw:text-lg tw:font-semibold tw:text-gray-900 tw:mb-2">
                    {{ book.title }}
                  </h3>
                  <p class="tw:text-gray-600 tw:mb-3">
                    {{ book.author }}
                  </p>
                  <div class="tw:text-xl tw:font-bold tw:text-primary">
                    ${{ book.price.toFixed(2) }}
                  </div>
                </v-card-text>
                <v-chip
                    v-if="book.prevPrice"
                    color="red"
                    class="tw:absolute tw:top-2 tw:right-2"
                    size="small"
                  >
                    Sale
                  </v-chip>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- Newsletter Section -->
  <section id="subscribe" class="tw:py-16 tw:bg-white">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-row align="center">
            <v-col cols="12" md="6">
              <div>
                <h2 class="tw:text-3xl md:tw:text-4xl tw:font-bold tw:text-gray-900 tw:mb-4">
                  Subscribe to our newsletter
                </h2>
                <div class="tw:w-16 tw:h-1 tw:bg-primary tw:mb-6"></div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="tw:space-y-6">
                <p class="tw:text-gray-600 tw:leading-relaxed">
                  Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.
                </p>
                <v-form @submit.prevent="subscribeNewsletter">
                  <div class="tw:flex tw:space-x-2">
                    <v-text-field
                      v-model="emailSubscription"
                      placeholder="Enter your email address here"
                      variant="outlined"
                      density="compact"
                      class="tw:flex-1"
                    />
                    <v-btn
                      type="submit"
                      color="primary"
                      variant="elevated"
                      append-icon="mdi-send"
                      class="tw:min-w-max"
                    >
                      Send
                    </v-btn>
                  </div>
                </v-form>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>



  <!-- Footer -->
  <footer class="bg-earth4 tw:text-white tw:py-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <div class="tw:space-y-4">
            <h1 class="tw:text-4xl"><span class="tw:font-bold">BK</span> Publishers</h1>
            <p class="tw:leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis.
            </p>
          </div>
        </v-col>
        
        <v-col cols="12" md="2">
          <div class="tw:space-y-4">
            <h5 class="tw:text-lg tw:font-semibold tw:mb-4">About Us</h5>
            <ul class="tw:space-y-2">
              <li><a href="#" class=" hover:tw:text-white tw:transition-colors">Vision</a></li>
              <li><a href="#" class="hover:tw:text-white tw:transition-colors">Articles</a></li>
              <li><a href="#" class="hover:tw:text-white tw:transition-colors">Careers</a></li>
              <li><a href="#" class="hover:tw:text-white tw:transition-colors">Service Terms</a></li>
              <li><a href="#" class="hover:tw:text-white tw:transition-colors">Donate</a></li>
            </ul>
          </div>
        </v-col>
        
        <v-col cols="12" md="2">
          <div class="tw:space-y-4">
            <h5 class="tw:text-lg tw:font-semibold tw:mb-4">Discover</h5>
            <ul class="tw:space-y-2">
              <li><a href="#" class="hover:tw:text-white tw:transition-colors">Home</a></li>
              <li><a href="#" class="hover:tw:text-white tw:transition-colors">Books</a></li>
              <li><a href="#" class="hover:tw:text-white tw:transition-colors">Authors</a></li>
              <li><a href="#" class="hover:tw:text-white tw:transition-colors">Subjects</a></li>
              <li><a href="#" class="hover:tw:text-white tw:transition-colors">Advanced Search</a></li>
            </ul>
          </div>
        </v-col>
        
        <v-col cols="12" md="2">
          <div class="tw:space-y-4">
            <h5 class="tw:text-lg tw:font-semibold tw:mb-4">Help</h5>
            <ul class="tw:space-y-2">
              <li><a href="#" class="hover:tw:text-white tw:transition-colors">Help Center</a></li>
              <li><a href="#" class="hover:tw:text-white tw:transition-colors">Report a Problem</a></li>
              <li><a href="#" class="hover:tw:text-white tw:transition-colors">Suggesting Edits</a></li>
              <li><a href="#" class="hover:tw:text-white tw:transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>

</template>
