import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
            <div className="flex flex-wrap items-center justify-between gap-5 w-full">
                <ul className="flex w-full items-center justify-center gap-x-5">
                    <li className="px-3">
                        <Link
                            to="/"
                            className={`block font-semibold text-[15px] px-3 ${
                                currentPath === "/"
                                    ? "text-[#007bff]"
                                    : "text-gray-500 hover:text-[#007bff]"
                            }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="px-3">
                        <Link
                            to="/Add_Product"
                            className={`block font-semibold text-[15px] px-3 ${
                                currentPath === "/Add_Product"
                                    ? "text-[#007bff]"
                                    : "text-gray-500 hover:text-[#007bff]"
                            }`}
                        >
                            Add Product
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
