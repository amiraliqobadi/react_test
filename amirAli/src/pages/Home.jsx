import React, { useState } from "react";

function Home({ cards, onUpdateCard, onDeleteCard }) {
    const [isEditing, setIsEditing] = useState(null);
    const [editedCard, setEditedCard] = useState({
        title: "",
        content: "",
        image: "",
    });

    const handleEditClick = (card) => {
        setIsEditing(card.id);
        setEditedCard({
            title: card.title,
            content: card.content,
            image: card.image,
        });
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        onUpdateCard({ ...editedCard, id: isEditing });
        setIsEditing(null);
        setEditedCard({ title: "", content: "", image: "" });
    };

    return (
        <div className="home-container p-6">
            <h1 className="text-2xl font-semibold mb-4">My Cards</h1>
            {cards.length === 0 ? (
                <p>No cards available. Create one!</p>
            ) : (
                <div className="cards-list w-fit flex gap-8 flex-wrap">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="card border rounded p-4 mb-4 shadow"
                        >
                            {isEditing === card.id ? (
                                <form
                                    onSubmit={handleUpdateSubmit}
                                    className="flex flex-col"
                                >
                                    <input
                                        type="text"
                                        value={editedCard.title}
                                        onChange={(e) =>
                                            setEditedCard({
                                                ...editedCard,
                                                title: e.target.value,
                                            })
                                        }
                                        className="border border-gray-300 rounded px-4 py-2"
                                        required
                                    />
                                    <textarea
                                        value={editedCard.content}
                                        onChange={(e) =>
                                            setEditedCard({
                                                ...editedCard,
                                                content: e.target.value,
                                            })
                                        }
                                        className="border border-gray-300 rounded px-4 py-2"
                                        required
                                    />
                                    <input
                                        type="text"
                                        value={editedCard.image}
                                        onChange={(e) =>
                                            setEditedCard({
                                                ...editedCard,
                                                image: e.target.value,
                                            })
                                        }
                                        className="border border-gray-300 rounded px-4 py-2"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                                    >
                                        Update Card
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsEditing(null)}
                                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition mt-2"
                                    >
                                        Cancel
                                    </button>
                                </form>
                            ) : (
                                <div>
                                    <h2 className="font-bold text-xl">
                                        {card.title}
                                    </h2>
                                    <p>{card.content}</p>
                                    {card.image && (
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-40 mt-2 max-h-64 object-contain"
                                        />
                                    )}
                                    <p className="text-gray-500 text-sm mt-2">
                                        Uploaded at: {card.time}
                                    </p>
                                    <button
                                        onClick={() => handleEditClick(card)}
                                        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => onDeleteCard(card.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
