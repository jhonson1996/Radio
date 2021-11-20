import React from "react"
import { View } from 'react-native'
import { Player } from "../Components"

export const withPlayer = (Component: any) => {
  return (
    <>
      <View style={{ flex: 9 }}>
        <Component />
      </View>
      <View style={{ flex: 1.0, backgroundColor: 'transparent' }}>
        <Player />
      </View>
    </>
  )
}

export default withPlayer;
