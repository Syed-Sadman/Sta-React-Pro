import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            Hello from home
            <Link to='/'>Go back to the previous page</Link>
        </div>
    )
}

export default Home
