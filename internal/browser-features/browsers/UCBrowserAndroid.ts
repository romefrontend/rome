import {Browser, BrowserProps} from "@internal/browser-features/Browser";

export default class UCBrowserAndroid extends Browser {
	constructor(props?: Pick<BrowserProps, "version">) {
		super({
			id: "and_uc",
			version: props?.version,
		});
	}
}
