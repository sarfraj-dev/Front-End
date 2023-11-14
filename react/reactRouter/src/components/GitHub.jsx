import React,{useState,useEffect} from 'react'

// import { useRouteLoaderData } from 'react-router-dom'
function GitHub() {


    const [data,setdata]=useState([])
    useEffect(()=>{
fetch('https://api.github.com/users/hiteshchoudhary')
.then((res)=>res.json())
.then((data)=>setdata(data))

    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white'>
      GitHub Followers{data.followers}
      <img src={data.avatar_url} alt=""  width={300}/>
    </div>
  )
}

export default GitHub
// export let gitHubInfo=async()=>{
//    const response= await fetch('https://api.github.com/users/hiteshchoudhary')
//    return response.json()
// }
