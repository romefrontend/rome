# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 275`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSAssignmentExpression {
				operator: "="
				left: JSAssignmentObjectPattern {
					properties: []
					loc: SourceLocation es2015/uncategorised/275/input.js 1:1-1:13
				}
				right: JSReferenceIdentifier {
					name: "obj"
					loc: SourceLocation es2015/uncategorised/275/input.js 1:17-1:20 (obj)
				}
				loc: SourceLocation es2015/uncategorised/275/input.js 1:0-1:20
			}
			loc: SourceLocation es2015/uncategorised/275/input.js 1:0-1:20
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "js"
				message: [RAW_MARKUP {value: "Unexpected character <emphasis>"}, "}", RAW_MARKUP {value: "</emphasis>"}]
			}
			location: {
				language: "js"
				path: UIDPath<es2015/uncategorised/275/input.js>
				end: Position 1:13
				start: Position 1:12
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2015/uncategorised/275/input.js>
	loc: SourceLocation es2015/uncategorised/275/input.js 1:0-1:20
}
```

### `diagnostics`

```

 es2015/uncategorised/275/input.js:1:12 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected character }

    ({ "chance" }) = obj
                ^


```
