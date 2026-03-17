import '../assets/styles/Inicio.css'
import { InicioHeader } from "../components/InicioHeader"
import { InicioBody } from '../components/InicioBody'

export const Inicio = () => {
    return (
        <>
            <header className="header">
                <InicioHeader />
            </header>
            <main className='main'>
                <InicioBody />
            </main>
            
        </>
    )
}