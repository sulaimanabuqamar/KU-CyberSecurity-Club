import { useContext } from 'react'
import AppContentContext from '../context/appContentContext'

export default function useContent() {
  const context = useContext(AppContentContext)
  if (!context) {
    throw new Error('useContent must be used within ContentProvider')
  }
  return context
}
