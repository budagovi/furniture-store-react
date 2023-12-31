import style from './Filter.module.css';
import { Link, useLocation } from 'react-router-dom';
import NavSearchForm from '../mainNavigation/NavSearchForm';
import { useEffect, useState } from 'react';

const Filter = ({ flag, onBlurClick }) => {

  const [wrapperClasses, setWrapperClasses] = useState(style.wrapper);
  const [listClasses, setListClasses] = useState(style.list);
  const { pathname } = useLocation();

  useEffect(() => {
    if(flag)
      sideNavHandler();
  }, [pathname]);

  useEffect(() => {
    if (flag) {
      setWrapperClasses(`${style.wrapper} ${style.toggle}`);
      setListClasses(style.list);
    }
  }, [flag]);

  const sideNavHandler = () => {
    setListClasses(`${style.list} ${style.toggleList}`);
    setTimeout(() => {
      setWrapperClasses(style.wrapper);
      onBlurClick();
    }, 400);
  }

  const navigateHandler = (e) => {
    setWrapperClasses(style.wrapper);
    onBlurClick();
  }

  return (
    <div className={wrapperClasses}>
      <ul className={listClasses}>
        <li>
          <NavSearchForm />
        </li>
        <li className={style.logoLink}>
          <Link 
            to='.'
            onClick={navigateHandler}>
            All
          </Link>
        </li>
        <li className={style.logoLink}>
          <Link 
            to='cabinets/1'
            onClick={navigateHandler}>
            Cabinets
          </Link>
        </li>
        <li className={style.linkText}>
          <Link
            to='chairs/1'
            onClick={navigateHandler}>
            Chairs
          </Link>
        </li>
        <li className={style.linkText}>
          <Link 
            to='monitor-stands/1' 
            onClick={navigateHandler}>
            Monitor Stands
          </Link>
        </li>
        <li className={style.linkText}>
          <Link
            to='desk-plants/1' 
            onClick={navigateHandler}>
            Desk Plants
          </Link>
        </li>
        <li className={style.linkText}>
          <Link 
            to='study-lamps/1' 
            onClick={navigateHandler}>
            Study Lamps
          </Link>
        </li>
        <li className={style.linkText}>
          <Link 
            to='mouse-pads/1'
            onClick={navigateHandler}>
            Mouse Pads
          </Link>
        </li>
        <li>
          <Link 
            to='tables/1'
            onClick={navigateHandler}>
            Tables
          </Link>
        </li>
      </ul>
      <div className={style.blur} onClick={sideNavHandler}></div>
    </div>
  )
}

export default Filter;