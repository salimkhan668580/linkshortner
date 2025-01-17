import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className="w-full bg-blue-500 py-3">
  <ul className="flex space-x-6 justify-center">
    <Link href={"/"}><li className="text-white rounded-lg px-6 bg-yellow-500 hover:bg-yellow-600 border py-2 transition duration-300">Home</li></Link>
  
  </ul>

</div>

  )
}
export default Nav