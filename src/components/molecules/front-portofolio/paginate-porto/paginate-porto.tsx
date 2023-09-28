import { motion } from "framer-motion";
interface PaginatePortofolioProps {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
  previousPage: () => void;
  nextPage: () => void;
}

const PaginatePortofolio: React.FC<PaginatePortofolioProps> = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="flex justify-center items-center py-10 space-x-5">
      <button
        disabled={currentPage === 1 ? true : false}
        onClick={previousPage}
        type="button"
        className="bg-slate-200 text-dark-blue rounded-l-md border-r border-gray-100 py-2 hover:bg-dark-blue hover:text-white px-3">
        <div className="flex flex-row align-middle">
          <span className="ml-2">Prev</span>
        </div>
      </button>

      <ul className="flex items-center space-x-2 font-light">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`border ${
              currentPage === number
                ? " border-slate-900 bg-slate-800 dark:bg-dark-blue text-white"
                : "border-gray-300 hover:bg-gray-200 hover:border-gray-200 bg-white text-gray-500"
            } rounded-full   `}>
            <span
              onClick={() => paginate(number)}
              className="w-8 h-8 flex items-center justify-center cursor-pointer">
              {number}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={nextPage}
        type="button"
        className="bg-slate-200 text-dark-blue rounded-r-md py-2 border-l border-gray-200 hover:bg-dark-blue hover:text-white px-3">
        <div className="flex flex-row align-middle">
          <span className="mr-2">Next</span>
        </div>
      </button>
    </motion.div>
  );
};

export default PaginatePortofolio;
