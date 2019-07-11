export default function(arr,num){
    var arr1 = []
    for(var i in arr){
        if(i%num == 0){
            var arr2 = []
            arr1.push(arr2)
        }
        arr2.push(arr[i])
        
    }
    return arr1
}