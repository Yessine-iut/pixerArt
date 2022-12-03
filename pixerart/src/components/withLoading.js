import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { NavPixer } from './NavPixer';


function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <>
      <NavPixer />
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Chargement...
        <FontAwesomeIcon icon={faSpinner} spin className="fa" />
      </p>
      </>
    );
  };
}
export default WithLoading;
