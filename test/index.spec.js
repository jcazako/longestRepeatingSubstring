import { longestRepeatingSubstring } from "../lib/index.js";

const TEST_SAMPLE = [
  {
    Input: "abcd",
    Output: 0,
    Explanation: "There is no repeating substring"
  },
  {
    Input: "abbaba",
    Output: 2,
    Explanation: "The longest repeating substrings are \"ab\" and \"ba\", each of which occurs twice"
  },
  {
    Input: "aabcaabdaab",
    Output: 3,
    Explanation: "The longest repeating substring is \"aab\", which occurs 3 times"
  },
]

describe('', () => {
  TEST_SAMPLE.forEach(({ Input, Output, Explanation }) => {
    it(Explanation, () => {
      expect(longestRepeatingSubstring(Input)).toEqual(Output)
    })
  })
})