export default {
    async set(key, value) {
        let currentTime = new Date().getTime();
        await localStorage.setItem(key, JSON.stringify({
            data: value,
            time: currentTime
        }))
    },
    async get(key, exp) {
        let data = " ";
        data = await localStorage.getItem(key);
        if (data) {
            let dataObj = JSON.parse(data);
            if (+new Date() - dataObj.time > exp) {
                console.log('信息已过期');
                data = " ";
            } else {
                let dataObjDatatoJson = JSON.parse(dataObj.data);
                data = dataObjDatatoJson;
            }
        } else {
            data = " ";
        }

        return new Promise((resolve, reject) => {
            resolve(data)
        });
    },
    exp: 1000
}