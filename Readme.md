# JavaScript Basics

A small collection of beginner-friendly JavaScript examples. Each script can be
run independently with [Node.js](https://nodejs.org/).

## Examples

| File | Topics |
| --- | --- |
| [`01_JS_Basics/Hellow_world.js`](01_JS_Basics/Hellow_world.js) | Printing text with `console.log()` |
| [`01_JS_Basics/Math.js`](01_JS_Basics/Math.js) | Addition, subtraction, multiplication, division, remainder, and exponentiation |
| [`02_JS_Keywords_Identifier/`](02_JS_Keywords_Identifier/) | JavaScript keywords, `var`/`let`/`const`, identifier rules, naming conventions, and comments |
| [`03_JS_Literals/`](03_JS_Literals/) | String, boolean, null, undefined, and numeric literals, including number bases, BigInt, and special numeric values |
| [`04_JS_Operators/`](04_JS_Operators/) | Arithmetic, assignment, comparison, logical, string, and ternary operators, plus `typeof` |
| [`05_JS_Increment_Decrement/`](05_JS_Increment_Decrement/) | Prefix and postfix increment/decrement, expression evaluation, and nullish coalescing |
| [`06_JS_If_Else_Statement_Condition/`](06_JS_If_Else_Statement_Condition/) | `if`/`else` conditions, nested conditionals, and a score-based grade calculator |
| [`07_JS_Switch/`](07_JS_Switch/) | `switch` statements, strict case matching, grouped cases, fall-through, and practical examples |
| [`08_JS_Chapter_User_Input/`](08_JS_Chapter_User_Input/) | Reading user input in a browser or Node.js |
| [`09_Chapter_Loops/`](09_Chapter_Loops/) | `for` loops, loop counters, and iteration exercises |
| [`10_JS_Chapter_Loops_While/`](10_JS_Chapter_Loops_While/) | `while` loops, loop counters, and stopping a loop with `break` |
| [`11_JS_Chapter_Loops_Dowhile/`](11_JS_Chapter_Loops_Dowhile/) | `do...while` loops and nested-loop exercises |
| [`12_JS_Chapter_Array/`](12_JS_Chapter_Array/) | Creating, iterating, transforming, sorting, slicing, copying, searching, and swapping array values |
| [`13_Chapter_Functions/`](13_Chapter_Functions/) | Function declarations, parameters, return values, expressions, arrow functions, IIFEs, and spread syntax |
| [`MY_Learning/`](MY_Learning/) | Additional notes and examples on callbacks and Promises |

The identifier exercises include examples of valid and invalid names. Invalid
examples are commented out so the scripts remain runnable.

## Run an example

Install Node.js, then run a script from the repository root:

```sh
node 01_JS_Basics/Hellow_world.js
node 01_JS_Basics/Math.js
node 02_JS_Keywords_Identifier/08_IQ.js
node 03_JS_Literals/14_Literal.js
node 03_JS_Literals/15_Numbers.js
node 03_JS_Literals/16_Numbers_Part2.js
node 03_JS_Literals/17_Special.js
node 03_JS_Literals/18_Undefined.js
node 04_JS_Operators/19_Arch.js
node 04_JS_Operators/20_Assignment_Op.js
node 04_JS_Operators/21_Arthimatic_op.js
node 04_JS_Operators/22_Comparision_op.js
node 04_JS_Operators/23_Logical_Op.Js
node 04_JS_Operators/24_Confusing_Comparision.js
node 04_JS_Operators/27_Strings.js
node 04_JS_Operators/28_Terenary_op.js
node 04_JS_Operators/29_T_ops.js
node 04_JS_Operators/30_31_IQ.js
node 04_JS_Operators/32_33_IQ.js
node 04_JS_Operators/34_Nested_Terenary.js
node 04_JS_Operators/35_36_IQ.js
node 04_JS_Operators/37_Typeof.js
node 05_JS_Increment_Decrement/38_ID_Ops.js
node 05_JS_Increment_Decrement/39_ID.js
node 05_JS_Increment_Decrement/40_IQ.js
node 05_JS_Increment_Decrement/41_42_IQ.js
node 05_JS_Increment_Decrement/43_44_Decrement.js
node 05_JS_Increment_Decrement/45_Nullish.js
node 05_JS_Increment_Decrement/Practise.js
node 06_JS_If_Else_Statement_Condition/46_IF.js
node 06_JS_If_Else_Statement_Condition/47_IF_Else_Nested.js
node 06_JS_If_Else_Statement_Condition/48_To_If_Else.js
node 06_JS_If_Else_Statement_Condition/49_Multiple_If_Yes.js
node 07_JS_Switch/50_Switch.js
node 07_JS_Switch/51_IQ.js
node 07_JS_Switch/52_IQ.js
node 07_JS_Switch/53_API_IQ.js
node 07_JS_Switch/54_Switch_Group.js
node 07_JS_Switch/55_IQ.js
node 07_JS_Switch/56_IQ.js
node 07_JS_Switch/57_IQ.js
node 07_JS_Switch/58_IQ.js
node 08_JS_Chapter_User_Input/60_Node_UI.js
node 09_Chapter_Loops/63_Loop.js
node 09_Chapter_Loops/64_For_Loop.js
node 09_Chapter_Loops/65_For_Loop.js
node 09_Chapter_Loops/66_67_IQ.js
node 09_Chapter_Loops/69_For_Loop.js
node 10_JS_Chapter_Loops_While/70.js
node 10_JS_Chapter_Loops_While/71_IQ.js
node 10_JS_Chapter_Loops_While/72.js
node 10_JS_Chapter_Loops_While/73_Break_IQ.js
node 11_JS_Chapter_Loops_Dowhile/74.js
node 11_JS_Chapter_Loops_Dowhile/75_IQ.js
node 11_JS_Chapter_Loops_Dowhile/76_Nested.js
node 11_JS_Chapter_Loops_Dowhile/77_IQ.js
node 12_JS_Chapter_Array/78_Array.js
node 12_JS_Chapter_Array/79_Array.js
node 12_JS_Chapter_Array/80_Array.js
node 12_JS_Chapter_Array/81_Array.js
node 12_JS_Chapter_Array/82_Create.js
node 12_JS_Chapter_Array/83_Access_Modify.js
node 12_JS_Chapter_Array/84_Adding_Removing.js
node 12_JS_Chapter_Array/85_Array.js
node 12_JS_Chapter_Array/86_Searching.js
node 12_JS_Chapter_Array/87_Find.js
node 12_JS_Chapter_Array/88_Iterate.js
node 12_JS_Chapter_Array/89_Array_Transform.js
node 12_JS_Chapter_Array/90_Array_Sorting.js
node 12_JS_Chapter_Array/91_Array_Sorting.js
node 12_JS_Chapter_Array/92_Array_Normal_Sorting.js
node 12_JS_Chapter_Array/93_Array_Slicing.js
node 12_JS_Chapter_Array/94_Array.concat.js
node 12_JS_Chapter_Array/95_Array.check.js
node 12_JS_Chapter_Array/96_Array_Transform.js
node 12_JS_Chapter_Array/97_Array_Copy.js
node 12_JS_Chapter_Array/98_Array_Destructring.js
node 12_JS_Chapter_Array/99_IQ.js
node 12_JS_Chapter_Array/100_Swap.js
node 13_Chapter_Functions/101_Fn.js
node 13_Chapter_Functions/102_Type1_Fn.js
node 13_Chapter_Functions/103_Type2_Fn.js
node 13_Chapter_Functions/104_Type3_Fn.js
node 13_Chapter_Functions/105_Type4_Fn.js
node 13_Chapter_Functions/106_Template_Literal.js
node 13_Chapter_Functions/107_Fn_Exp.js
node 13_Chapter_Functions/108_Fn_Arrow.js
node 13_Chapter_Functions/109_Arrow.js
node 13_Chapter_Functions/110_Arrow_Multiple.js
node 13_Chapter_Functions/111_Fn.js
node 13_Chapter_Functions/112_Fn_Real.js
node 13_Chapter_Functions/113_Fn_IIFE.js
node 13_Chapter_Functions/114_Spread.js
node 13_Chapter_Functions/115_fn_Return.js
node "13_Chapter_Functions/116_,Return_Fn.js"
node MY_Learning/Test_Callback.js
node MY_Learning/Test_Promise.js
```

`08_JS_Chapter_User_Input/59_UI.js` uses the browser's `prompt()` function and
can be run in a browser console. `60_Node_UI.js` reads from the terminal, while
`61.js` uses the external `prompt-sync` package. Run another `.js` file in a
lesson folder by replacing the path with that script's path. The math example
prints the result of each arithmetic expression to the terminal.
`09_Chapter_Loops/66_67_IQ.js` contains commented-out exercises and produces
no output when run.
The array folder also includes explanations of [lexicographic sorting](12_JS_Chapter_Array/91_lexicographic.md)
and [array slicing](12_JS_Chapter_Array/93_Array_Slicing.md). The slicing
example demonstrates that `slice()` returns a new array without modifying the
original, and supports negative indexes counted from the end.
For more details, see [Promise and callback notes](MY_Learning/Promise_and_Callback.md).