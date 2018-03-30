import tokenUtil from './token';
import * as global from '../utils/global';
import axios from 'axios';
let token1 = ''; //token
export default {
  async post(url, params, cb) {
    let token = await tokenUtil.get(params, tokenUtil.exp);
    if (token) {
      // console.log("token="+token)
      console.log('JSON.stringify(params)=' + JSON.stringify(params));
      var searchParams = new URLSearchParams();
      searchParams.set('password', 'grapebaba1');
      searchParams.set('username', 'grapebaba1');
      searchParams.set('orgName', 'Hlc');
      await fetch(global.HOST + url, {
        // credentials: 'include',
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
          token
        },
        body: searchParams
      })
        .then(response => response.json())
        .then(res => {
          cb(res);
          token1 = res.token;
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log('信息已过期，请重新登陆');
    }
  },
  async postOther(url, method, cb) {
    console.log('global.token=' + token1);
    let token = 'Bearer ' + token1;
    await fetch(global.HOST + url, {
      // credentials: 'include',
      method: method || 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: token
      }
    })
      .then(response => response.json())
      .then(res => {
        cb(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  async postOther2(url, method, data, cb) {
    console.log('global.token=' + token1);
    let token = 'Bearer ' + token1;
    await fetch(global.HOST + url, {
      // credentials: 'include',
      method: method || 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: token
      },
      body: data
    })
      .then(response => response.json())
      .then(res => {
        cb(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  async postOther1(url, data, cb) {
    console.log('global.token=' + token1);
    let token = 'Bearer ' + token1;
    await axios
      .post(global.HOST + url, data, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          authorization: token
        }
      })
      //   .then(response => response.json())
      .then(res => {
        cb(res);
      });
    //  await   fetch(global.HOST+url, {
    //             // credentials: 'include',
    //             method: 'POST',
    //             mode: "cors",
    //             headers: {
    //                 'Content-Type': 'application/json; charset=utf-8',
    //                 'authorization':token
    //             },
    //             body:data
    //         })
    //         .then(response => response.json())
    //         .then(res => {
    //             cb(res)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
  }
};
