const user = {
    name: "Jon Snow",
    email: "jon@test.com",
    joined: "14-April-2025",
    role: "Admin",
  };
  
  export default function ProfileInfo() {
    return (
      <div className="flex flex-col sm:flex-row items-center sm:items-start w-full">
        {/* Left Side - Profile Photo */}
        <div className="flex flex-col items-center w-full sm:w-1/2 mb-6 sm:mb-0">
          <img
            src="https://ui-avatars.com/api/?name=Jon+Snow&background=random&size=150"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 mb-4"
          />
  
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
            Choose Photo
          </button>
        </div>
  
        {/* Right Side - User Details */}
        <div className="w-full sm:w-1/2 sm:pl-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">User Details</h2>
  
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-medium">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-medium">Joined:</span> {user.joined}
            </p>
            <p>
              <span className="font-medium">Role:</span> {user.role}
            </p>
          </div>
        </div>
      </div>
    );
  }
  