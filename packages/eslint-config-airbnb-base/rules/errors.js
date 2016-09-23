module.exports = {
  rules: {
    // require trailing commas in multiline object literals
    'comma-dangle': ['off', 'always-multiline'],

    // disallow assignment in conditional expressions
    'no-cond-assign': ['off', 'always'],

    // disallow use of console
    'no-console': 'off',

    // disallow use of constant expressions in conditions
    'no-constant-condition': 'off',

    // disallow control characters in regular expressions
    'no-control-regex': 'off',

    // disallow use of debugger
    'no-debugger': 'off',

    // disallow duplicate arguments in functions
    'no-dupe-args': 'off',

    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 'off',

    // disallow a duplicate case label.
    'no-duplicate-case': 'off',

    // disallow empty statements
    'no-empty': 'off',

    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'off',

    // disallow assigning to the exception in a catch block
    'no-ex-assign': 'off',

    // disallow double-negation boolean casts in a boolean context
    // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'off',

    // disallow unnecessary parentheses
    // http://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
    }],

    // disallow unnecessary semicolons
    'no-extra-semi': 'off',

    // disallow overwriting functions written as function declarations
    'no-func-assign': 'off',

    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 'off',

    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'off',

    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'off',

    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'off',

    // disallow use of Object.prototypes builtins directly
    // http://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',

    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'off',

    // disallow sparse arrays
    'no-sparse-arrays': 'off',

    // Disallow template literal placeholder syntax in regular strings
    // http://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'off',

    // Avoid code that looks like two expressions but is actually one
    // http://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'off',

    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'off',

    // disallow return/throw/break/continue inside finally blocks
    // http://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'off',

    // disallow negating the left operand of relational operators
    // http://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'off',
    // disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    'no-negated-in-lhs': 'off',

    // disallow comparisons with the value NaN
    'use-isnan': 'off',

    // ensure JSDoc comments are valid
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // ensure that the results of typeof are compared against a valid string
    // http://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['off', { requireStringLiterals: true }],
  }
};
