import React, { useState, useEffect } from "react";



function Details(props) {
    const [data, setData] = useState([
        { 
            location: {
                city: "",
                state: "",
            },
            img: {
                url: "",
                title: "",
            },
            contact: {
                phone: "",
                email: "",
            },
            availability: {
                "mon": null,
                "tue": null,
                "wed": null,
                "thu": null,
                "fri": null,
                "sat": null,
                "sun": null
            },
            name: "Neal",
            age: 26,
            skills: [""],
            workHistory: [
                {
                    title: "",
                    company: "",
                    _id: ""
                }
            ],
            openForWork: true,
            rating: 5,
            }
    ]);
    const url = `http://localhost:8000/api/search/?name=${props.match.params.name}`
    console.log(url)

    // Function to get data from API
    const getData = () => {
        fetch (url)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setData(res)
            })
    }

    // Call getData function inside of UseEffect
    useEffect(() => {
        getData()
    }, [])
    console.log(data[0].name)
    console.log(data[0].img)

    return (
        <section className = "detailsContainer">
            <h3>Employee Profile</h3>
            <p className = "profileName">{data[0].name}, {data[0].age}</p>
            <p className = "profileLocation">{data[0].location.city}, {data[0].location.state}</p>
            <img className = "profileImage"
                src= {data[0].img.url}
                alt={data[0].title}
             />
            <p className = "jobTitle">{data[0].workHistory[0].title}</p>
            <p className = "company">{data[0].workHistory[0].company}</p>
            <p className = "availability">{data[0].availability.mon}</p>

        </section>
    );
}

export default Details;