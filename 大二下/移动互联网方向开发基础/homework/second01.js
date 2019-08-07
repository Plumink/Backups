function fun(str1){
    var str = "赵钱孙李周吴郑王冯陈楮卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜";
    if(str.indexOf(str1)<0){
        console.log("该姓氏不存在！");
    }else{
        console.log("姓氏位置是："+str.indexOf(str1));
        
        if(str.slice(0,str.indexOf(str1)) == ""){
            console.log("该姓氏之前姓氏不存在!");
        }else{
            console.log("该姓氏之前的姓氏是:"+str.slice(0,str.indexOf(str1)));
        }
    }
}
fun("吕");