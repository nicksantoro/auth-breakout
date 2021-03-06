const jwt = require('jsonwebtoken')
const isEmpty = require('./LangUtils')
const env = require('../../env')

const authenticate = token => {
  try {
    // if token is empty return { error: 'JWT required', status: 401 }

    // verify token with jwt.verify and token secret from env

    // if token is expired return { error: 'JWT expired', status: 401 }

    return true
  } catch (error) {
    console.error(error) // eslint-disable-line no-console

    return { error: 'unknown error', status: 500 }
  }
}

module.exports = authenticate
