<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-primary text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon 
      name="lab la-phoenix-framework" 
      size="sm" 
      class="q-pa-sm lt-md absolute-center" 
      color="secondary" />
        </q-toolbar-title>

        
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered :width="400">
        <q-icon 
      name="lab la-phoenix-framework" 
      size="4em" 
      class="q-pa-sm" 
      color="secondary" />

      <q-list>
      <q-item 
      to="/"
      clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="fa-solid fa-house" />
        </q-item-section>

        <q-item-section class="text-h6" text-weight-bold>Home</q-item-section>
      </q-item>
      <q-item 
      to="/about"
      clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="las la-address-card" />
        </q-item-section>

        <q-item-section class="text-h6" text-weight-bold>About Us</q-item-section>
      </q-item>
    </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered :width="450">
      <q-input outlined rounded class="q-ma-md" placeholder="Search Phoenix" dense>
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-list padding separator>
      <q-item>
        <q-item-section>
          <q-item-label overline>What's Happening around you</q-item-label>
          <q-item-label class="text-weight-bold">Education</q-item-label>
          <q-item-label caption lines="4">Pimpri Chinchwad College of Engineering (PCCoE) is a prestigious educational institution located in Pune, Maharashtra, India. Established with the vision of imparting quality technical education, PCCoE has been a pioneer in nurturing young minds and preparing them for the challenges of the rapidly evolving professional world. This educational clipping provides insights into the outstanding features and initiatives of PCCoE that make it a sought-after college for aspiring engineers.</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label caption>5 min. ago</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          
          <q-item-label class="text-weight-bold">Startups</q-item-label>
          <q-item-label caption lines="4">"Remote Work on the Rise: Companies Embrace Flexible Work Arrangements"
As the concept of remote work gains traction, more companies are embracing flexible work arrangements. A recent survey shows that over 60% of businesses now offer remote work options, recognizing the benefits of increased productivity, reduced costs, and improved work-life balance for employees.</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label caption>10 min. ago</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          
          <q-item-label class="text-weight-bold">Remote Work and Jobs</q-item-label>
          <q-item-label caption lines="4">"Remote Work on the Rise: Companies Embrace Flexible Work Arrangements"
As the concept of remote work gains traction, more companies are embracing flexible work arrangements. A recent survey shows that over 60% of businesses now offer remote work options, recognizing the benefits of increased productivity, reduced costs, and improved work-life balance for employees.</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label caption>15 min. ago</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          
          <q-item-label class="text-weight-bold">Mentorship and Career Guidance</q-item-label>
          <q-item-label caption lines="4">"Notable Business Leader Joins Mentorship Program for Aspiring Entrepreneurs"
Renowned business leader, Mukesh Ambani, known for his successful ventures and leadership acumen, has joined a mentorship program aimed at supporting aspiring entrepreneurs. Through this program, Smith will share his expertise and insights, guiding the next generation of business innovators towards success.</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label caption>20 min. ago</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          
          <q-item-label class="text-weight-bold">Mentorship and Career Guidance</q-item-label>
          <q-item-label caption lines="4">"Career Exploration Workshop Helps Students Discover Their Passion"
A local community organization hosted a career exploration workshop, providing students with valuable insights into various professions. The interactive session included talks by professionals from diverse fields, helping participants gain a better understanding of different career paths and guiding them towards pursuing their passions.</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label caption>25 min. ago</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          
          <q-item-label class="text-weight-bold">Mentorship and Career Guidance</q-item-label>
          <q-item-label caption lines="4">"Industry Experts Offer Resume Writing Tips to Job Seekers"
In an effort to support job seekers in their career journeys, a panel of industry experts conducted a resume writing workshop. Participants received guidance on crafting effective resumes, highlighting their skills and experiences to stand out in competitive job markets. The workshop also addressed current trends and best practices in resume design.</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label caption>1 hr. ago</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>