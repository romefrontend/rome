# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-yield > invalid-yield-strict-function-declaration`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 34
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "yield is a reserved word"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 14
					index: 14
					line: 1
				}
				start: Object {
					column: 9
					index: 9
					line: 1
				}
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "yield"
				loc: Object {
					filename: "input.js"
					identifierName: "yield"
					end: Object {
						column: 14
						index: 14
						line: 1
					}
					start: Object {
						column: 9
						index: 9
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 33
					index: 33
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 16
						index: 16
						line: 1
					}
					start: Object {
						column: 14
						index: 14
						line: 1
					}
				}
			}
			body: JSBlockStatement {
				body: Array []
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 33
						index: 33
						line: 1
					}
					start: Object {
						column: 16
						index: 16
						line: 1
					}
				}
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 31
								index: 31
								line: 1
							}
							start: Object {
								column: 18
								index: 18
								line: 1
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 input.js:1:9 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ yield is a reserved word

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```