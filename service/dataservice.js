contactms={
    1000:{userid:1055,password:"abc123"},
    1002:{userid:1074,password:"abc321"}
}
 login=(userids,password)=>{
    // console.log(userid,password);
    
    if(userids in contactms){
        return{
            status:true,
            message:'ok',
            statusCode:201
        }
        
    }
    else{
        return{
            status:false,
            message:"noo",
            statusCode:401
        }
    }
}
module.exports={
    login
}
