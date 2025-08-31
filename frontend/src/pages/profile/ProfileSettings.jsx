import { useEffect, useState } from "react";
import { FaEdit, FaSave, FaCamera } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

export default function ProfileSettings() {
  const user = useOutletContext();
  const [form, setForm] = useState({
    name: user.name || "",
    avatarUrl: user.avatarUrl || "",
  });
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [editingField, setEditingField] = useState(null);
  const [error, setError] = useState("");

  const handleEditClick = (field) => {
    if (field === "password") {
      setShowPasswordPopup(true);
    } else {
      setEditingField(field);
    }
  };

  const handleSaveClick = () => {
    console.log("Saving profile:", form);
    setEditingField(null);
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setForm((prev) => ({ ...prev, avatarUrl: previewURL }));
    }
    console.log("Saving profile:", form);

  };

  const handlePasswordSave = () => {
    if (currentPassword && newPassword) {
      console.log("Password change:", { currentPassword, newPassword });
      setCurrentPassword("");
      setNewPassword("");
      setShowPasswordPopup(false);
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/user/me", form);
      console.log(res.data.user);
    } catch (err) {
      setError(err.response?.data?.error);
    }
  };

  return (
    <div className="w-full p-20 bg-white rounded-lg shadow space-y-6">
      <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>

      {/* Profile Picture */}
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <img
            src={form.avatarUrl}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border"
          />
          <label
            htmlFor="pictureInput"
            className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-700"
          >
            <FaCamera />
          </label>
          <input
            type="file"
            id="pictureInput"
            className="hidden"
            accept="image/*"
            onChange={handlePictureChange}
          />
        </div>
        <p className="text-gray-500 mt-2">Change Picture</p>
      </div>

      {/* Editable Fields */}
      <div className="flex justify-between items-center border-b pb-3 mx-60">
        <div>
          <strong>Name:</strong>{" "}
          {editingField === "name" ? (
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border px-2 py-1 rounded ml-2"
            />
          ) : (
            <span className="ml-2">{form.name}</span>
          )}
        </div>

        {editingField === "name" ? (
          <button
            className="text-green-600 hover:text-green-800"
            onClick={handleSaveClick}
          >
            <FaSave />
          </button>
        ) : (
          <button
            className="text-blue-600 hover:text-blue-800"
            onClick={() => handleEditClick("name")}
          >
            <FaEdit />
          </button>
        )}
      </div>

      {/* Password */}
      <div className="flex justify-between items-center border-b pb-3 mx-60">
        <div>
          <strong>Password:</strong> <span className="ml-2">********</span>
        </div>
        <button
          className="text-blue-600 hover:text-blue-800"
          onClick={() => handleEditClick("password")}
        >
          <FaEdit />
        </button>
      </div>

      <div className="flex justify-between items-center mx-60">
      {error && <p className="text-red-500">{error}</p>}
        <button onClick={updateProfile} className="bg-blue-500 text-white w-30 hover:bg-blue-400">Save</button>
      </div>


      {/* Password Change Popup */}
      {showPasswordPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Change Password</h3>
            <div className="mb-3">
              <label className="block mb-1">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="border px-3 py-2 w-full rounded"
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border px-3 py-2 w-full rounded"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowPasswordPopup(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordSave}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
