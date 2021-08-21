import React, { useEffect, useState } from 'react';
import './style.scss';

const Tile = (props) => {
	const { conference } = props;
	let webImage = conference.imageURL.replaceAll(`\"`, "");

	return (
    <div className="card">
			<div className="conf-img">
				<img src={webImage}></img>
			</div>
			<div className="conf-name">
				{`${conference.confName}`}
			</div>
			<div className="date">
				<span className="icon">
					<i class="fa fa-calendar" aria-hidden="true"></i>
				</span>
				{`${conference.confStartDate} to  ${conference.confEndDate}`}
			</div>
			<div className="location">
				<span className="icon">
					<i class="fa fa-address-card-o"></i>
				</span>
				{`${conference.venue}`}
			</div>
			<div className="entry-type">
				{`${conference.entryType}`}
			</div>
			<div className="web-url" title={conference.confUrl}>
				<a href={conference.confUrl} target="_blank">{conference.confUrl}</a>
			</div>
		</div>
	);
};

export default Tile;
