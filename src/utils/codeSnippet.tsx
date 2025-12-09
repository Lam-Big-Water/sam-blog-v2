import React from 'react'
import { Code } from 'bright'
import theme from './theme'

const CodeSnippet = (props: React.ComponentProps<typeof Code>) => {
  return (
    <Code 
    {...props}
    theme={theme}
    />
  )
}

export default CodeSnippet