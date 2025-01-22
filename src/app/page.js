"use client";

import dbConnect from "@/lib/dbConnections";
import { useState } from "react";

export default function Home() {
  const [isLoading,setLoading] = useState(false)
  const [url, setUlr] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [data,setData]=useState("");
  const submitHandler=async(e)=>{

    try {
      e.preventDefault();
      await dbConnect()
      const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify({
    "originalLink": url,
    "shortLink": shortUrl
  });
  
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  setLoading(true)
  
  fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api`, requestOptions)
    .then((response) => response.json())
    .then((result) =>{
      setLoading(false)
      alert("success")
        console.log(result);
        setData(`${process.env.NEXT_PUBLIC_DOMAIN}/${result.data.shortLink}`)
        setUlr("");
        setShortUrl("");
    
    })
    .catch((error) => console.error(error));
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="md:w-full bg-gray-400 flex flex-col md:h-screen  items-center justify-center">
        <div className=" md:w-[60%] h-[70%] text-center bg-gray-600 rounded-lg shadow">
          <div className=" mx-auto pt-5 md:w-full h-screen text-center items-center">
            <h5 className="text-white text-xl font-bold">Shortner Link</h5>
            <p className="text-gray-300 text-xl">
              A simple and secure URL shortener
            </p>

            <form className="px-8 justify-center" onSubmit={submitHandler}>
              <input
                className="border-2 border-gray-400 my-4 md:w-1/2 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                placeholder="Enter your long URL"
                value={url}
                onChange={(e)=>setUlr(e.target.value)}
              />
              <br />
              <input
                className="border-2 border-gray-400 md:w-1/2  py-2 px-4 rounded-lg focus:outline-none"
                type="text"
                placeholder="Enter your link name"
                value={shortUrl}
                onChange={(e)=>setShortUrl(e.target.value)}
              />
              <br />
              <button
                className="mt-5 bg-green-500 text-white w-full md:w-1/2 px-4 py-2  rounded-lg hover:bg-green-600"
                type="submit"
              >
                {isLoading? "Loading...":"Shorten"}
             
              </button>
            </form>
          
      
            {data && <div className="text-white my-4 ">Your shortened link is: <a  className="text-blue-500 underline " href={data}>{data}</a></div>}
         
          </div>
        </div>
      </div>
    </>
  );
}
