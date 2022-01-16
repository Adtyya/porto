import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero()
{
    return(
        <>
        <div className="wrapper-hero flex justify-center items-center h-[90vh] flex-col">
            <div>
                <p className="text-lg md:text-xl">
                    <span className="emoji px-2">👋</span>
                    Hello there, iam Aditya Fitriansyah
                </p>
            </div>
        </div>
        <div className="flex justify-center items-center h-[5vh]">
            <p className="text-md">My Projects</p>
        </div>
        <div className="flex justify-center h-[5vh] items-center">
            <a href="#project" className="text-2xl hover:text-5xl">
                <FontAwesomeIcon icon={faAngleDown} />
            </a>
        </div>
        </>
    )
}