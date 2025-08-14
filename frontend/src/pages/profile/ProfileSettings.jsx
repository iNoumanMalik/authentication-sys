import { useState } from "react";
import { FaEdit, FaSave, FaCamera } from "react-icons/fa";

export default function ProfileSettings() {
  const [user, setUser] = useState({
    picture: "https://via.placeholder.com/150", // Mock picture
    name: "Jon Snow",
    password: "********",
  });

  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");
  const [tempImage, setTempImage] = useState(null);

  // Password popup state
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleEditClick = (field) => {
    if (field === "password") {
      setShowPasswordPopup(true);
      return;
    }
    setEditingField(field);
    setTempValue(user[field]);
  };

  const handleSaveClick = () => {
    setUser({ ...user, [editingField]: tempValue });
    setEditingField(null);
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setTempImage(previewURL);
      setUser({ ...user, picture: previewURL });
    }
  };

  const handlePasswordSave = () => {
    // Normally you'd validate current password via backend
    if (currentPassword && newPassword) {
      setUser({ ...user, password: "********" }); // Mask password
      setCurrentPassword("");
      setNewPassword("");
      setShowPasswordPopup(false);
    }
  };

  return (
    <div className="w-full p-20 bg-white rounded-lg shadow space-y-6">
      <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>

      {/* Profile Picture */}
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <img
            src={tempImage || user.picture}
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
      {["name", "password"].map((field) => (
        <div
          key={field}
          className="flex justify-between items-center border-b pb-3 mx-60"
        >
          <div>
            <strong className="capitalize">{field}:</strong>{" "}
            {editingField === field ? (
              <input
                type="text"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="border px-2 py-1 rounded ml-2"
              />
            ) : (
              <span className="ml-2">
                {field === "password" ? "********" : user[field]}
              </span>
            )}
          </div>

          {editingField === field ? (
            <button
              className="text-green-600 hover:text-green-800"
              onClick={handleSaveClick}
            >
              <FaSave />
            </button>
          ) : (
            <button
              className="text-blue-600 hover:text-blue-800"
              onClick={() => handleEditClick(field)}
            >
              <FaEdit />
            </button>
          )}
        </div>
      ))}

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
