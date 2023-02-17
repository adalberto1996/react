import './App.css'
import { TwitterFollowCard} from './TwitterFollowCard'

export function App(){
    return(
        <section className='App'>
            <TwitterFollowCard  isFollowing userName="midudev" initialIsFollowing={true}>
                Adalberto Pedroza
            </TwitterFollowCard>
            <TwitterFollowCard  userName="midudev" >
                Miguel Duran
            </TwitterFollowCard>
            
        </section>
        
    )
}
 