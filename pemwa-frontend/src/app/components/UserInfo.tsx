import { Box, Button } from "@material-ui/core"
import { AxiosError } from "axios"
import { useContext } from "react"
import { logout } from "../services/apiService"
import { authContext } from "./AuthContext"

function UserInfo() {
  const { user, onSignOut } = useContext(authContext)


  function handleSignOut() {
    async function signOut() {
      try {
        await logout()
        onSignOut()

      } catch (err: unknown) {
        const typedError = err as AxiosError
        throw new Error(typedError.message)
      }
    }
    signOut()
  }

  return (
    <Box 
      margin="50px" 
      flex="1" 
      display="flex"
      justifyContent="space-between">
      <Box fontSize="40px">Expenses</Box>
      <Box>
        <Box component="span" m="10px">Olá {user.name}</Box>
        <Box component="span">
          <Button color="primary" variant="outlined" onClick={handleSignOut}>Logout</Button>
        </Box>
      </Box>
    </Box>
  )
}

export { UserInfo }