"use client";
import React from 'react';
import SearchResultCard from './SearchResultCard';

const SearchResut = ({ area_key, setActiveField, item, latitude_key, longitude_key }) => {
  // Define area_key, setActiveFieldId, latitude_key, longitude_key here or pass them as props

  return (
    <div className='absolute top-10 left-0 right-0 z-10 bg-white rounded-md-2 border max-h-[50vh] overflow-y-scroll shadow-md hide-scrollbar'>
      {/* ride.results?.map */}
      {[1, 1, 1, 1, 1].map((item) => <>

        <SearchResultCard
          area_key={area_key}
          setActiveField={setActiveField}
          latitude_key={latitude_key}
          longitude_key={longitude_key}
          key={item.dispaly_name}
          item={item}
        />
        <Driver />
      </>
      )}
    </div>
  );
};

export default SearchResut;
