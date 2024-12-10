// components/Header.js
import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="logo">♬MelodyVibe</div>
            <nav>
                <a href="/public">홈</a>
                <a href="/experiences">둘러보기</a>
                <a href="/online">보관함</a>
                <a href="/search">검색</a>
            </nav>
        </header>
    );
}

export default Header;