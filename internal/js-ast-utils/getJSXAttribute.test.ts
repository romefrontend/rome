import {test} from "rome";
import {parseJS} from "@internal/js-parser";
import {dedent} from "@internal/string-utils";
import {
	jsArrowFunctionExpression,
	jsBooleanLiteral,
	jsExpressionStatement,
	jsObjectExpression,
	jsStringLiteral,
	jsxAttribute,
	jsxElement,
	jsxExpressionContainer,
} from "@internal/ast";
import {getJSXAttribute} from "@internal/js-ast-utils/getJSXAttribute";

test(
	"verify attribute resolution",
	async (t) => {
		const jsx = jsxElement.assert(
			jsExpressionStatement.assert(
				parseJS({
					path: "unknown",
					input: dedent`
						<div className="foo" onClick={() => {alert("hello")}} custom={true} other={{one: "first", two: "second"}}/>
					`,
				}).body[0],
			).expression,
		);
		t.is(
			jsStringLiteral.assert(
				jsxAttribute.assert(getJSXAttribute(jsx, "className")).value,
			).value,
			"foo",
		);
		t.notThrows(() => {
			jsArrowFunctionExpression.assert(
				jsxExpressionContainer.assert(
					jsxAttribute.assert(getJSXAttribute(jsx, "onClick")).value,
				).expression,
			);
		});
		t.is(
			jsBooleanLiteral.assert(
				jsxExpressionContainer.assert(
					jsxAttribute.assert(getJSXAttribute(jsx, "custom")).value,
				).expression,
			).value,
			true,
		);
		t.notThrows(() => {
			jsObjectExpression.assert(
				jsxExpressionContainer.assert(
					jsxAttribute.assert(getJSXAttribute(jsx, "other")).value,
				).expression,
			);
		});
	},
);
