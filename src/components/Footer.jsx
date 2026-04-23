import copyright from "../assets/Icons/copyright.png";

export default function Footer() {
    return (
        <div className="bg-[#0C1826] border-t border-b border-white md:border-gray-500 text-center text-white px-6 py-4">
            <h3 className="gabarito-normal text-md"><img src={copyright} alt="Copyright" className="max-w-5 inline-block -mt-1" /> {new Date().getFullYear()} EEBLA. All rights reserved.</h3>
        </div>
    )
}