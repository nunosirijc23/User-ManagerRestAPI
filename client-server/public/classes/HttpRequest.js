class HttpRequest {

    /* metodo para as requisições do tipo GET */
    static get(url, params = {}) {

        return HttpRequest.request('GET', url, params)

    }

    /* metodo para as requisições do tipo POST */
    static post(url, params = {}) {

        return HttpRequest.request('POST', url, params)

    }

    /* metodo para as requisições do tipo PUT */
    static put(url, params = {}) {

        return HttpRequest.request('PUT', url, params)

    }

    /* metodo para as requisições do tipo DELETE */
    static delete(url, params = {}) {

        return HttpRequest.request('DELETE', url, params)

    }

    /* metodo que faz as requisições */
    static request(method, url, params = {}) {

        return new Promise((resolve, reject) => {

            let ajax = new XMLHttpRequest() // criando o ajax 

            ajax.open(method.toUpperCase() , url) // definindo o metodo e a url
            
            ajax.onerror = error => {

                reject(error) // promise retorna erro  se houver uma falha ao fazer a requisição

            }
    
            ajax.onload = event => {
    
                let obj = {}
      
                try {
    
                    obj = JSON.parse(ajax.responseText) // ajax retorna os dados da requisição
                    
                } catch (error) {
                    
                    reject(error) // promise retorna erro caso os dados não forem os desejados
                    console.error(error)
    
                }

                resolve(obj) // promise retorna os dados pedidos na requisição
    
            }
            
            ajax.setRequestHeader('Content-Type', 'application/json') // definindo o tipo de conteudo da requisição
            ajax.send(JSON.stringify(params)) // ajax enviando a requisição

        })

    }

}