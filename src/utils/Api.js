const fetchDataFromApi =async(url,params)=>{
try{
const {data}=await axios.get(BASE_URL+url,{
    header,
    params,
}) 
}
catch (err){
console.log(err);
return err;
}
}