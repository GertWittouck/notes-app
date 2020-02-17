<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import { TodosApi } from "@/api/api";
import { mount } from "@vue/test-utils";
import { getModule } from "vuex-module-decorators";
import TodosStore from "@/store/modules/todosStore";

@Component({
  components: {
    HelloWorld
  }
})
export default class Counter extends Vue {
  todos = [];

  created() {
    const todosStoreInstance = getModule(TodosStore, this.$store);
    console.log(todosStoreInstance);
    TodosApi.getTodos()
      .then(data => todosStoreInstance.updateTodos(data))
      .catch(error => console.log(error));
  }
}
</script>
