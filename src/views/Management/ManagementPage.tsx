import React, { useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import BeerGraphs from './Components/Graphs/beer-graph';
import { BeerType } from '../../types/beer_type';
import { COLUMNS_BEER, INIT_BEER } from '../../utils/constants';
import { useStore } from '../../store/store';
import AddBeerModal from './Components/BeerModal';
import { useShallow } from 'zustand/react/shallow';
import { CommonTable } from '../../components/Table/common-table';
import Button from '../../components/Button';

function ManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const {
    beers,
    addBeer,
    removeBeer,
    setSelectedForEdit,
    updateBeer,
    fetchBeers,
  } = useStore(
    useShallow((state) => ({
      beers: state.displayBeers,
      addBeer: state.addBeer,
      removeBeer: state.removeBeer,
      setSelectedForEdit: state.setSelectedForEdit,
      updateBeer: state.updateBeer,
      fetchBeers: state.fetchBeers,
    }))
  );

  useEffect(() => {
    const getBeers = async () => {
      await fetchBeers();
    };
    getBeers();
  }, []);

  const handleEdit = (beer: BeerType) => {
    setIsEdit(true);
    setSelectedForEdit(beer);
    setIsModalOpen(true);
  };

  const handleDelete = (beer: BeerType) => {
    removeBeer(beer.id);
  };

  const handleAddBeer = (newBeer: BeerType) => {
    isEdit ? updateBeer(newBeer) : addBeer(newBeer);
    setIsEdit(false);
  };

  const onClose = () => {
    setIsModalOpen(false);
    setIsEdit(false);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 overflow-y-auto">
        <BeerGraphs />
        <div className="w-40 px-4 pt-4">
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="primary"
            size="small"
          >
            New Beer
          </Button>
        </div>

        <CommonTable<BeerType>
          columns={COLUMNS_BEER}
          data={beers}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <AddBeerModal
          isOpen={isModalOpen}
          onClose={onClose}
          onAdd={handleAddBeer}
          isEdit={isEdit}
        />
      </div>
    </div>
  );
}

export default ManagementPage;
