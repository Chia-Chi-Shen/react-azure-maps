import React from 'react'
import AzureMap from '../components/AzureMap/AzureMap'
import { AzureMapsProvider } from '../contexts/AzureMapContext'
import { IAzureMapOptions } from '../types'
import { AuthenticationType } from '../types'

// const option: IAzureMapOptions = {
//   authOptions: {
//     authType: AuthenticationType.subscriptionKey,
//     subscriptionKey: process.env.react_app_subscription_key // Your subscription key
//   }
// }

const DefaultMap = () => {
  return <div style={{ width: '200px', height: '100px', backgroundColor: 'red' }}>Hello</div>
}

export default DefaultMap

/*
<AzureMapsProvider>
      <div style={{ height: '300px' }}>
        <AzureMap options={option} />
      </div>
    </AzureMapsProvider>
    */
