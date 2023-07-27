import React from 'react';

const DynamicPage = ({params}) => {
    return (
        <div>
          this is news nested rouyer  {params.id}
        </div>
    );
};

export default DynamicPage;