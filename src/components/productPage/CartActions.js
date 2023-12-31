import { useEffect, useState } from 'react';
import style from './CartActions.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {actions as cartActions} from '../../store/CartSlice';
import { useSearchParams } from 'react-router-dom';

const CartActions = ({item}) => {

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState(1);

  const op = useSelector(state => state.operation);

  const decrementHandler = () => {
    if (amount === 1) return;
    setAmount(prevState => prevState-1);
  }

  const incrementHandler = () => {
    if (amount === 999) return;
    setAmount(prevState => prevState+1);
  }

  const addHandler = () => {
    setAmount(1)
    dispatch(cartActions.addItem({item, amount}));
  }

  useEffect(() => {
    setAmount(1);
  }, [searchParams.get('id')])
  return (
    <div className={style.wrapper}>
      <div className={style.amountWrapper}>
        <button onClick={decrementHandler}>-</button>
        <div><span>{amount}</span></div>
        <button onClick={incrementHandler}>+</button>
      </div>
      <button disabled={op} className={style.addToCartBtn} onClick={addHandler}>Add to Cart</button>
    </div>
  )
}

export default CartActions;