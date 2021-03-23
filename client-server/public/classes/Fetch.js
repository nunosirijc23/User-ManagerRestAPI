class Fetch {

    /* metodo para as requisições do tipo GET */
    static get(url, params = {}) {

        return Fetch.request('GET', url, params)

    }

    /* metodo para as requisições do tipo POST */
    static post(url, params = {}) {

        return Fetch.request('POST', url, params)

    }

    /* metodo para as requisições do tipo PUT */
    static put(url, params = {}) {

        return Fetch.request('PUT', url, params)

    }

    /* metodo para as requisições do tipo DELETE */
    static delete(url, params = {}) {

        return Fetch.request('DELETE', url, params)

    }

    /* metodo que faz as requisições */
    static request(method, url, params = {}) {

        return new Promise((resolve, reject) => {

            let request

            switch (method.toLowerCase()) {
                
                case 'get':

                    request = url
                    break;
            
                default:
                    request = new Request(url, {
                        method,
                        body: JSON.stringify(params),
                        headers: new Headers({
                            'Content-Type': 'application/json'
                        })
                    })
            }

            fetch(request).then( response => {

                response.json().then( json => {

                    resolve(json)

                }).catch( error => {

                    reject(e)

                })

            }).catch( e => {

                reject(e)

            })

        })

    }

}