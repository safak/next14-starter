import Image from "next/image"
import styles from "./loading.module.css"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const loading = () => {
  return (
    <div className={styles.loading}>
      {/* <Image src="/loading.gif" width={100} height={100}></Image> */}
      <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    </div>
  )
}

export default loading