import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";
import Header from "./components/header";
import NotFound from "./pages/NotFound";

function App() {
    const [cards, setCards] = useState([]);

    const handleAddCard = (newCard) => {
        setCards((prevCards) => [...prevCards, newCard]);
    };

    const handleDeleteCard = (id) => {
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    };

    const handleUpdateCard = (updatedCard) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === updatedCard.id ? updatedCard : card
            )
        );
    };

    const handleSaveToFile = () => {
        const fileData = JSON.stringify(cards, null, 2);
        const blob = new Blob([fileData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "cards_data.json";
        link.click();
    };

    return (
        <Router>
            <Header />
            <button onClick={handleSaveToFile}>
                Download Cards as JSON
            </button>{" "}
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            cards={cards}
                            onUpdateCard={handleUpdateCard}
                            onDeleteCard={handleDeleteCard}
                        />
                    }
                />
                <Route
                    path="/Add_Product"
                    element={<AddProduct onAddCard={handleAddCard} />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
