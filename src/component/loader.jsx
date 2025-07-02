function Loader() {
  return (
    <div
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm transition-all"
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <div className="relative w-16 h-16">
        <div
          className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"
          aria-hidden="true"
        ></div>
        <div
          className="absolute inset-0 rounded-full border-4 border-blue-300 opacity-30"
          aria-hidden="true"
        ></div>
      </div>

      <p className="mt-4 text-blue-800 font-semibold animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
}

export default Loader;
