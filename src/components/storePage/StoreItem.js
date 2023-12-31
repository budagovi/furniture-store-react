import style from './StoreItem.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {CartBucket} from '../../assets/Icons'
import { useDispatch, useSelector } from 'react-redux';
import {actions as cartActions} from '../../store/CartSlice';

const StoreItem = ({flag, item}) => {

  const {id: img, name, price, popularity: rating} = item;
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const op = useSelector(state => state.operation);

  const addItemHandler = (e) => {
    e.stopPropagation();
    dispatch(cartActions.addItem({item, amount: 1}))
  }

  useEffect(() => {
    const importImage = async () => {
      const response = await import(`../../assets/products/${img}.jpg`);
      setImage(response.default);
    }
    importImage()
  })
  
  let classes = style.wrapper;
  if(flag) classes = style.grid;

  return (
    <div className={style.item}>
      {!flag && <button disabled={op} onClick={addItemHandler}><CartBucket/></button>}
      <Link to={`/furniture-store-react/product?id=${img}`} className={classes}>
        <div className={style.imgWrapper}><img src={image} /></div>
        <div className={style.textHolder}>
          <span>{name}</span>
          <span>${price.toFixed(2)}</span>
          {flag ? <>
            <span>
              Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, 
              nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas 
              magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.
            </span>
            <span>rating: {rating}</span>
          </>: null}
        </div>
      </Link>
    </div>
  )
}

export default StoreItem;