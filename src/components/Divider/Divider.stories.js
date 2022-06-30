import React from 'react';

export default {
  title: 'components/Divider',
  argTypes: {},
};

const Template = (args) => {
  return  <>
    <div style={{width: "100%", height: '20px', borderBottom: '1px solid black', textAlign: 'center'}}>
      <span style={{fontSize: '16px', backgroundColor: '#ffff', padding: '0 5px'}}>
        Label
      </span>
    </div>

    <br></br>

    <div style={{width: "100%", height: '20px', borderBottom: '1px solid black', textAlign: 'left'}}>
      <span style={{fontSize: '16px', backgroundColor: '#ffff', padding: '0 5px'}}>
        Start
      </span>
    </div>
    <div style={{width: "100%", height: '20px', borderBottom: '1px solid black', textAlign: 'center'}}>
      <span style={{fontSize: '16px', backgroundColor: '#ffff', padding: '0 5px'}}>
        Center
      </span>
    </div>
    <div style={{width: "100%", height: '20px', borderBottom: '1px solid black', textAlign: 'right'}}>
      <span style={{fontSize: '16px', backgroundColor: '#ffff', padding: '0 5px'}}>
        End
      </span>
    </div>

    <br></br>

    <div style={{width: "100%", height: '20px', borderBottom: '1px solid black', textAlign: 'center'}}>
      <span style={{fontSize: '16px', backgroundColor: '#ffff', padding: '0 5px'}}>
        Solid
      </span>
    </div>
    <div style={{width: "100%", height: '20px', borderBottom: '1px dashed black', textAlign: 'center'}}>
      <span style={{fontSize: '16px', backgroundColor: '#ffff', padding: '0 5px'}}>
        Dashed
      </span>
    </div>
    <div style={{width: "100%", height: '20px', borderBottom: '1px dotted black', textAlign: 'center'}}>
      <span style={{fontSize: '16px', backgroundColor: '#ffff', padding: '0 5px'}}>
        Dotted
      </span>
    </div>

    <br></br>

    <div style={{width: "100%", height: '20px', borderBottom: '1px solid black', textAlign: 'center', borderWidth: 'thin'}}>
      <span style={{fontSize: '16px', backgroundColor: '#ffff', padding: '0 5px'}}>
        Light
      </span>
    </div><div style={{width: "100%", height: '20px', borderBottom: '1px solid black', textAlign: 'center', borderWidth: 'medium'}}>
      <span style={{fontSize: '16px', backgroundColor: '#ffff', padding: '0 5px'}}>
        Regular
      </span>
    </div><div style={{width: "100%", height: '20px', borderBottom: '1px solid black', textAlign: 'center', borderWidth: 'thick'}}>
      <span style={{fontSize: '16px', backgroundColor: '#ffff', padding: '0 5px'}}>
        Heavy
      </span>
    </div>
  </>;
};

export const _Divider = Template.bind({});
