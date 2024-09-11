import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const AddStudentDetails = () => {
    const [userDetails, setUserDetails]: any = useState({
        email: "",
        registrationNumber: "",
        department: "",
        year: "",
        skills: [],
        interestDomain: [],
        filled: true
    });
    const [alumniDetails, setAlumniDetails]: any = useState({
        company: "",
        designation: "",
        yearsOfExperience: "",
        degree: "",
        skills: [],
        filled: true
    });
    const { data: session, status: sessionStatus }: any = useSession();

    const addStudentDetails = async () => {
        try {
            const res = await axios.post("../api/addUserDetails?userId" + session?.user?._id, userDetails);
            if (res.status === 200) {
                console.log("Student details added successfully");
            } else {
                console.log("Error adding student details");
            }
        } catch (error) {
            console.log("Error adding student details:", error);
        }
    };

    const addAlumniDetails = async () => {
        try {
            const res = await axios.post("../api/addUserDetails?userId" + session?.user?._id, alumniDetails);
            if (res.status === 200) {
                console.log("Alumni details added successfully");
            } else {
                console.log("Error adding alumni details");
            }
        } catch (error) {
            console.log("Error adding alumni details:", error);
        }
    };

    const onSubmit = async () => {
        if (session?.user?.role === "student") {
            await addStudentDetails();
        } else if (session?.user?.role === "alumni") {
            await addAlumniDetails();
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
                {sessionStatus === "authenticated" && session?.user?.role === "student" && (
                    <>
                        <h2 className="text-2xl font-bold mb-6 text-indigo-600">Student Details</h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                value={userDetails.email}
                                onChange={(e) =>
                                    setUserDetails({ ...userDetails, email: e.target.value })
                                }
                                placeholder="Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <input
                                type="text"
                                value={userDetails.registrationNumber}
                                onChange={(e) =>
                                    setUserDetails({
                                        ...userDetails,
                                        registrationNumber: e.target.value,
                                    })
                                }
                                placeholder="Registration Number"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <input
                                type="text"
                                value={userDetails.department}
                                onChange={(e) =>
                                    setUserDetails({ ...userDetails, department: e.target.value })
                                }
                                placeholder="Department"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <input
                                type="text"
                                value={userDetails.year}
                                onChange={(e) =>
                                    setUserDetails({ ...userDetails, year: e.target.value })
                                }
                                placeholder="Year"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <label className="block text-gray-700">Skills:</label>
                            <select
                                multiple
                                value={userDetails.skills}
                                onChange={(e) =>
                                    setUserDetails({
                                        ...userDetails,
                                        skills: Array.from(e.target.selectedOptions, (option) => option.value),
                                    })
                                }
                                className="w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="HTML">HTML</option>
                                <option value="CSS">CSS</option>
                                <option value="JavaScript">JavaScript</option>
                            </select>

                            <label className="block text-gray-700">Interest Domain:</label>
                            <select
                                multiple
                                value={userDetails.interestDomain}
                                onChange={(e) =>
                                    setUserDetails({
                                        ...userDetails,
                                        interestDomain: Array.from(e.target.selectedOptions, (option) => option.value),
                                    })
                                }
                                className="w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="ML">ML</option>
                                <option value="AI">AI</option>
                                <option value="WEB3">WEB3</option>
                            </select>
                        </div>
                        <button
                            onClick={onSubmit}
                            className="mt-6 w-full px-4 py-2 font-semibold text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </>
                )}

                {sessionStatus === "authenticated" && session?.user?.role === "alumni" && (
                    <>
                        <h2 className="text-2xl font-bold mb-6 text-indigo-600">Alumni Details</h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                value={alumniDetails.company}
                                onChange={(e) =>
                                    setAlumniDetails({ ...alumniDetails, company: e.target.value })
                                }
                                placeholder="Company"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <input
                                type="text"
                                value={alumniDetails.designation}
                                onChange={(e) =>
                                    setAlumniDetails({ ...alumniDetails, designation: e.target.value })
                                }
                                placeholder="Designation"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <input
                                type="text"
                                value={alumniDetails.yearsOfExperience}
                                onChange={(e) =>
                                    setAlumniDetails({ ...alumniDetails, yearsOfExperience: e.target.value })
                                }
                                placeholder="Years of Experience"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <input
                                type="text"
                                value={alumniDetails.degree}
                                onChange={(e) =>
                                    setAlumniDetails({ ...alumniDetails, degree: e.target.value })
                                }
                                placeholder="Degree"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <label className="block text-gray-700">Skills:</label>
                            <select
                                multiple
                                value={alumniDetails.skills}
                                onChange={(e) =>
                                    setAlumniDetails({
                                        ...alumniDetails,
                                        skills: Array.from(e.target.selectedOptions, (option) => option.value),
                                    })
                                }
                                className="w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="HTML">HTML</option>
                                <option value="CSS">CSS</option>
                                <option value="JavaScript">JavaScript</option>
                            </select>
                        </div>
                        <button
                            onClick={onSubmit}
                            className="mt-6 w-full px-4 py-2 font-semibold text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default AddStudentDetails;
