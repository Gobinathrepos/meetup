import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

export default function SignedOutMenu({setAuthentication}) {
  return (
    <Menu.Item position='right'>
      <Button
       onClick={() => setAuthentication(true)}
       basic inverted content='Login' />
      <Button basic inverteed content='Register' style={{marginLeft: '0.5em'}} />
    </Menu.Item>
  )
}
