import axios from 'axios'
import Vue from 'vue'
import { url } from '../store/modules/axiosUrl'


class FileUploadService {
  upload(company, file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);
    
    var accessToken = Vue.prototype.$auth.getAccessToken();
    return axios.post(url + "api/partners/"+ company +"/upload", formData, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }

  getFiles(company) {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    return axios.get(url + "api/partners/" + company + "/files", {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
  }

  deleteFile(company, fileName) {
    
    var accessToken = Vue.prototype.$auth.getAccessToken();
    return axios.delete(url + "api/partners/" + company + "/files/" + fileName, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
  }
}

export default new FileUploadService();
