# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/codec-browsers/index.test.ts --update-snapshots` to update.

## `diagnostic > operator-or-version`

### `error`

```javascript
___R$project$rome$$internal$diagnostics$error$wrappers_ts$DiagnosticsError {
	name: "DiagnosticsError"
	_memoMessage: undefined
	_message: "Expected an operator such as \"<emphasis>></emphasis>\", \"<emphasis>\\<</emphasis>\", \"<emphasis>>=</emphasis>\", \"<emphasis>\\<=</emphasis>\" or a version."
	suppressions: Array []
	diagnostics: Array [
		Object {
			description: Object {
				advice: Array []
				categoryValue: "browserquery"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Expected an operator such as \"<emphasis>></emphasis>\", \"<emphasis>\\<</emphasis>\", \"<emphasis>>=</emphasis>\", \"<emphasis>\\<=</emphasis>\" or a version."}
			}
			location: Object {
				integrity: undefined
				language: "browserquery"
				sourceText: undefined
				end: Position 2:0
				path: RelativePath<diagnostic/operator-or-version/input.txt>
				start: Position 2:0
			}
		}
	]
}
```

### `tokens`

```javascript
Array [
	String {
		value: "firefox"
		end: ZeroIndexedNumber<7>
		start: ZeroIndexedNumber<0>
	}
	EOF {
		end: ZeroIndexedNumber<8>
		start: ZeroIndexedNumber<8>
	}
]
```