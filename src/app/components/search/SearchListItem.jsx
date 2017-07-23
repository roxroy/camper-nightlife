import React from 'react';

const  SearchListItem = ({bar}) => {
  console.log('SearchListItem barItem', bar);
  return (
    <div className="">
    {bar.id} {bar.name}
    </div>
  )
}

export default SearchListItem;
