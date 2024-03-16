import { useId } from 'react';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { useDispatch } from 'react-redux';

export default function SearchBox() {
  const dispatch = useDispatch();

  const inputField = useId();

  return (
    <>
      <label htmlFor={inputField} className={css.labelText}>
        Find contacts by name
      </label>

      <input
        type="text"
        id={inputField}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={css.inputField}
      />
    </>
  );
}
