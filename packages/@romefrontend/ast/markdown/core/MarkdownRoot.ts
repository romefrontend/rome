import {NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "../../utils";
import {AnyMarkdownNode} from "@romefrontend/ast/markdown/unions";

export type MarkdownRoot = NodeBaseWithComments & {
	type: "MarkdownRoot";
	body: Array<AnyMarkdownNode>
};

export const markdownRoot = createBuilder<MarkdownRoot>(
	"MarkdownRoot",
	{
		bindingKeys: {},
		visitorKeys: {
			body: true
		},
	},
);
