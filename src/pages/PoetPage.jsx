import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PoetHeader from '../components/PoetHeader';
import Divider from "../components/Divider"
import { fetchPoems } from "../api/api"
import PoemsLayout from '../layouts/PoemsLayout';
import Navbar from "../layouts/Navbar"

const PoetPage = () => {
    const { name } = useParams();
    const [poems, setPoems] = useState([])
    const getPoems = async () => {
        try {
            const result = await fetchPoems(name);
            setPoems(result)
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        getPoems();
    }, []);

    return (
        <div>
            <Navbar />
            <PoetHeader name={name} />
            <Divider msg="Poems" />
            <PoemsLayout poems={poems} />
        </div>
    )
}

export default PoetPage