import Image from 'next/image'
import styles from './page.module.css'
import GridContainer from './GridContainer'
import PlayerContainer from './PlayerContainer'

export default function Home() {
  return (
      <div>
        <GridContainer/>
        <PlayerContainer/>
      </div>
  )
}
