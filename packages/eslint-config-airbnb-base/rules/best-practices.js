module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    'accessor-pairs': 'off',

    // enforces return statements in callbacks of array's methods
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'off',

    // treat var statements as if they were block scoped
    'block-scoped-var': 'off',

    // specify the maximum cyclomatic complexity allowed in a program
    complexity: ['off', 11],

    // enforce that class methods use "this"
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'off',

    // require return statements to either always or never specify values
    'consistent-return': 'off',

    // specify curly brace conventions for all control statements
    curly: ['off', 'multi-line'],

    // require default case in switch statements
    'default-case': ['off', { commentPattern: '^no default$' }],

    // encourages use of dot notation whenever possible
    'dot-notation': ['off', { allowKeywords: true }],

    // enforces consistent newlines before or after dots
    // http://eslint.org/docs/rules/dot-location
    'dot-location': ['off', 'property'],

    // require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['off', 'allow-null'],

    // make sure for-in loops have an if statement
    'guard-for-in': 'off',

    // disallow the use of alert, confirm, and prompt
    'no-alert': 'off',

    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'off',

    // disallow lexical declarations in case/default clauses
    // http://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 'off',

    // disallow division operators explicitly at beginning of regular expression
    // http://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // disallow else after a return in an if
    'no-else-return': 'off',

    // disallow empty functions, except for standalone funcs/arrows
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': ['off', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'off',

    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 'off',

    // disallow use of eval()
    'no-eval': 'off',

    // disallow adding to native types
    'no-extend-native': 'off',

    // disallow unnecessary function binding
    'no-extra-bind': 'off',

    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'off',

    // disallow fallthrough of case statements
    'no-fallthrough': 'off',

    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'off',

    // disallow reassignments of native objects or read-only globals
    // http://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['off', { exceptions: [] }],
    // deprecated in favor of no-global-assign
    'no-native-reassign': 'off',

    // disallow implicit type conversions
    // http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // disallow use of eval()-like methods
    'no-implied-eval': 'off',

    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',

    // disallow usage of __iterator__ property
    'no-iterator': 'off',

    // disallow use of labels for anything other then loops and switches
    'no-labels': ['off', { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    'no-lone-blocks': 'off',

    // disallow creation of functions within loops
    'no-loop-func': 'off',

    // disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // disallow use of multiple spaces
    'no-multi-spaces': 'off',

    // disallow use of multiline strings
    'no-multi-str': 'off',

    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 'off',

    // disallow use of new operator for Function object
    'no-new-func': 'off',

    // disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 'off',

    // disallow use of (old style) octal literals
    'no-octal': 'off',

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 'off',

    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': ['off', { props: true }],

    // disallow usage of __proto__ property
    'no-proto': 'off',

    // disallow declaring the same variable more then once
    'no-redeclare': 'off',

    // disallow certain object properties
    // http://eslint.org/docs/rules/no-restricted-properties
    // TODO: enable, semver-major
    'no-restricted-properties': ['off', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated,'
    }],

    // disallow use of assignment in return statement
    'no-return-assign': 'off',

    // disallow use of `javascript:` urls.
    'no-script-url': 'off',

    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'off',

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'off',

    // disallow use of comma operator
    'no-sequences': 'off',

    // restrict what can be thrown as an exception
    'no-throw-literal': 'off',

    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // disallow usage of expressions in statement position
    'no-unused-expressions': ['off', {
      allowShortCircuit: false,
      allowTernary: false,
    }],

    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'off',

    // disallow unnecessary .call() and .apply()
    'no-useless-call': 'off',

    // disallow useless string concatenation
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'off',

    // disallow unnecessary string escaping
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'off',

    // disallow use of void operator
    // http://eslint.org/docs/rules/no-void
    'no-void': 'off',

    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    // disallow use of the with statement
    'no-with': 'off',

    // require use of the second argument for parseInt()
    radix: 'off',

    // requires to declare all vars on top of their containing scope
    'vars-on-top': 'off',

    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': ['off', 'outside'],

    // require or disallow Yoda conditions
    yoda: 'off'
  }
};
