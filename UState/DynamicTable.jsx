import { useEffect, useState } from "react";

function Tab() {
    const datasSample = [
        { name: "gokul", age: 21, location: "dharmapuri" },
        { name: "lenin", age: 22, location: "thirichi" }
    ];

    const [datas, setDatas] = useState([]);

    useEffect(() => {setTimeout(() => {
            setDatas(datasSample);
        }, 2000);
        
        // Cleanup the timer on component unmount
        // return () => clearTimeout(timer);
    }, []); // Add an empty dependency array to run effect only on mount

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Location</td>
                    </tr>
                </thead>
                <tbody>
                    {datas.length === 0 && <tr><td colSpan="3">Loading...</td></tr>}
                    
                    {datas.map((da) => (
                        <tr key={da.name}>
                            <td>{da.name}</td>
                            <td>{da.age}</td>
                            <td>{da.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Tab;
