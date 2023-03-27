import React from "react";
import {
	FacebookShareButton,
	TwitterShareButton,
	RedditShareButton,
	EmailShareButton,
} from "react-share";
import { ImFacebook, ImTwitter, ImReddit } from "react-icons/im";
import { HiMail } from "react-icons/hi";

const ShareButtons = () => {
	let url = "www.nmdb.com.np";
	return (
		<div className="bg-black px-8 py-4 rounded-md ">
			<div className="flex items-center gap-4 ">
				<div className="border-l-[4px] border-l-c-primary pl-4 flex flex-col">
					<div className="text-2xl font-bold text-c-primary">Share NMDb</div>
					<div className="mx-auto">With your friends</div>
				</div>
				<div className="flex gap-4">
					<FacebookShareButton url={url}>
						<div className="flex gap-4 p-2 bg-c-facebook rounded-lg">
							<ImFacebook size="24px" />
							<span className="font-bold ">Facebook</span>
						</div>
					</FacebookShareButton>
					<TwitterShareButton url={url}>
						<div className="flex gap-4 p-2 bg-c-twitter rounded-lg">
							<ImTwitter size="24px" />
							<span className="font-bold ">Twitter</span>
						</div>
					</TwitterShareButton>
					<RedditShareButton url={url}>
						<div className="flex gap-4 p-2 bg-c-reddit rounded-lg">
							<ImReddit size="24px" />
							<span className="font-bold ">Reddit</span>
						</div>
					</RedditShareButton>
					<EmailShareButton>
						<div className="flex gap-4 p-2 bg-c-primary rounded-lg">
							<HiMail size="24px" />
							<span className="font-bold ">Email</span>
						</div>
					</EmailShareButton>
				</div>
			</div>
		</div>
	);
};

export default ShareButtons;
