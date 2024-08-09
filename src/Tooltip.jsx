export default function Tooltip({ message, children }) {
  return (
    <div className="group relative flex">
      {children}
      <span className="pointer-events-none z-50 absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-600 px-2 py-1 text-white text-xs opacity-0 transition before:absolute before:left-1/2 before:bottom-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-gray-600 before:content-[''] group-hover:opacity-100">
        {message}
      </span>
    </div>
  );
}
