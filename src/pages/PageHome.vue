<template>
   <q-page class="q-pa-lg relative-position">
    <q-scroll-area class="absolute full-height full-width">
    <div class="text-body-1 q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input bottom-slots v-model="newPweetContent" label="What's happening?" counter maxlength="280" :dense="dense" autogrow class="new-pweet">
        <template v-slot:before>
          <q-avatar size="xl">
            <img src="https://media.licdn.com/dms/image/D4D03AQGFy-hecocbMg/profile-displayphoto-shrink_400_400/0/1670750820267?e=1689811200&v=beta&t=6furdGpSSu-EI3CWHtzUZCyUSlHbx2iL-NLoGEAge38">
          </q-avatar>
        </template>

        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Express your thoughts
        </template>
      </q-input>
      </div>
      <div class="col col-shrink">
          <q-btn unelevated rounded color="secondary" label="Pweet" no-caps :disable="!newPweetContent" class="q-mb-lg" @click="addNewTweet"/>
      </div>
    </div>
    <q-separator size="10px" color="grey-2" class="divider"/>

    <q-list>
      <q-item-label header></q-item-label>
      <transition-group
       appear
       enter-active-class="animated backInUp slow"
       leave-active-class="animated backOutUp slow"
       >
      <q-item
        v-for="pweet in pweets"
        :key="pweet.date" 
      class="q-py-md qweet"
      >
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://media.licdn.com/dms/image/D4D03AQGFy-hecocbMg/profile-displayphoto-shrink_400_400/0/1670750820267?e=1689811200&v=beta&t=6furdGpSSu-EI3CWHtzUZCyUSlHbx2iL-NLoGEAge38">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Amay Chandravanshi</strong>
            <span class="text-grey-7">  @amay_chandravanshi
              <span class="text-grey-5"> - {{pweet.date | relativeDate}}</span>
            </span>
          </q-item-label>
          <q-item-label class="pweet-content text-body1">
            {{pweet.content}}
          </q-item-label>
          <div class="pweet-icons row justify-between q-mt-sm">
            <q-btn flat round color="grey" icon="fa-solid fa-comment" size="sm" />
            <q-btn flat round color="grey" icon="fa-solid fa-retweet" size="sm" />

            <q-btn
            @click="likedPweet(pweet)" 
            flat round 
            :color="pweet.liked ? 'pink' : 'grey'"
            :icon="pweet.liked ? 'fas fa-heart' : 'far fa-heart'"
            size="sm" 
            />

            <q-btn flat round color="grey" icon="fa-solid fa-trash" size="sm" @click="deletePweet(pweet)"/>
          </div>
        </q-item-section>
        <q-item-section side top>
          
        </q-item-section>
      </q-item>
      </transition-group>
    </q-list>
  </q-scroll-area>
  </q-page>
</template>

<script>
import db from 'src/boot/firebase'
import { formatDistance } from 'date-fns'

export default {
  name: 'PageHome',
  data() {
    return {
      newPweetContent: '',
      pweets: []
    }
  },
  methods: {
    addNewTweet () {
      let newPweet= {
        content: this.newPweetContent,
        date: Date.now(),
        liked: false
      }
      db.collection('pweets').add(newPweet)
      this.newPweetContent = ''

    },
    deletePweet(pweet) {
      db.collection('pweets').where('date', '==', pweet.date).get().then(snapshot => {
        snapshot.forEach(doc => {
          doc.ref.delete()
        })
      })
    },
    likedPweet(pweet) {
      db.collection('pweets').where('date', '==', pweet.date).get().then(snapshot => {
        snapshot.forEach(doc => {
          doc.ref.update({
            liked: !pweet.liked
          })
        })
      })
    }
  },
  filters: {
    relativeDate (value) {
      formatDistance(value, new Date(), { addSuffix: true })
    }
  },
  mounted () {
    db.collection('pweets').orderBy('date', 'desc').onSnapshot(snapshot => {
      this.pweets = snapshot.docs.map(doc => doc.data())
    })
  }
}
</script>

<style lang="sass">
.new-pweet
textarea
 font-size: 19px
 line-height: 1.4 !important

.divider
 border-top: 1px solid 
 border-bottom: 1px solid
 border-color: $grey-4 

.pweet-content
 white-space: pre-line

.qweet:not(:first-child)
 border-top: 1px solid rgba(0,0,0,0.12)

.pweet-icons
 margin-left: -5px
</style>