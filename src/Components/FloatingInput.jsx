const FloatingInput = ({ label, type = "text", value, onChange, error }) => {
  return (
    <div className="relative w-full mb-6">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`peer w-full p-4 pt-6 text-white bg-transparent rounded-sm 
                    ring-1 ring-gray-50 focus:ring-2 focus:ring-gray-200 
                    placeholder-transparent focus:outline-none 
                    ${error ? "ring-red-500" : ""}`}
      />

      <label
        className={`absolute left-4 text-gray-400 text-base 
                    transition-all duration-200 
                    pointer-events-none
                    ${
                      value
                        ? "top-1 text-sm text-gray-400"
                        : "top-4 text-base text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-400"
                    }`}
      >
        {label}
      </label>

      {error && (
        <p className="text-red-500 text-xs font-semibold mt-1">
          🛑 {error}
        </p>
      )}
    </div>
  );
};

export default FloatingInput;