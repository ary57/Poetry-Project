import React, { useEffect, useState } from 'react'
import { fetchAuthors } from "../api/api"
import HomeLayout from '../layouts/HomeLayout'
import Navbar from "../layouts/Navbar"

const Home = () => {
  const [authors, setAuthors] = useState([])

  const getAuthors = async () => {
    try {
      const result = await fetchAuthors();
      setAuthors(result)
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getAuthors();
  }, []);
  return (
    <div>
      <Navbar />
      <HomeLayout authors={authors} />
    </div>
  )
}

export default Home