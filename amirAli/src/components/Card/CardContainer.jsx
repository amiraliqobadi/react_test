import { useState } from "react";
import CreateCard from "./CreateCard";
import MyCard from "./MyCard";

function CardContainer() {
    const [cards, setCards] = useState([]);

    const handleCreateCard = (newCard) => {
        newCard.id = Date.now();
        setCards([...cards, newCard]);
    };

    const handleDeleteCard = (id) => {
        setCards(cards.filter((card) => card.id !== id));
    };

    const handleUpdateCard = (id, updatedTitle, updatedContent) => {
        setCards(
            cards.map((card) =>
                card.id === id
                    ? { ...card, title: updatedTitle, content: updatedContent }
                    : card
            )
        );
    };

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {cards.map((card) => (
                    <MyCard
                        key={card.id}
                        card={card}
                        onDelete={handleDeleteCard}
                        onUpdate={handleUpdateCard}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardContainer;
