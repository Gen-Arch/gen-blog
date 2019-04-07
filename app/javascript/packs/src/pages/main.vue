<template>
  <div id="main">
    <v-app id="inspire" dark>
      <!-- top toolbar  -->
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Gen-Blog</v-toolbar-title>
        <v-toolbar-items class="hidden-sm-and-down" v-for="menu in menus">
          <v-btn flat>{{ menu }}</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-autocomplete
          v-model="select"
          :loading="loading"
          :items="items"
          append-icon="search"
          :search-input.sync="search"
          cache-items
          flat
          hide-no-data
          hide-details
          label="search?"
          solo-inverted
        ></v-autocomplete>
      </v-toolbar>

      <!-- main content -->
      <v-content>
        <v-container fluid>
          <v-layout justify-space-around  >
            <v-flex xs2>
              <Menu></Menu>
            </v-flex>
            <v-flex xs6>
              <router-view/>
            </v-flex>
            <v-flex xs3>
              <Profile></Profile>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <!-- footer -->
      <v-footer app fixed>
        <span>&copy; 2017</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Menu from "../components/menu.vue";
import Profile from "../components/profile.vue";
export default {
  components: {
    Menu: Menu,
    Profile: Profile,
   },
  data() {
    return {
      loading: false,
      search: null,
      select: null,
      menus: ["tool"],
      items: [],
      states: ["Alabama", "Alaska", "American Samoa"]
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    }
  }
};
</script>
<style lang="sass" scoped>
</style>

