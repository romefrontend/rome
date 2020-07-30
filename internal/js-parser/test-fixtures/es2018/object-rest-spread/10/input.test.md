# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2018 > object-rest-spread > 10`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2018/object-rest-spread/10/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2018/object-rest-spread/10/input.js"
		end: Object {
			column: 0
			index: 21
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "es2018/object-rest-spread/10/input.js"
				end: Object {
					column: 20
					index: 20
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: JSVariableDeclaration {
				kind: "let"
				loc: Object {
					filename: "es2018/object-rest-spread/10/input.js"
					end: Object {
						column: 20
						index: 20
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingObjectPattern {
							rest: undefined
							loc: Object {
								filename: "es2018/object-rest-spread/10/input.js"
								end: Object {
									column: 13
									index: 13
									line: 1
								}
								start: Object {
									column: 4
									index: 4
									line: 1
								}
							}
							properties: Array [
								JSBindingObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "x"
											loc: Object {
												filename: "es2018/object-rest-spread/10/input.js"
												identifierName: "x"
												end: Object {
													column: 7
													index: 7
													line: 1
												}
												start: Object {
													column: 6
													index: 6
													line: 1
												}
											}
										}
										loc: Object {
											filename: "es2018/object-rest-spread/10/input.js"
											end: Object {
												column: 7
												index: 7
												line: 1
											}
											start: Object {
												column: 6
												index: 6
												line: 1
											}
										}
									}
									value: JSBindingIdentifier {
										name: "x"
										loc: Object {
											filename: "es2018/object-rest-spread/10/input.js"
											identifierName: "x"
											end: Object {
												column: 7
												index: 7
												line: 1
											}
											start: Object {
												column: 6
												index: 6
												line: 1
											}
										}
									}
									loc: Object {
										filename: "es2018/object-rest-spread/10/input.js"
										end: Object {
											column: 7
											index: 7
											line: 1
										}
										start: Object {
											column: 6
											index: 6
											line: 1
										}
									}
								}
								JSBindingObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "y"
											loc: Object {
												filename: "es2018/object-rest-spread/10/input.js"
												identifierName: "y"
												end: Object {
													column: 10
													index: 10
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
											filename: "es2018/object-rest-spread/10/input.js"
											end: Object {
												column: 10
												index: 10
												line: 1
											}
											start: Object {
												column: 9
												index: 9
												line: 1
											}
										}
									}
									value: JSBindingIdentifier {
										name: "y"
										loc: Object {
											filename: "es2018/object-rest-spread/10/input.js"
											identifierName: "y"
											end: Object {
												column: 10
												index: 10
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
										filename: "es2018/object-rest-spread/10/input.js"
										end: Object {
											column: 10
											index: 10
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
						}
						loc: Object {
							filename: "es2018/object-rest-spread/10/input.js"
							end: Object {
								column: 19
								index: 19
								line: 1
							}
							start: Object {
								column: 4
								index: 4
								line: 1
							}
						}
						init: JSReferenceIdentifier {
							name: "obj"
							loc: Object {
								filename: "es2018/object-rest-spread/10/input.js"
								identifierName: "obj"
								end: Object {
									column: 19
									index: 19
									line: 1
								}
								start: Object {
									column: 16
									index: 16
									line: 1
								}
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
✔ No known problems!

```