import React from "react";
import NoResultsFound from '../../assets/images/no-results-found.png';

const EmptyPage: React.FC<{title: String}> = ({title}) => {

  return(
    <>
      <div className="container text-center">
        <h4 className="text-black-950 mt-4">{title}</h4>
        <div className="flex justify-center">
          <img className="w-1/3" src={NoResultsFound} alt="" />
        </div>
      </div>
    </>
  )
}

export default EmptyPage;