# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-array-pattern > dupe-param-1`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "a"
				loc: SourceLocation esprima/es2015-array-pattern/dupe-param-1/input.js 2:9-2:10 (a)
			}
			body: JSBlockStatement {
				body: []
				directives: []
				loc: SourceLocation esprima/es2015-array-pattern/dupe-param-1/input.js 2:17-2:20
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: [
					JSBindingArrayPattern {
						elements: [
							JSBindingIdentifier {
								name: "a"
								meta: JSPatternMeta {
									loc: SourceLocation esprima/es2015-array-pattern/dupe-param-1/input.js 2:12-2:13
								}
								loc: SourceLocation esprima/es2015-array-pattern/dupe-param-1/input.js 2:12-2:13 (a)
							}
							JSBindingIdentifier {
								name: "a"
								meta: JSPatternMeta {
									loc: SourceLocation esprima/es2015-array-pattern/dupe-param-1/input.js 2:14-2:15
								}
								loc: SourceLocation esprima/es2015-array-pattern/dupe-param-1/input.js 2:14-2:15 (a)
							}
						]
						meta: JSPatternMeta {
							loc: SourceLocation esprima/es2015-array-pattern/dupe-param-1/input.js 2:11-2:16
						}
						loc: SourceLocation esprima/es2015-array-pattern/dupe-param-1/input.js 2:11-2:16
					}
				]
				loc: SourceLocation esprima/es2015-array-pattern/dupe-param-1/input.js 2:10-2:17
			}
			loc: SourceLocation esprima/es2015-array-pattern/dupe-param-1/input.js 2:0-2:20
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: [
					log {
						category: "info"
						text: RAW_MARKUP {value: "Defined already here"}
					}
					frame {
						location: SourceLocation esprima/es2015-array-pattern/dupe-param-1/input.js 2:14-2:15 (a)
					}
				]
				category: ["parse"]
				categoryValue: "js"
				message: [RAW_MARKUP {value: "Argument <emphasis>"}, "a", RAW_MARKUP {value: "</emphasis> name clash in strict mode"}]
			}
			location: {
				language: "js"
				path: UIDPath<esprima/es2015-array-pattern/dupe-param-1/input.js>
				end: Position 2:15
				start: Position 2:14
			}
		}
	]
	directives: [
		JSDirective {
			value: "use strict"
			loc: SourceLocation esprima/es2015-array-pattern/dupe-param-1/input.js 1:0-1:13
		}
	]
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/es2015-array-pattern/dupe-param-1/input.js>
	loc: SourceLocation esprima/es2015-array-pattern/dupe-param-1/input.js 1:0-3:0
}
```

### `diagnostics`

```

 esprima/es2015-array-pattern/dupe-param-1/input.js:2:14 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Argument a name clash in strict mode

  ℹ Defined already here

    1 │ "use strict";
  > 2 │ function a([a,a]){ }
      │               ^


```
