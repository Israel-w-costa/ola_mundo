import styles from "./Banner.module.css"
import circuloColorido from 'assets/circulo_colorido.png'
import fotoIsrael from 'assets/foto_israel.png'

export default function Banner () {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas eu meu espaço pessoal. Eu sou Israel Costa. Estudande de Front-end pela Alura. Aqui compartilho varios conhecimentos. espero que aprenda algo novo :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img
                className={styles.minhaFoto}
                src={fotoIsrael}
                alt="foto de perfil"
                />
            </div>
        </div>
    )
}