# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 339`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSTemplateLiteral {
				expressions: []
				quasis: [
					JSTemplateElement {
						cooked: "\\07"
						raw: "\\07"
						tail: true
						loc: SourceLocation es2015/uncategorised/339/input.js 1:1-1:4
					}
				]
				loc: SourceLocation es2015/uncategorised/339/input.js 1:0-1:5
			}
			loc: SourceLocation es2015/uncategorised/339/input.js 1:0-1:5
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
				message: RAW_MARKUP {value: "Invalid escape sequence in template"}
			}
			location: {
				language: "js"
				path: UIDPath<es2015/uncategorised/339/input.js>
				end: Position 1:2
				start: Position 1:2
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2015/uncategorised/339/input.js>
	loc: SourceLocation es2015/uncategorised/339/input.js 1:0-1:5
}
```

### `diagnostics`

```

 es2015/uncategorised/339/input.js:1:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid escape sequence in template

    `\07`
      ^


```
