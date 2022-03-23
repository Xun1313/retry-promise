// 模擬 api 一開始壞的，最後呼叫到正常的
// 只有 api 完全沒回應

// (function apiPackage() {
//     return new Promise(async(resolve, reject) => {
//         let sum = 0
//         let status = false
    
//         while (sum < 4 && !status) {
//             try {
//                 const data = await fetch(`https://${sum > 1 ? 'jsonplaceholder' : 'jsonplaceholde'}.typicode.com/posts`)
//                 status = true

//                 resolve(data)
//             } catch (error) {
//                 console.log(456)
//                 sum += 1
//             }
//         }
    
//         reject('result failed!')
//     })
// })()

const apiPackage= async () => {
    let sum = 0
    let status = false

    try {
        while (sum < 4 && !status) {
            try {
                const data = await fetch(`https://${sum > 1 ? 'jsonplaceholder' : 'jsonplaceholde'}.typicode.com/posts`)
                status = true

                return data
            } catch (error) {
                console.log(456)
                sum += 1
            }
        }

        throw new Error('result failed!')
    } catch (error) {
        console.log(error);
        return error
    }
}

(async () => console.log(await apiPackage()))()