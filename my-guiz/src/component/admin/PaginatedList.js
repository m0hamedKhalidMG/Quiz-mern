import React, { useState,useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog,faChevronRight,faChevronLeft  } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const ITEMS_PER_PAGE = 5; // Number of items to display per page

const PaginatedList = ({ data }) => {
    console.log(data)
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the index of the first and last item to display on the current page
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  const handleItemHover = (index) => {
    setHoveredItemIndex(index);
  };
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const [isMediumScreen, setIsMediumScreen] = useState(
    window.innerWidth >= 640 && window.innerWidth < 1024
  );
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
      setIsMediumScreen(window.innerWidth >= 640 && window.innerWidth < 1024);
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 

  const columnClasses = classNames({
    'grid-cols-3': isSmallScreen,
    'grid-cols-5': isMediumScreen,
    'grid-cols-7': isLargeScreen,
  });

  return (
    <div>
    {currentData.map((user, index) => (
        <div
        key={index}
        className={` p-2  my-div   rounded-lg shadow-md overflow-hidden ml-5 mr-5 my-3 ${
          index === hoveredItemIndex ? 'bg-slate-600 text-white' : ''
        }`}
        onMouseEnter={() => handleItemHover(index)}
        onMouseLeave={() => handleItemHover(null)}
      >
      <div class=" " >
      
      <div class="flex items-center ">
      <div class="ml-2">
      </div>
    </div>
    
    <div className={`grid ${columnClasses} gap-1`}>
    {isSmallScreen && (
     <>
 
  <div class="col-start-1  ...  ">{user.FullName}</div>

  <div class="col-start-2  ...  ">{user.StreetAddress}</div>
  <div class="col-start-3  ...  ">{user.phase}</div>

  <div class="col-start-1  ...  ">{user.Group}</div>
  <div class="col-start-1 col-span-2 ...  ">{user.Email}</div>
  <div class="col-start-3 flex justify-end mr-2  "><FontAwesomeIcon icon={faCog} /></div>
  </>
  )}
   {isMediumScreen && (
     <>
     <div class="col-start-1  ...  ">{user.FullName}</div>

     <div class="col-start-2  ...  ">{user.StreetAddress}</div>
     <div class="col-start-3  ...  ">{user.phase}</div>

     <div class="col-start-4  ...  ">{user.Group}</div>
     <div class="col-start-5 flex justify-end mr-2  "><FontAwesomeIcon icon={faCog} /></div>
     <div class="col-start-1 col-span-2 ...  ">{user.Email}</div>

     </>
   )}

   {isLargeScreen && (
     <>
     <div class="col-start-1  ...  ">{user.FullName}</div>

     <div class="col-start-2  ...  ">{user.StreetAddress}</div>
     <div class="col-start-3  ...  ">{user.phase}</div>

     <div class="col-start-4  ...  ">{user.Group}</div>
     <div class="col-start-5 col-span-2 ...  ">{user.Email}</div>
     <div class="col-start-7 flex justify-end mr-2  "><FontAwesomeIcon icon={faCog} /></div>
     </>
   )}
     </div> 
         </div> </div>

    
       ))}
       <div class="w-24   mx-auto">
       <ReactPaginate
       pageCount={Math.ceil(data.length / ITEMS_PER_PAGE)}
       onPageChange={handlePageChange}
       containerClassName={'pagination flex space-x-2 justify-center mt-4'}
       pageClassName={'bg-gray-200 p-2 rounded-md cursor-pointer text-sm h-fit'}
       breakClassName={'bg-gray-300 p-2 rounded-md cursor-auto h-fit'}
       previousClassName={' text-white p-2 rounded-md cursor-pointer h-fit'}
       nextClassName={' text-white p-2 rounded-md cursor-pointer flex '}  
       nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
       previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
        activeClassName={' text-white'}
     />
     </div>
    </div>
    
  );
};

export default PaginatedList;
