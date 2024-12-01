import React, { useEffect, useRef } from "react";
import Divider from "../components/Divider"
const PoemModal = ({ isOpen, onClose, title, lines }) => {
    const modalRef = useRef(null);

    // Close modal when clicking outside
    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    // Close modal on Esc key press
    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
            document.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div
                ref={modalRef}
                className="relative w-11/12 max-w-4xl bg-white border-2 border-black"
            >
                {/* Modal Content */}
                <div className="flex flex-col h-full transform transition-transform">
                    {/* Modal Header */}
                    <div className="p-6 flex justify-between items-center">
                        <h2 className="text-2xl font-medium">{title}</h2>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-400 hover:text-gray-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <Divider msg="" />

                    <div className="p-6 overflow-y-auto max-h-[75vh]">
                        {lines.map((line, index) => (
                            <p key={index} className="text-lg" style={{ fontFamily: "Garamond" }}>
                                {line}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoemModal;
