import {NodeBaseWithComments, TomlKeyValue} from "@internal/ast";
import {createBuilder} from "../../utils";

export interface TomlTable extends NodeBaseWithComments {
	readonly type: "TomlTable";
	readonly value: Array<TomlKeyValue>;
}

export const TomlTable = createBuilder<TomlTable>(
	"TomlTable",
	{
		bindingKeys: {},
		visitorKeys: {
			value: true,
		},
	},
);
