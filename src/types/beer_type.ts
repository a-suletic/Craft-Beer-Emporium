export type BeerApiType = {
  _id: string;
  name: string;
  image_url: string;
  expireAt: string;
  description: string;
  contributed_by: string;
  brewers_tips: string;
  first_brewed: string;
  attenuation_level: string;
  tagline: string;
};

export type BeersApi = {
  beers_api: BeerApiType[];
};

export type BeerType = {
  id: string;
  name: string;
  brand: string;
  image: string;
  style: string;
  abv: string;
  price: string;
  dsescription: string;
  tagline: string;
  tips: string;
  attenuation: string;
};
