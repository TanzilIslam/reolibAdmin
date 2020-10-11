import axios from "axios";
import { from } from "core-js/fn/array";

const apiClient = axios.create({
  baseURL: "http://cdn.resultonlinebd.com/",
  withCredentials: false,
  timeout: 10000
});

export default {
  getContentOwners() {
    return apiClient
      .get("/createOwner")
      .then(function(e) {
        console.log(e.data);
      })
      .catch(e => {
        console.log(e);
      });
  },
  createContentOwner(payload) {

    let pi = new FormData();
    pi.append(
      "image",
      payload.authorsprofilrimg,
      payload.authorsprofilrimg.name
    );
    console.log('Payload',payload);
    apiClient
      .post("createOwner", {
        authorsname: payload.authorsname,
        authorsprofilrimg: pi,
        // authorsprofilrimg: payload.authorsprofilrimg,
        authorsweblink: payload.authorsweblink,
        about: payload.about,
        coverImg: null,
        is_active: payload.is_active,
        page_title: payload.page_title,
        focus_keyword: payload.focus_keyword,
        meta_keyword: payload.meta_keyword,
        description: payload.description

      }
      ,
      {headers: {

        "Content-Type": "multipart/form-data"
      }
    } 
    )
      .then(function(e) {
        console.log(e);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
