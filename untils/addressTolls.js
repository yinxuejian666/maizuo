export default function foo(arr){
    var result = [{index: "A" ,list:[]}];

    for(var i = 0 ; i < arr.length ; i ++){
        
        var addressFirst = arr[i].pinyin.charAt(0).toUpperCase();

        if(setIndex(addressFirst)){
            for(var j = 0 ; j < result.length ; j++){
                if(result[j].index == addressFirst){
                    result[j].list.push(arr[i].name)
                }
            }
        }
        else{
             result.push({index : addressFirst , list:[arr[i].name]})
             
        }
        
    };
    
    result.sort(function(n1,n2){
        if(n1.index > n2.index){
            return 1
        }
        else{
            return -1
        }
    });
    return result ;
   

   function setIndex(addressFirst){
    for (var i=0; i<result.length; i++){
        if(result[i].index == addressFirst){
            return true
        }
    }
    return false;
}  
}