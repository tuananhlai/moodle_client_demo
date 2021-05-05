<template>
  <course-line>
    <div>
      <v-row>
        <v-col>
          <v-card min-height="150" class="mx-auto text-center px-5" outlined>
            <v-card-title class="pt-12 text-h3">Private files</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="overflow-y-auto px-5" outlined> </v-card>
        </v-col>
      </v-row>
    </div>
  </course-line>
</template>

<script>
import CourseLine from "../layouts/CourseLine.vue";

export default {
  name: "Files",
  components: {
    CourseLine,
  },
};
</script>
<style scoped></style>
