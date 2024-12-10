import React from 'react';
import Card from './Card';
import album1 from '../imgs/album1.jpg';import album2 from  '../imgs/album2.jpg';import album3 from '../imgs/album3.jpg';
import album4 from '../imgs/album4.jpg';import album5 from '../imgs/album5.jpg';import album6 from '../imgs/album6.jpg';
import album7 from '../imgs/album7.jpg';import album8 from '../imgs/album8.jpg'

const listings = [
    {
        id: 1,
        title: "rosie",
        people : "로제",
        imageUrl: `${album1}`
    },
    {
        id: 2,
        title: "STRATEGY",
        people : "TWICE",
        imageUrl: `${album2}`
    },
    {
        id: 3,
        title: "빛-EP",
        people : "신용재",
        imageUrl: `${album3}`
    },
    {
        id: 4,
        title: "with-EP",
        people : "이승기",
        imageUrl: `${album4}`
    },
    {
        id: 5,
        title: "보호자",
        people : "버둥",
        imageUrl: `${album5}`
    },
    {
        id: 6,
        title: "THE BOYZ Special Single [Last Kiss] - Single",
        people : "더보이즈",
        imageUrl: `${album6}`
    },
    {
        id: 7,
        title: "My insecure",
        people : "양다일",
        imageUrl: `${album7}`
    },
    {
        id: 8,
        title: "GNX",
        people : "Kendrick Lamar",
        imageUrl: `${album8}`
    },
    {
        id: 9,
        title: "로제",
        people : "rosie",
        imageUrl: `${album1}`
    },
    {
        id: 10,
        title: "STRATEGY",
        people : "TWICE",
        imageUrl: `${album2}`
    },
    {
        id: 11,
        title: "빛-EP",
        people : "신용재",
        imageUrl: `${album3}`
    },
    {
        id: 12,
        title: "with-EP",
        people : "이승기",
        imageUrl: `${album4}`
    },
    {
        id: 13,
        title: "보호자",
        people : "버둥",
        imageUrl: `${album5}`
    },
    {
        id: 14,
        title: "THE BOYZ Special Single [Last Kiss] - Single",
        people : "더보이즈",
        imageUrl: `${album6}`
    },

];

function CardContainer() {
    return (
        <div className="card-container">
            <div className="section-header">
                <h1>최신 발매 ＞</h1>
            </div>
            <div className="cards">
                {listings.map(listing => (
                    <Card key={listing.id} {...listing} />
                ))}
            </div>
        </div>
    );
}

export default CardContainer;