import React from "react"
import {
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
  } from "react-share";
  import {
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
  } from "react-share";

export default function ShareBox({isMobile,resultLink}) {
    const shareUrl = resultLink;
    const shareBoxSectionStyle = isMobile 
        ?
            {}
        :
            {
                width: '80%',
                height: '100%',
                display: 'flex',
                gap: '10px',                
            }
    return (
        <section className="share-box-section" style={shareBoxSectionStyle}>
            <FacebookShareButton 
                    url = {shareUrl}
                    hashtag= {"#hello #new"}
            >
                <FacebookIcon round = {true} size = {'40px'}/>
            </FacebookShareButton>
            <TwitterShareButton 
                    url = {shareUrl}
                    title = {'This is a test title\n'}
                    hashtags= {["#hello,#new"]}
            >
                <TwitterIcon round = {true} size = {'40px'}/>
            </TwitterShareButton>
            <LinkedinShareButton 
                    url = {shareUrl}
                    title = {'This is a test title\n'}
                    summary= {"This is a test summary"}
            >
                <LinkedinIcon round = {true} size = {'40px'}/>
            </LinkedinShareButton>
            <TelegramShareButton
                    url = {shareUrl}
                    title = {'This is a test title\n'}
            >
                <TelegramIcon round = {true} size = {'40px'}/>
            </TelegramShareButton>
        </section>
    )
}