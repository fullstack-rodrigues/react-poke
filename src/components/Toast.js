export default function Toast({ message, type = "error", visible }) {
  if (!visible) return null;

  const colors = {
    error: "bg-red-600 border-red-700",
    success: "bg-green-600 border-green-700",
    warning: "bg-yellow-500 border-yellow-600",
  };

  return (
    <div className="fixed top-4 right-4 z-[9999] animate-toast-in">
      <div
        className={`px-4 py-3 rounded-lg text-white border shadow-lg ${colors[type]}`}
      >
        {message}
      </div>
    </div>
  );
}
