import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct({ onAddCard }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCard = {
            id: Date.now(),
            title,
            content,
            image,
            time: new Date().toLocaleString(),
        };

        onAddCard(newCard);

        setTitle("");
        setContent("");
        setImage("");
        setImageFile(null);
        navigate("/");
    };

    return (
        <div className="add-product-container p-6">
            <h2 className="text-2xl font-semibold mb-4">Create a New Card</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Card Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2"
                    required
                />
                <textarea
                    placeholder="Card Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2"
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="border border-gray-300 rounded px-4 py-2"
                    required
                />
                {image && (
                    <img
                        src={image}
                        alt="Preview"
                        className="mt-4 max-h-64 object-contain"
                    />
                )}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    Add Card
                </button>
            </form>
        </div>
    );
}

export default AddProduct;
