import React from "react";
import {
	FacebookShareButton,
	TwitterShareButton,
	RedditShareButton,
	EmailShareButton,
} from "react-share";
import { ImFacebook, ImTwitter, ImReddit } from "react-icons/im";
import { HiMail } from "react-icons/hi";

const ShareButtons = ({ className }) => {
	let url = "www.nmdb.com.np";
	return (
		<div className={`px-8 py-4 rounded-md ${className}`}>
			<div className="flex gap-4 justify-center">
				<FacebookShareButton url={url}>
					<div className="flex gap-4 p-2 items-center transition-all hover:-translate-y-2 bg-c-facebook rounded-lg">
						<ImFacebook size="16px" />
						<span>Facebook</span>
					</div>
				</FacebookShareButton>
				<TwitterShareButton url={url}>
					<div className="flex gap-4 p-2 items-center transition-all hover:-translate-y-2 bg-c-twitter rounded-lg">
						<ImTwitter />
						<span>Twitter</span>
					</div>
				</TwitterShareButton>
				<RedditShareButton url={url}>
					<div className="flex gap-4 p-2 items-center transition-all hover:-translate-y-2 bg-c-reddit rounded-lg">
						<ImReddit />
						<span>Reddit</span>
					</div>
				</RedditShareButton>
				<EmailShareButton>
					<div className="flex gap-4 p-2 items-center transition-all hover:-translate-y-2 bg-c-primary rounded-lg">
						<HiMail />
						<span>Email</span>
					</div>
				</EmailShareButton>
			</div>
		</div>
	);
};

export default ShareButtons;
