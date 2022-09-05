import React from 'react';
import './sortselect.scss'

const SortSelect = ({sort,setSort}) => {
    return (
        <select className='sort-select' onChange={(e)=>setSort(e.target.value)}>
            <option className='sort-select-item' value="value1">Сортировать по:</option>
            <option className='sort-select-item' value="big">К большему</option>
            <option className='sort-select-item' value="small ">К меньшему</option>
        </select>
    );
};

export default SortSelect;