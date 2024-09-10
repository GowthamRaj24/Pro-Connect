import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Nav=()=>{
    const router=useRouter();
    const [showMenu,setShowMenu]=useState(false);
    return(
        <div className="flex flex-row w-256 mx-auto justify-between p-3 z-40 sticky">
            <button onClick={()=>{
                router.push('/dashboard')
            }}>
            <h1 className="text-2xl font-bold">PROCONNECT</h1>
            </button>
            <button onClick={()=>{
                setShowMenu(!showMenu);
            }}>
                <RxHamburgerMenu size={30}/>
            </button>
            {showMenu && (
                <div className="absolute top-16 right-0 w-64 bg-white rounded-md p-3 z-40" style={{
                    boxShadow:"0 0 10px rgba(0,0,0,0.2)"
                }}>
                    <button className="w-full p-2 my-2">Dashboard</button>
                    <button className="w-full p-2 my-2">Profile</button>
                    <button className="w-full p-2 my-2">Events</button>
                    <button className="w-full p-2 my-2">Communities</button>
                    <button className="w-full p-2 my-2">Mentorship</button>
                    <button className="w-full p-2 my-2">Discuss</button>
                    <button className="w-full p-2 my-2">Projects</button>
                    <button className="w-full p-2 my-2">Initiatives</button>
                    <button className="w-full p-2 my-2">Donations</button>
                    <button className="w-full p-2 my-2">ATS Score</button>
                    <button className="w-full p-2 my-2">Cover letter</button>
                    <button className="w-full p-2 my-2"
                        onClick={()=>{
                            signOut();
                        }}
                    >Logout</button>
                </div>
            )}
        </div>
    );
};
export default Nav;