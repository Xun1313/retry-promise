// 模擬時間間隔再次呼叫 api
// 只有 api 完全沒回應

// function apiPackage() {
//     return new Promise(async(resolve, reject) => {
//         let sum = 0
//         let status = false
        
//         不會回傳 promise，log 順序會不如預期
//         async await 可以控制 promise，但本身不會回傳 promise
//         const requestApi = async () => {
//             setTimeout(async () => {
//                 try {
//                     const data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//                     console.log(77777);
//                     return data
//                 } catch (error) {
//                     console.log(88888);
//                     return new Error(error)
//                 }
//             }, 3000);
//         }

//         const requestApi = () => {
//             return new Promise((res, rej) => {
//                 setTimeout(async () => {
//                     try {
//                         const data = await fetch(`https://jsonplaceholde.typicode.com/posts`)
//                         console.log(777);
//                         res(data)
//                     } catch (error) {
//                         console.log(88888);
//                         rej(error)
//                     }
//                 }, 3000);
//             })
//         }

//         while (sum < 4 && !status) {
//             try {
//                 const result = await requestApi()
//                 console.log(66666);
//                 console.log(result);

//                 status = true

//                 resolve(result)
//             } catch (error) {
//                 console.log(456)
//                 sum += 1
//             }
//         }
    
//         reject('result failed!')
//     })
// }


// apiPackage()

// (1)async await 自帶回傳 promise
// (2)resolve, reject 由 return 決定
const apiPackage= async (time = 1000, times = 4) => {
    let sum = 0
    let status = false

    try {
        const requestApi = () => {
            return new Promise((res, rej) => {
                setTimeout(async () => {
                    try {
                        const data = await fetch(`https://jsonplaceholde.typicode.com/posts`)
                        console.log(777);
                        res(data)
                    } catch (error) {
                        console.log(88888);
                        rej(error)
                    }
                }, time);
            })
        }

        while (sum < times && !status) {
            try {
                const result = await requestApi()
                console.log(66666);
                console.log(result);

                status = true

                return result
            } catch (error) {
                console.log(456)
                sum += 1
            }
        }
    
        throw new Error('result failed!')
    } catch (error) {
        return error
    }
}

(async () => console.log(await apiPackage(3000, 6)))()