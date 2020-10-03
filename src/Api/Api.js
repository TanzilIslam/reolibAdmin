import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://cdn.resultonlinebd.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getContentOwners(){
      return apiClient.get('/createOwner').then(function(e){
          console.log(e.data)
      }).catch(e=>{
          console.log(e);
      })
  },
  createContentOwner(payload){
       let profileImg = new FormData();
       let coverImg = new FormData();
       profileImg.append("file", payload.authorsprofilrimg);
       coverImg.append("file", payload.authorsprofilrimg)
       console.log( profileImg,  coverImg);

       console.log( profileImg,coverImg);
      return apiClient.post('/createOwner',{
          authorsname:payload.authorsname,
          authorsprofilrimg: profileImg,
          authorsweblink: payload.authorsweblink,
          about: payload.about,
          coverImg: coverImg,
          is_active: payload.is_active,
          page_title:payload.page_title,
          focus_keyword: payload.focus_keyword,
          meta_keyword:payload.meta_keyword,
          description:payload.description
    },
      {
         headers: {
        "Content-Type": "multipart/form-data"
      },
      },
      ).then(function(e){
          console.log(e);
      }).catch(e=>{
          console.log(e);
      })
  }
}