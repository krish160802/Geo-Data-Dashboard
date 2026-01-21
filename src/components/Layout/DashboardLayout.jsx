import { Box } from '@mui/material'

function DashboardLayout({ left, right }) {
  return (
    <Box display="flex" height="100vh">
      <Box width="50%" p={2} overflow="auto">
        {left}
      </Box>

      <Box width="50%" p={2}>
        {right}
      </Box>
    </Box>
  )
}

export default DashboardLayout
