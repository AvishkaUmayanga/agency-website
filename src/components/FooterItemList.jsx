import React from 'react';

const FooterItemList = ({ title, listItems }) => {
  return (
    <div>
      <ul className='flex flex-col gap-2'>
        <li className='font-semibold'>{title}</li>
        {listItems.map((item) => (
          <li key={item} className='text-sm  text-lightGray'>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItemList;
