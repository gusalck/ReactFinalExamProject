import React from 'react';
import './Hero.css';
import img1 from '../imgs/Songimage1.jpg';
import img2 from '../imgs/SongIMG4.jpg';
import img3 from '../imgs/SongImg3.jpg';

function Hero() {
    const albums = [
        {
            id: 1,
            title: "새로운 음악",
            subtitle: "rosie",
            description: "꾸밈없는 가사, 솔직한 음악으로 전하는 위로, 자작곡으로 채운 로제의 첫 정규 앨범.",
            imageUrl: img1,
        },
        {
            id: 2,
            title: "최신 팝업 공간 음향",
            subtitle: "STRATEGY",
            description: "Megan Thee Stallion 피처링 타이틀곡으로 첫 날개를 단 TWICE의 무한한 변신.",
            imageUrl: img2,
        },
        {
            id: 3,
            title: "음악 다시 듣기",
            subtitle: "",
            description: "2024년 내가 가장 많이 들은 음악을 '리플레이'에서 확인하세요.",
            imageUrl: img3,
        },{
            id: 4,
            title: "새로운 음악",
            subtitle: "rosie",
            description: "꾸밈없는 가사, 솔직한 음악으로 전하는 위로, 자작곡으로 채운 로제의 첫 정규 앨범.",
            imageUrl: img1,
        },
        {
            id: 5,
            title: "최신 팝업 공간 음향",
            subtitle: "STRATEGY",
            description: "Megan Thee Stallion 피처링 타이틀곡으로 첫 날개를 단 TWICE의 무한한 변신.",
            imageUrl: img2,
        },
    ];

    return (
        <section className="hero-section">
            <h2 className="hero-main-title">새로운 음악</h2>
            <div className="album-container">
                {albums.map((album) => (
                    <div key={album.id} className="album-card">
                        <img src={album.imageUrl} alt={album.title} className="album-image" />
                        <div className="album-info">
                            <h3 className="album-title">{album.title}</h3>
                            <p className="album-subtitle">{album.subtitle}</p>
                            <p className="album-description">{album.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Hero;