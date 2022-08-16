import React from 'react'

const Video = () => {
    return (
        <div>
            <div className="container vimeo-video text-center">
                <div className="row header">
                    <img src="img/svg/Zasta_Icons_123Z.svg" className="video-header-img" alt="3 Schritte" loading="lazy" />
                </div>
                    <h2>Three steps to go</h2>
                <div className="video-wrap">
                    <div className="embed-responsive embed-responsive-16by9 video-screen">
                        <iframe src="https://bookbyqr.com/assets/video/video.mp4" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} frameBorder={0} allow="autoplay; fullscreen" allowFullScreen />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Video
