import React, { useRef } from 'react'
import classes from './SearchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import allActions from '../../../store/actions';


const SearchBar = (props) => {

    const fldSearch = useRef(null);
    // const videoSearcher = useSelector(state => state.videosReducer);
    const dispatch = useDispatch();

    const onSearch = () => {
        // console.dir(fldSearch.current.value);
        // props.searchItem(fldSearch.current.value);
        dispatch(allActions.videosActions.searchVideo(fldSearch.current.value));
    };

    return (
        <div className={classes.Search}>
            <input type="search" placeholder={props.placeHolder} className={classes.Search__Fld}
                ref={fldSearch} />
            <button className={classes.BtnSearch} onClick={onSearch}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    )
}

export default SearchBar;
