// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data=useLoaderData({})
    // const [data,setData]=
// useEffect(()=>
// {
//     fetch('https://api.github.com/users/appuborkar')
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//         setData(data)
//     })
// },
// [])
  return (
    <div className='text-center m-4 p-4 bg-gray-500 text-white'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} height={300} className=" flex self-center"></img>
    </div>
  )
}
export default Github

export  const githubLoader=async ()=>{
    const res = await fetch('https://api.github.com/users/appuborkar')
    return res.json()
}