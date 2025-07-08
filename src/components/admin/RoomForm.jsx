import React, { useState, useEffect } from "react";

export default function RoomForm({ initialData, onSubmit, onCancel }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [price, setPrice] = useState(initialData?.price || "");
  const [maxGuest, setMaxGuest] = useState(initialData?.maxGuest || "");
  const [roomSize, setRoomSize] = useState(initialData?.roomSize || "");
  const [amenities, setAmenities] = useState(initialData?.amenities?.join(", ") || "");
  const [images, setImages] = useState([]);
  const [featured, setFeatured] = useState(initialData?.featured || false);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setPrice(initialData.price);
      setMaxGuest(initialData.maxGuest);
      setRoomSize(initialData.roomSize);
      setAmenities(initialData.amenities?.join(", ") || "");
      setFeatured(initialData.featured);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !price || !maxGuest || !roomSize) {
      alert("Please fill all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("maxGuest", maxGuest);
    formData.append("roomSize", roomSize);
    formData.append("amenities", JSON.stringify(amenities.split(",").map(a => a.trim())));
    formData.append("featured", featured);

    // Append images only if new files selected
    if (images.length > 0) {
      for (const file of images) {
        formData.append("images", file);
      }
    }

    onSubmit(formData, initialData?._id);
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: "1px solid gray", padding: "10px", marginBottom: "20px" }}>
      <h3>{initialData ? "Edit Room" : "Add New Room"}</h3>
      <div>
        <label>Title *</label><br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description *</label><br />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Price *</label><br />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div>
        <label>Max Guests *</label><br />
        <input type="number" value={maxGuest} onChange={(e) => setMaxGuest(e.target.value)} required />
      </div>
      <div>
        <label>Room Size *</label><br />
        <input value={roomSize} onChange={(e) => setRoomSize(e.target.value)} required />
      </div>
      <div>
        <label>Amenities (comma separated) *</label><br />
        <input value={amenities} onChange={(e) => setAmenities(e.target.value)} required />
      </div>
      <div>
        <label>Featured</label>
        <input
          type="checkbox"
          checked={featured}
          onChange={() => setFeatured(!featured)}
        />
      </div>
      <div>
        <label>Images {initialData ? "(select to replace)" : "(minimum 3 images)"} *</label><br />
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setImages([...e.target.files])}
          // required={!initialData} // required only for new room
        />
      </div>
      <button type="submit">{initialData ? "Update Room" : "Add Room"}</button>
      {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}
