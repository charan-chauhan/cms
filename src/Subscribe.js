import React from 'react';

import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
   
function Susbcribe() {
  const popoverRight = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Subscribe Me</Popover.Title>
      <Popover.Content>
        This is simple popover example right side.
      </Popover.Content>
    </Popover>
  ); 
   
  
   
  return (
    <div className="container">
        
   
        <OverlayTrigger trigger="click" placement="bottom" overlay={popoverRight}>
          <Button variant="danger" size="sm" className="mb-2" >Subscribe</Button>
        </OverlayTrigger>
   
        
  
    </div>
  );
}
export default Susbcribe;