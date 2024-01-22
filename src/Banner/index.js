import styles from "./Banner.module.css"
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner () {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
sasasasasssasasasa
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
                />
            </div>
        </div>
    )
}