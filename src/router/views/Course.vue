<template>
  <course-line>
    <v-container>
      <v-row>
        <v-col>
          <v-card min-height="150" class="mx-auto text-center px-5" outlined>
            <v-card-title class="pt-12 text-h3">{{ course.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col xl="9">
          <v-card class="overflow-y-auto px-5" outlined>
            <v-card-text class="blue--text text-h5 my-5">
              <v-icon color="blue">{{ "mdi-forum" }}</v-icon>
              News Forum
            </v-card-text>
            <v-divider width="98%" class="mx-auto"></v-divider>
            <v-expansion-panels accordion>
              <v-expansion-panel
                v-for="topic in topics"
                :key="topic.title"
                class="text-h5"
              >
                <v-expansion-panel-header class="text-h4">{{
                  topic.title
                }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ topic.content }}
                  <v-list>
                    <v-list-item v-for="item in items" :key="item.id">
                      <v-item-icon>
                        <v-icon>
                          {{ item.icon }}
                        </v-icon>
                      </v-item-icon>
                      <v-list-item-title>
                        {{ item.name }}
                      </v-list-item-title>
                      <v-checkbox
                        v-model="model"
                        :value="item"
                        :value-comparator="comparator"
                      ></v-checkbox>
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
        <v-col xl="3">
          <v-row class="mr-1 mb-3">
            <v-card width="100%" outlined>
              <v-card-text class="text-h6"> Search forums </v-card-text>
              <v-text-field
                label="Name Forum"
                placeholder="xyz"
                outlined
                class="mx-4"
              ></v-text-field>
            </v-card>
          </v-row>
          <v-row class="mr-1 mb-3">
            <v-card width="100%" outlined>
              <v-card-text class="text-h6">
                Latest announcements
                <p class="text-body-1"
                  >(No announcements have been posted yet.)</p
                >
              </v-card-text>
            </v-card>
          </v-row>
          <v-row class="mr-1 mb-3">
            <v-card width="100%" outlined>
              <v-card-text class="text-h6">
                Upcoming events
                <p class="text-body-1">There are no upcoming events</p>
              </v-card-text>
            </v-card>
          </v-row>
          <v-row class="mr-1 mb-3">
            <v-card width="100%" outlined>
              <v-card-text class="text-h6">
                Recent activity
                <p class="text-body-1"
                  >Activity since Monday, 3 May 2021, 9:28 PM</p
                >
                <p class="text-body-1">No recent activity</p>
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </course-line>
</template>

<script>
import CourseLine from "../layouts/CourseLine.vue";
import axios from "axios";
const BASE_URL = "http://localhost:8001";

export default {
  name: "Course",
  props: {
    courses: [],
  },
  components: {
    CourseLine,
  },
  data: () => ({
    course: [],
    topics: [],
    items: [
      {
        id: 1,
        name: "Slide1",
        icon: "mdi-file-document-edit-outline",
      },
      {
        id: 2,
        name: "Slide2",
        icon: "mdi-file-document-edit-outline",
      },
      {
        id: 3,
        name: "Slide3",
        icon: "mdi-file-document-edit-outline",
      },
      {
        id: 4,
        name: "Assignment",
        icon: "mdi-file-table",
      },
    ],
  }),
  created() {
    this.getCourse();
    this.getTopics();
  },
  methods: {
    getCourse() {
      axios
        .get(BASE_URL + "/api/courses/" + this.$route.params.id)
        .then(response => {
          this.course = response.data[0];
        })
        .catch(e => {
          this.error.push(e);
        });
    },
    getTopics() {
      axios
        .get(BASE_URL + "/api/courses/" + this.$route.params.id + "/contents")
        .then(response => {
          this.topics = response.data.data;
        })
        .catch(e => {
          this.error.push(e);
        });
    },
  },
};
</script>
<style scoped></style>
