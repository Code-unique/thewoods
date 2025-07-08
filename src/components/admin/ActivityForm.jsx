// src/components/admin/ActivityForm.jsx
import React, { useState, useEffect } from "react";

const categories = ["Cultural", "Events", "Nature", "Adventure"];

export default function ActivityForm({ initialData, onSubmit, onCancel }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [longDescription, setLongDescription] = useState(
    initialData?.longDescription || ""
  );
  const [category, setCategory] = useState(initialData?.category || categories[0]);
  const [groupSize, setGroupSize] = useState(initialData?.groupSize || "");
  const [icon, setIcon] = useState(initialData?.icon || "");
  const [featured, setFeatured] = useState(initialData?.featured || false);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setLongDescription(initialData.longDescription);
      setCategory(initialData.category);
      setGroupSize(initialData.groupSize);
      setIcon(initialData.icon);
      setFeatured(initialData.featured);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !longDescription || !groupSize || !icon) {
      alert("Please fill all required fields");
      return;
    }

    if (!initialData && !imageFile) {
      alert("Image is required for new activity");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("longDescription", longDescription);
    formData.append("category", category);
    formData.append("groupSize", groupSize);
    formData.append("icon", icon);
    formData.append("featured", featured);

    if (imageFile) {
      formData.append("file", imageFile);
    }

    onSubmit(formData, initialData?._id);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ border: "1px solid gray", padding: "10px", marginBottom: "20px" }}
    >
      <h3>{initialData ? "Edit Activity" : "Add New Activity"}</h3>
      <div>
        <label>Title *</label><br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description *</label><br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Long Description *</label><br />
        <textarea
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Category *</label><br />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Group Size *</label><br />
        <input value={groupSize} onChange={(e) => setGroupSize(e.target.value)} required />
      </div>
      <div>
        <label>Icon *</label><br />
        <input value={icon} onChange={(e) => setIcon(e.target.value)} required />
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
        <label>Image {initialData ? "(select to replace)" : "*"} </label><br />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          required={!initialData}
        />
      </div>
      <button type="submit">{initialData ? "Update Activity" : "Add Activity"}</button>
      {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}
