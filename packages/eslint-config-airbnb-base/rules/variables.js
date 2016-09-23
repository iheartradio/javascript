module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    'init-declarations': 'off',

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'off',

    // disallow deletion of variables
    'no-delete-var': 'off',

    // disallow labels that share a name with a variable
    // http://eslint.org/docs/rules/no-label-var
    'no-label-var': 'off',

    // disallow specific globals
    'no-restricted-globals': 'off',

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'off',

    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'off',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'off',

    // disallow use of undefined when initializing variables
    'no-undef-init': 'off',

    // disallow use of undefined variable
    // http://eslint.org/docs/rules/no-undefined
    // TODO: enable?
    'no-undefined': 'off',

    // disallow declaration of variables that are not used in the code
    // styles is ignored to avoid collisions in css modules when passing props to children via spreads
    'no-unused-vars': ['error', { vars: 'local', args: 'after-used', varsIgnorePattern: '^styles$' }],

    // disallow use of variables before they are defined
    'no-use-before-define': 'off'
  }
};
