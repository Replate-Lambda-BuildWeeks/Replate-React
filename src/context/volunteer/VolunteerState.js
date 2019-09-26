import React, { useState } from 'react';

const Volunteer = () => {
  const [request, setRequest] = useState('');

  const addRequest = business => {
    setRequest(...request, business);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addRequest(request);
    // console.log(request);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Accept Request</label>
        <input
          type="text"
          value={request}
          onChange={e => setRequest(e.target.value)}
          required="please add business name"
        />
        <input type="submit" value="Accept Request" />
      </form>
    </div>
  );
};

export default Volunteer;
