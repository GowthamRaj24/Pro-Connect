import { useState } from "react";
import { useSession } from "next-auth/react";

const AddStudentDetails = () => {
    const [popUp, setPopUp] = useState(true);
    const [userDetails, setUserDetails] = useState([]);
    const [alumniDetails, setAlumniDetails] = useState([]);
    const {data, status} = useSession();

    const { data: session, status: sessionStatus } = useSession();



    return (
        <>
            {sessionStatus && session?.role === "student" && (
                <>
                    <p>Student Details: {userDetails}</p>
                    <input type="text" value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />
                    <input type="text" value={userDetails.registrationNumber} onChange={(e) => setUserDetails({...userDetails , registrationNumber : e.target.value})}/>
                    <input type="text" value={userDetails.department} onChange={(e)=>setUserDetails({...userDetails ,department : e.target.department })} />
                    <input type="text" value={userDetails.year} onChange={(e)=>setUserDetails({...userDetails , year : e.target.value })} />
                    <select multiple value={userDetails.skills} onChange={(e) => setUserDetails({ ...userDetails, skills: Array.from(e.target.selectedOptions, option => option.value) })}>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JavaScript">JavaScript</option>
                    </select>
                    <select multiple value={userDetails.interestDomain} onChange={(e) => setUserDetails({ ...interestDomain, skills: Array.from(e.target.selectedOptions, option => option.value) })}>
                        <option value="ML">HTML</option>
                        <option value="AI">CSS</option>
                        <option value="WEB3">JavaScript</option>
                    </select>


                </>
            )}

            {sessionStatus && session?.role === "alumni" && (
                <>
                    
                    <p>Alumni Details: {alumniDetails}</p>
                    <input type="text" value={alumniDetails.company} onChange={(e) => setAlumniDetails({ ...alumniDetails, company: e.target.value })} />
                    <input type="text" value={alumniDetails.designation} onChange={(e) => setAlumniDetails({ ...alumniDetails, designation: e.target.value })} />
                    <input type="text" value={alumniDetails.yearsOfExperience} onChange={(e) => setAlumniDetails({ ...alumniDetails, yearsOfExperience: e.target.value })} />
                    <input type="text" value={alumniDetails.degree} onChange={(e) => setAlumniDetails({ ...alumniDetails, department: e.target.value })} />

                    <select multiple value={alumniDetails.skills} onChange={(e) => setAlumniDetails({ ...alumniDetails, skills: Array.from(e.target.selectedOptions, option => option.value) })}>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JavaScript">JavaScript</option>
                    </select>
                    
                </>
            )}
        </>
    );
};

export default AddStudentDetails;
