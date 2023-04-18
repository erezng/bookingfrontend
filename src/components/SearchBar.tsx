import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchhotellist } from '../features/HotelSlice';
import { AppDispatch } from '../app/store';
import { Hotel } from '../@types';
import css from "./SearchBar.module.scss"
import { useNavigate } from 'react-router-dom';
const UserFind: React.FC = () => {
    const nav = useNavigate();
    const dispatch = useDispatch<AppDispatch>()
    const [hotelList, setHotelList] = React.useState<
    Hotel[] | undefined
    >();
    const [text, setText] = React.useState<string>('');
    useEffect(() => {
        dispatch(fetchhotellist())
    }, [dispatch])
    const hotels = useSelector((state:any) => state.content.hotels)
    const isLoading = useSelector((state:any) => state.content.isLoading)
    const error = useSelector((state:any) => state.content.error)
    if (isLoading) {
        return 'loading...'
    }
    if (error) {
        return error
    }
    const handleOnClick = () => {
        const findHotels =
        hotels && hotels?.length > 0
            ? hotels?.filter((u:Hotel) => u?.name.includes(text))
            : undefined;
        setHotelList(findHotels);
  };
  return (
    <div className="contaier">
      <div className={css.title}>
        Find your hotel!
      </div>
      <div className={css.input__wrapper}>
        <input
          type="text"
          placeholder="Search Hotel"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button disabled={!text} onClick={handleOnClick}>
          Search
        </button>
      <div className={css.body}>
        {hotelList && hotelList?.length === 0 && (
          <div className={css.notFound}>No Hotels Found</div>
        )}
        {hotelList &&
          hotelList?.length > 0 &&
          hotelList?.map((hotel) => {
            return (
              <div className={css.body__item}>
                Name: {hotel?.name}
                <button  
                    className="btn btn-info"
                    onClick={() => {
                    setText("")
                    setHotelList(undefined)
                    nav(`/hotels/${hotel._id}`);
                    }}
                >
                click
                </button>
              </div>
            );
          })}
    </div>
    </div>
    </div>


  );
};

export default UserFind;