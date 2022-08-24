import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cakes = () => {
  const [orderCakes, setOrderCakes] = useState(0);
  const [reStockCakes, setRestockCakes] = useState(0);

  const dispatch = useDispatch();
  const totalCakes = useSelector(state => state);

  // console.log(totalCakes);

  const onOrderCakes = () => {
    dispatch({ type: 'ORDER_CAKES', payload: +orderCakes });
    setOrderCakes(0);
  };
  const onRestockCakes = () => {
    dispatch({ type: 'RESTOCK_CAKES', payload: +reStockCakes });
    setRestockCakes(0);
  };

  // 5 -> 5
  // '5' ->5

  return (
    <div>
      <input type='number' value={orderCakes} onChange={e => setOrderCakes(e.target.value)} />
      <button onClick={onOrderCakes}>Order Cakes</button>
      <br />
      <input type='number' value={reStockCakes} onChange={e => setRestockCakes(e.target.value)} />
      <button onClick={onRestockCakes}>Restock Cakes</button>
      <br />
      <span>Total Cakes: {totalCakes.cakeReducer.cakes}</span>
    </div>
  );
};

export default Cakes;
