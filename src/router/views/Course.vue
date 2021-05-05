<template>
  <course-line>
    <v-container>
      <v-row>
        <v-col>
          <v-card min-height="150" class="mx-auto text-center px-5" outlined>
            <v-card-title class="pt-12 text-h3">Math Course</v-card-title>
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
            <v-list two-line>
              <v-list-item-group active-class="primary--text">
                <template>
                  <v-list-item :key="item.title" v-for="item in items">
                    <v-list-item-content>
                      <v-list-item-title
                        class="text-h4"
                        v-text="item.title"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
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

export default {
  name: "Course",
  components: {
    CourseLine,
  },
  data: () => ({
    items: [
      {
        title: "Topic 1",
      },
      {
        title: "Topic 2",
      },
      {
        title: "Topic 3",
      },
      {
        title: "Topic 4",
      },
      {
        title: "Topic 5",
      },
    ],
  }),
};
</script>
<style scoped></style>
