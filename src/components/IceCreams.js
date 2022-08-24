import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const IceCreams = () => {
  const [orderIceCreams, setOrderIceCreams] = useState(0);
  const [restockIceCreams, setRestockIceCreams] = useState(0);

  const dispatch = useDispatch();
  const totalIcreams = useSelector(state => state);

  const onOrderIceCreams = () => {
    dispatch({ type: 'ORDER_ICECREAMS', payload: +orderIceCreams });
    setOrderIceCreams(0);
  };
  const onRestockIceCreams = () => {
    dispatch({ type: 'RESTOCK_ICECREAMS', payload: +restockIceCreams });
    setRestockIceCreams(0);
  };

  return (
    <div>
      <input type='number' value={orderIceCreams} onChange={e => setOrderIceCreams(e.target.value)} />

      <button onClick={onOrderIceCreams}>Order IceCreams</button>
      <br />
      <input type='number' value={restockIceCreams} onChange={e => setRestockIceCreams(e.target.value)} />
      <button onClick={onRestockIceCreams}>Restock IceCreams</button>
      <br />
      <span>Total IceCreams: {totalIcreams.iceCreamReducer.iceCreams}</span>
    </div>
  );
};

export default IceCreams;
