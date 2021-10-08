import React from 'react'
import {
    EmailShareButton, EmailIcon,
    FacebookShareButton, FacebookIcon,
    LinkedinShareButton, LinkedinIcon,
    TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon

} from 'react-share'

const ShareModal = ({url}) => {
    return (
        <div className="d-flex justify-content-between px-4 py-2 bg-light">
            <EmailShareButton url={url}>
                <EmailIcon round={true} size={32} />
            </EmailShareButton>

            <FacebookShareButton url={url}>
                <FacebookIcon round={true} size={32} />
            </FacebookShareButton>

            <LinkedinShareButton url={url}>
                <LinkedinIcon round={true} size={32} />
            </LinkedinShareButton>

            <TwitterShareButton url={url}>
                <TwitterIcon round={true} size={32} />
            </TwitterShareButton>

            <WhatsappShareButton url={url}>
                <WhatsappIcon round={true} size={32} />
            </WhatsappShareButton>
        </div>
    )
}

export default ShareModal
