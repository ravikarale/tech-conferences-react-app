import React, { useEffect, useState } from 'react';
import { API_GetConference } from '../../api/index';
import Tile from './tile';
import './style.scss';
import Loader from "react-loader-spinner";

const Conference = (props) => {
	const [conferenceData, setConferenceData] = useState([]);
	const [filterConferenceData, setFilterConferenceData] = useState([]);
	const [searchValue, searchInputChange] = useState("");
	const [isLoading, setIsLoading] = useState(false);  
  
	useEffect(() => {
    setIsLoading(true)
    API_GetConference()
    .then((response) => {
      const conferenceDetails = [...response.data.free, ...response.data.paid];
      setConferenceData(conferenceDetails);
      setFilterConferenceData(conferenceDetails)
      setIsLoading(false)
    })
    .catch((error) => console.log(error));
	}, []);

  const handleSearchKeyDown = async (e) => {
    if (e.key === 'Enter') {
      setIsLoading(true)
      await setFilterConferenceData(filterByValue(conferenceData, searchValue))
      setIsLoading(false)
    }
  }

  const filterByValue = (array, value) => {
    return array.filter(conf => conf.city.toLowerCase().includes(value.toLowerCase()) || conf.confName.toLowerCase().includes(value.toLowerCase()));
  }

	return (
    <div className="main">
      {isLoading ? 
        <div className="loader">
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            style={{}}
          /> 
        </div>
        :
        <>
          <div class="header">
            <div className="">
              <h1>Tech Conferences</h1>
            </div>
            <div class="search">
              <div>
                <input value={searchValue} onChange={(e) => searchInputChange(e.target.value)} onKeyDown={handleSearchKeyDown}  type="text" placeholder="Search a conference by the name or city" required/>
              </div>
            </div>
          </div>
          <div className="total-counts">{`Showing ${filterConferenceData.length} Event(s)`}</div>
          <div className="tile">
            {filterConferenceData.map(conference => {
              return <Tile conference={conference} />
            })}
          </div>
        </>
      }
    </div>
	);
};

export default Conference;
