import React from 'react';

interface GreeterProps {
  name?: string;
}

const Greeter: React.FC<GreeterProps> = ({ name }) => <div>hello {name}</div>;

export default Greeter;
