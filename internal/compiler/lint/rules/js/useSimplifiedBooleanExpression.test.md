# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `js/useSimplifiedBooleanExpression`

### `0`

```

 lint/js/useSimplifiedBooleanExpression/reject/1/file.ts:2:10 lint/js/useSimplifiedBooleanExpression
   FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Boolean expression can be simplified

    1 │ const boolExp = true;
  > 2 │ const r = boolExp === true;
      │           ^^^^^^^^^^^^^^^^

  ℹ Safe fix

  - boolExp·===·true
  + boolExp

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
const boolExp = true;
const r = boolExp;

```

### `1`

```

 lint/js/useSimplifiedBooleanExpression/reject/2/file.ts:2:10 lint/js/useSimplifiedBooleanExpression
   FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Boolean expression can be simplified

    1 │ const boolExp = true;
  > 2 │ const r = true !== boolExp;
      │           ^^^^^^^^^^^^^^^^

  ℹ Safe fix

  - true·!==·boolExp
  + !boolExp

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
const boolExp = true;
const r = !boolExp;

```

### `2`

```

 lint/js/useSimplifiedBooleanExpression/reject/3/file.ts:2:10 lint/js/useSimplifiedBooleanExpression
   FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Boolean expression can be simplified

    1 │ const boolExp = true;
  > 2 │ const r = !!boolExp;
      │           ^^^^^^^^^

  ℹ Safe fix

  - !!boolExp
  + boolExp

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
const boolExp = true;
const r = boolExp;

```

### `3`

```

 lint/js/useSimplifiedBooleanExpression/reject/4/file.ts:2:10 lint/js/useSimplifiedBooleanExpression
   FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Boolean expression can be simplified

    1 │ const boolExp = true;
  > 2 │ const r = true && boolExp;
      │           ^^^^^^^^^^^^^^^

  ℹ Safe fix

  - true·&&·boolExp
  + boolExp

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```
const boolExp = true;
const r = boolExp;

```

### `4`

```

 lint/js/useSimplifiedBooleanExpression/reject/5/file.ts:2:10 lint/js/useSimplifiedBooleanExpression
   FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Boolean expression can be simplified

    1 │ const boolExp = true;
  > 2 │ const r = boolExp || true;
      │           ^^^^^^^^^^^^^^^

  ℹ Safe fix

  - boolExp·||·true
  + true

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `4: formatted`

```
const boolExp = true;
const r = true;

```

### `5`

```

 lint/js/useSimplifiedBooleanExpression/reject/6/file.ts:2:10 lint/js/useSimplifiedBooleanExpression
   FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Boolean expression can be simplified

    1 │ const nonNullExp = 123;
  > 2 │ const r = null ?? nonNullExp;
      │           ^^^^^^^^^^^^^^^^^^

  ℹ Safe fix

  - null·??·nonNullExp
  + nonNullExp

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `5: formatted`

```
const nonNullExp = 123;
const r = nonNullExp;

```

### `6`

```

 lint/js/useSimplifiedBooleanExpression/reject/7/file.ts:3:10 lint/js/useSimplifiedBooleanExpression
   FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Boolean expression can be simplified

    1 │ const boolExpr1 = true;
    2 │ const boolExpr2 = false;
  > 3 │ const r = (!boolExpr1) || (!boolExpr2);
      │           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Safe fix

  - !boolExpr1·||·!boolExpr2
  + !(boolExpr1·&&·boolExpr2)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `6: formatted`

```
const boolExpr1 = true;
const boolExpr2 = false;
const r = !(boolExpr1 && boolExpr2);

```