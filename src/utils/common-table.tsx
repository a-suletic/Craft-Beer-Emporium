import React, { useState } from 'react';
import Button from '../components/Button';

interface Column<T> {
  Header: string;
  accessor: keyof T | 'actions';
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onDelete: (item: T) => void;
  onEdit: (item: T) => void;
}

export const CommonTable = <T extends Record<string, any>>({
  columns,
  data,
  onDelete,
  onEdit,
}: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto p-4">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-700 sticky top-0">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.accessor as string}
                  className="py-3 px-6 border-b border-gray-300 text-left text-gray-100 font-semibold"
                >
                  {column.Header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row) => (
              <tr
                key={row.id}
                className="even:bg-gray-50 hover:bg-gray-100 transition duration-150"
              >
                {columns.map((column) => (
                  <td
                    key={column.accessor as string}
                    className="py-2 px-6 border-b border-gray-200 text-gray-800 text-sm"
                  >
                    {column.accessor === 'actions' ? (
                      <div className="flex space-x-4">
                        <button
                          onClick={() => onEdit(row)}
                          className="text-blue-500 hover:text-blue-700 transition duration-150"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => onDelete(row)}
                          className="text-red-500 hover:text-red-700 transition duration-150"
                        >
                          Delete
                        </button>
                      </div>
                    ) : (
                      row[column.accessor as keyof T]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4 mx-4 pb-4">
        <Button
          onClick={handlePreviousPage}
          variant="secondary"
          size="small"
          disabled={currentPage === 1}
        >
          Previous
        </Button>

        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={handleNextPage}
          variant="secondary"
          size="small"
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
