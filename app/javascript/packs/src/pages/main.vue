<template>
  <div id="main">
    <v-app id="inspire" dark>
      <!-- navigation bar  -->
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        hide-overlay
        clipped
        fixed
        app
      >
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img
                  src="https://pbs.twimg.com/profile_images/1107052141615579136/AXi3WAml_400x400.jpg"
                >
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Gen</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn icon @click.stop="mini = !mini">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile v-for="item in items" :key="item.title" @click>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content @click="sendUrl(item.url)">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <!-- top toolbar  -->
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Gen-Blog</v-toolbar-title>
      </v-toolbar>

      <!-- main content -->
      <v-content>
        <v-container fluid>
          <v-layout>
            <v-flex>
              <router-view/>
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
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "home", url: "/" },
        {
          title: "Event",
          icon: "event",
          url: "https://calendar.google.com/calendar/r?tab=wc"
        },
        { title: "Tool", icon: "fas fa-list", url: "/tool" }
      ],
      mini: false,
      right: null
    };
  },
  methos: {
    sendUrl(url) {
      console.log(url)
    }
  }
};
</script>
