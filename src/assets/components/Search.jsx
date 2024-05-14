const Search = ({ searchMovies, textMovies }) => {
  return (
    <form onSubmit={searchMovies} className="flex justify-center mb-6">
      <input
        className=" border border-purple-700 text-purple-900 text-sm rounded-lg focus:ring-purple-700 focus:border-purple-700 block w-4/6 me-4 mb-2 px-5 py-2.5"
        placeholder="Busca otros títulos..."
        type="text"
        onChange={textMovies}
      />
      <button className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-2">
        Buscar
      </button>
    </form>
  );
};

export default Search;
