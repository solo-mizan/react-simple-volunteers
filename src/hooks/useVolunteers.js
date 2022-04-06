import { useEffect, useState } from "react"

const useVolunteers = () => {
    [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('datad.json')
            .then(res => res.json())
            .then(data => setVolunteers(data));
    }, [])
    return [volunteers, setVolunteers];
}

export default useVolunteers;