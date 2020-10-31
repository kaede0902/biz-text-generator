import styles from './layout.module.css'

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

export default function layout ({children}) {
  return (
      <div className={styles.container}>
          <Container>
              <Paper>
                  {children}
              </Paper>
          </Container>
      </div>
  )
}