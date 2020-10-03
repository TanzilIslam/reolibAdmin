<template>
  <div class="create-content-owner">
    <div class="row">
      <div class="col-md-6">
        <card>
          <h4 slot="header" class="card-title">Add Content Owner</h4>
          <form>
            <div class="row">
              <div class="col-md-12">
                <base-input
                  type="text"
                  label="Author Name"
                  placeholder="Name"
                  v-model="author.authorsname"
                >
                </base-input>
              </div>
              <div class="col-md-12">
                <base-input
                  type="text"
                  label="Website Link"
                  placeholder="Link"
                  v-model="author.authorsweblink"
                >
                </base-input>
              </div>

              <div class="col-md-6">
                <input type="file" ref="file1" @change="selectProfilePicture" />

                <!-- <base-input
                  type="file"
                  label="Profile Picture"
                  placeholder="Picture"
                  v-model="author.authorsprofilrimg"
                >
                </base-input> -->
              </div>

              <div class="col-md-6">
                <input type="file" ref="file2" @change="selectCoverPhoto" />

                <!-- <base-input
                  type="file"
                  label="Cover Image"
                  placeholder="Picture"
                  v-model="author.coverImg"
                >
                </base-input> -->
              </div>
              <div class="d-flex">
                <base-checkbox
                  :checked="author.is_active"
                  :disabled="false"
                  label="Is Active"
                  :inline="false"
                  v-model="author.is_active"
                >
                </base-checkbox>
                <p class="pt-1">Is Active</p>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label>About Author</label>
                  <textarea
                    rows="5"
                    class="form-control border-input"
                    placeholder="Here can be author's description"
                    v-model="author.about"
                  >
                  </textarea>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
          </form>
        </card>
      </div>
      <div class="col-md-6">
        <card>
          <h4 slot="header" class="card-title">Seo Information</h4>
          <form>
            <div class="row">
              <div class="col-md-12">
                <base-input
                  type="text"
                  label="Page Title"
                  placeholder="Title"
                  v-model="author.page_title"
                >
                </base-input>
              </div>
              <div class="col-md-12">
                <base-input
                  type="text"
                  label="Focus Keyword"
                  placeholder="Keywords"
                  v-model="author.focus_keyword"
                >
                </base-input>
              </div>

              <div class="col-md-12">
                <base-input
                  type="text"
                  label="Meta Keyword"
                  placeholder="Keywords"
                  v-model="author.meta_keyword"
                >
                </base-input>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label>Meta Description</label>
                  <textarea
                    rows="5"
                    class="form-control border-input"
                    placeholder="Meta Description"
                    v-model="author.description"
                  >
                  </textarea>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
          </form>
        </card>
      </div>
      <div class="mx-auto">
        <button
          type="submit"
          class="btn btn-info btn-fill float-right"
          @click.prevent="updateProfile"
        >
          Update Profile
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "src/components/Cards/Card.vue";
import Api from "src/Api/Api.js";

export default {
  created() {
    // Api.getContentOwners();
  },
  components: {
    Card
  },
  data() {
    return {
      author: {
        is_active: true
      }
    };
  },
  methods: {
    selectProfilePicture() {
      this.author.authorsprofilrimg = this.$refs.file1.files;
      console.log(this.author.authorsprofilrimg);
    },
    selectCoverPhoto() {
      this.author.coverImg = this.$refs.file2.files;
      console.log(this.author.coverImg);
    },
    updateProfile() {
      console.log(this.author);
      if (
        this.author.authorsname &&
        this.author.authorsprofilrimg &&
        this.author.authorsweblink &&
        this.author.about &&
        this.author.coverImg &&
        this.author.page_title &&
        this.author.focus_keyword &&
        this.author.meta_keyword &&
        this.author.description !== ""
      ) {
        Api.createContentOwner(this.author);
      } else {
        alert("Every Field must be filled with valied data!!!");
      }
    }
  }
};
</script>
<style scoped>
.create-content-owner {
  padding: 20px;
}
</style>
