import React from 'react'
import './APPDownload.css'
import { assets } from '../../assets/frontend_assets/assets'

const APPDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> Tomata App</p>
        <div className='app-download-platforms'>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>

    </div>
  )
}

export default APPDownload