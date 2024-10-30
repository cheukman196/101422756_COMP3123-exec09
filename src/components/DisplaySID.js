import { useState } from "react";

export default function SID(){
    const [studentId, setStudentId] = useState(101422756);

    const incrementStudentId = () =>{
        setStudentId((prevStudentId) => prevStudentId + 1);
    }

    return(
        <div>
            <div>Student ID: {studentId}</div>
            <button style={{margin: '10px'}} onClick={incrementStudentId}>Increment Student ID</button>
            <button onClick={() => setStudentId(101422756)}>Reset to My Student ID</button>
        </div>
    )
}