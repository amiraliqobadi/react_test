import { useState } from "react";

function CreateCard({ onCreate }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleCreate = () => {
        if (title && content) {
            const newCard = {
                title,
                content,
                time: new Date().toLocaleString(),
            };
            onCreate(newCard);
            setTitle("");
            setContent("");
        } else {
            alert("Please fill out both the title and content");
        }
    };

    return (
        <div className="w-96 block rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Create a new card
            </h2>

            <div className="mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 mb-4 text-blue-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                    />
                </svg>
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    className="w-full rounded border border-gray-300 p-2"
                    placeholder="Card title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <textarea
                    className="w-full rounded border border-gray-300 p-2"
                    placeholder="Card content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            <button
                onClick={handleCreate}
                className="w-full inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700"
            >
                Create Card
            </button>
        </div>
    );
}

export default CreateCard;
