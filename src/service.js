
import { BASE_URL, BERRIES_URL, ITEM_URL, BERRY_FIRMNESS_URL } from "./consts";

export const getPagedBerries = async query => {
  const response = await fetch(
    `${BASE_URL}${BERRIES_URL}?offset=${query.offset}&limit=${query.limit}`
  );
  const berries = await response.json();

  return {
    page: 0,
    data: berries.results,
    totalCount: berries.count
  };
};

export const getBerryDetails = async query => {
  const response = await fetch(
    `${BASE_URL}${BERRIES_URL}/${query.name}`
  );
  const berries = await response.json();
  return berries;
};

export const getBerryItemDetails = async query => {
  const response = await fetch(
    `${BASE_URL}${ITEM_URL}/${query}`
  );
  const item = await response.json();
  return item;
};

export const getBerryFirmnessDetails = async query => {
  const response = await fetch(
    `${BASE_URL}${BERRY_FIRMNESS_URL}/${query.name}`
  );
  const berriesList = await response.json();
  return berriesList;
};
