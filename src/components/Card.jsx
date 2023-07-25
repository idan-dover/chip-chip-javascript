function Card({ children }) {
  return (
    <div className="flex flex-col w-full p-2 border rounded-lg shadow-2xl dark:shadow-gray-600 border-amber-500 dark:border-amber-300 lg:max-w-lg">
      {children}
    </div>
  );
}

export default Card;
