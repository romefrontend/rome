# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/codec-browsers/index.test.ts --update-snapshots` to update.

## `combined > complex-not`

### `result`

```javascript
Array [
	"chrome:87"
	"ios_saf:14"
	"ios_saf:14.4"
	"and_chr:88"
]
```

### `targets`

```javascript
Array [
	TargetBrowserUsage {
		operator: "GT"
		usage: 5
	}
	TargetBrowserInversion {
		target: TargetBrowser {
			browser: "Chrome"
			version: 80
		}
	}
]
```

### `tokens`

```javascript
Array [
	GT {
		end: ZeroIndexedNumber<1>
		start: ZeroIndexedNumber<0>
	}
	Percentage {
		value: 5
		end: ZeroIndexedNumber<4>
		start: ZeroIndexedNumber<2>
	}
	Or {
		end: ZeroIndexedNumber<5>
		start: ZeroIndexedNumber<4>
	}
	Not {
		end: ZeroIndexedNumber<9>
		start: ZeroIndexedNumber<6>
	}
	String {
		value: "Chrome"
		end: ZeroIndexedNumber<16>
		start: ZeroIndexedNumber<10>
	}
	Number {
		value: 80
		end: ZeroIndexedNumber<19>
		start: ZeroIndexedNumber<17>
	}
	EOF {
		end: ZeroIndexedNumber<20>
		start: ZeroIndexedNumber<20>
	}
]
```