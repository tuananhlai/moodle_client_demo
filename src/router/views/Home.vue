<template>
  <course-line>
    <div>
      <v-row>
        <v-col>
          <v-card min-height="150" class="mx-auto text-center px-5" outlined>
            <v-card-title class="pt-12 text-h3">Moodle Plus</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="overflow-y-auto px-5" outlined>
            <v-card-text class="text-h6">
              <b>Welcome!</b>
              <p
                >This site is a plain installation of
                <a href="http://download.moodle.org/"
                  >the latest stable version of Moodle</a
                >
                using the Boost theme.<br
              /></p>
              <p
                >Use one of the following demo accounts to
                <a href="/login">log in</a> and play with it:<br
              /></p>
              <ul
                ><li><em>admin / sandbox</em></li
                ><li><em>manager / sandbox</em></li
                ><li><em>teacher / sandbox</em></li
                ><li><em>student / sandbox</em></li></ul
              >
              <p
                >This site is reset to its blank state every hour, on the
                hour.</p
              >
              <p
                >To see a more interesting demo site with more realistic
                content, visit:
                <a href="http://school.moodledemo.net/">Mount Orange School</a
                >.</p
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </course-line>
</template>

<script>
import CourseLine from "../layouts/CourseLine.vue";

export default {
  name: "Home",
  components: {
    CourseLine,
  },
};
</script>
<style scoped></style>
