import React, { useState }from 'react';


const Header = () => {
  const [head] = useState<string>("Typescript > React Test Environment")

  return (
    <div>
     <h3>{head}</h3>
    </div>
  )
}

export default Header;