import React from 'react';
import './News.css';


function News() {
    return (
        <container className="note">

            <div className="notice fl">
                <p className="notice-title">Notice</p>
                <marquee className="marquee" behavior="scroll" direction="up" scrollamount="3" onmouseover="this.stop();" onmouseout="this.start();">
                    <p>Government College Of Engineering, Karad notice read this, to read this tap on it or more button</p>
                    <p>Government College Of Engineering, Karad notice read this, to read this tap on it or more button</p>
                    <p>Government College Of Engineering, Karad notice read this, to read this tap on it or more button</p>
                    <p>Government College Of Engineering, Karad notice read this, to read this tap on it or more button</p>
                    <p>Government College Of Engineering, Karad notice read this, to read this tap on it or more button</p>
                    <p>Government College Of Engineering, Karad notice read this, to read this tap on it or more button</p>
                    <p>Government College Of Engineering, Karad notice read this, to read this tap on it or more button</p>

                </marquee>
                <div className="more">
                    <a href="/notice">More...</a></div>
            </div>
            <div className="notice2 fl">
                <p className="notice-title">Announcement</p>
                <marquee className="marquee" behavior="scroll" direction="up" scrollamount="3" onmouseover="this.stop();" onmouseout="this.start();">
                    <p>Government College Of Engineering, Karad notice read this, to read this tap on it or more button</p>
                    <p>Government College Of Engineering, Karad notice read this, to read this tap on it or more button</p>
                    <p>Government College Of Engineering, Karad notice read this, to read this tap on it or more button</p>
                    <p>Government College Of Engineering, Karad notice read this, to read this tap on it or more button</p>
                    <p>Government College Of Engineering, Karad notice read this, to read this tap on it or more button</p>
                    <p>Government College Of Engineering, Karad notice read this, to read this tap on it or more button</p>
                    <p>Government College Of Engineering, Karad notice read this, to read this tap on it or more button</p>
                </marquee>
                <div className="more1">
                    <a href="/Announcement">More...</a></div>

            </div>
        </container >
    );
}

export default News;