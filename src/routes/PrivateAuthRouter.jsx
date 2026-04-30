import { Navigate } from 'react-router-dom'

export const PrivateAuthRouter = ({ roles, Component, fallbackPath }) => {
  const role = 'GUEST'

  const allowedRole = roles.includes(role)

  if (!allowedRole) return <Navigate to={fallbackPath} replace />

  return Component
}
