import React, { useEffect, useState } from 'react';
import { BeerType } from '../../../types/beer_type';
import { useStore } from '../../../store/store';
import { INIT_BEER } from '../../../utils/constants';

interface AddBeerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newBeer: BeerType) => void;
  isEdit: boolean;
}

const BeerModal: React.FC<AddBeerModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  isEdit,
}) => {
  const [formData, setFormData] = useState<BeerType>(INIT_BEER);
  const beerForEdit = useStore((state) => state.selectedForEdit);

  useEffect(() => {
    if (beerForEdit) {
      setFormData(beerForEdit);
    }
  }, [beerForEdit]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEdit) {
      onAdd({ ...formData, id: beerForEdit.id }); // Set ID from selected beer
    } else {
      onAdd({ ...formData, id: new Date().getTime().toString() }); // Generate a unique ID
    }
    onClose();
    setFormData(INIT_BEER);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md h-[70] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">
          {isEdit ? 'Edit Beer' : 'Add New Beer'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Brand
              </label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Style
              </label>
              <input
                type="text"
                name="style"
                value={formData.style}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                ABV
              </label>
              <input
                type="text"
                name="abv"
                value={formData.abv}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="col-span-2 mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Tagline
              </label>
              <input
                type="text"
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Tips
              </label>
              <input
                type="text"
                name="tips"
                value={formData.tips}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Attenuation
              </label>
              <input
                type="text"
                name="attenuation"
                value={formData.attenuation}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                min="0"
                max="5"
                required
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md mr-2"
            >
              Cancel
            </button>
            <div className="ml-4">
              <button
                type="submit"
                className="bg-orange-400 text-white py-2 px-4 rounded-md"
              >
                {isEdit ? 'Edit Beer' : 'Add Beer'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BeerModal;
