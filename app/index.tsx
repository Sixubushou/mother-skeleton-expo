import React from 'react'
import { Redirect } from 'expo-router'

export default function Index() {
  // Development entry: redirect root to onboarding welcome
  return <Redirect href="/onboarding/welcome" />
}
