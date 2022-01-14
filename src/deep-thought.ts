/* eslint-disable no-restricted-globals */
self.onmessage = ({ data: { question } }) => {
  self.postMessage({
    answer: 42,
  })
}

export {}
