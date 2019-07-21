<template>
    <v-toolbar color="blue" dark fixed>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title class="mr-4">Vue To-Do</v-toolbar-title>
        <v-toolbar-items>
          <v-btn flat v-if="isLoggedIn"><v-icon class="mr-2">playlist_add_check</v-icon> Projects</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat class="mr-2" to="/register" v-if="!isLoggedIn">
            <v-icon class="mr-2">account_box</v-icon>
            Register
          </v-btn>
            <v-btn flat class="mr-2" v-if="!isLoggedIn">
              <v-icon class="mr-2">fingerprint</v-icon>
              Login
            </v-btn>
          <v-btn flat class="mr-2" v-if="isLoggedIn" @click="logout">
            <v-icon class="mr-2">exit_to_app</v-icon>
            Logout
          </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed:{
    ...mapGetters('authentication',[
      'isLoggedIn',
    ]),
  },
  methods:{
    ...mapActions('authentication',[
      'logout',
    ]),
  },
};
</script>

<style>

</style>
