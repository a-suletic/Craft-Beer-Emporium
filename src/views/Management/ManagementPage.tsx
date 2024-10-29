import React from 'react';
import Sidebar from './Sidebar';
import BeerGraphs from './Graphs/beer-graph';
import GenericTable from './BeerTable';
import { BeerType } from '../../types/beer_type';
import { COLUMNS_BEER } from '../../utils/constants';
import { useStore } from '../../store/store';

const columns = COLUMNS_BEER;

function ManagementPage() {
  const beers = useStore((state) => state.beers);

  const handleAddNew = (beer: BeerType) => {
    console.log('Adding new item:', beer);
  };

  const handleEdit = (beer: BeerType) => {
    console.log('Editing item:', beer);
  };

  const handleDelete = (beer: BeerType) => {
    console.log('Deleting item:', beer);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 overflow-y-auto">
        <h1 className="text-2xl font-bold p-4">Top 10 Beer Sales</h1>
        <BeerGraphs />
        <div className="w-40 px-4 pt-4">
          <button className="bg-orange-400 text-white py-3 lg:px-4 rounded-md">
            New Beer
          </button>
        </div>

        <GenericTable<BeerType>
          columns={columns}
          data={beers}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default ManagementPage;
