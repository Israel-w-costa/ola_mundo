import styles from "./SobreMim.module.css"

import PostModelo from "Componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoPerfil from "assets/foto_perfil.png";

export default function SobreMin() {
    return (
        <PostModelo
         fotoCapa={fotoCapa} 
         titulo='Sobre Mim'
         >

            <h3 className={styles.subtitulo}>
                Olá, eu sou Israel!
            </h3>

            <img
                src={fotoPerfil}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim} />

            <p className={styles.paragrafo}>
                Olá sou Israel Costa, tenho 22 anos, moro em Toledo Paraná, mas sou de Belém do Pará.
            </p>

            <p className={styles.paragrafo}>
                Aos 19 anos prestei um serviço vorlutário pela igreja que faço parte, em Recife por dois anos. Lá conheci varios pessoas 
                que trabalham com programação, no caso duas delas me recomendaram a pesquisar sobre áerea, e uma busca simples eu decidi entrar 
                nesse mundo da tecnologia.
                
            </p>

            <p className={styles.paragrafo}>
                Já Faz quase um ano que rodei meus primeiro códigos, em uma  imersão de Front-end da Alura. Desde então
                tenho estudando na instituição e me aprimorando nas tecnologias: React, JavaScript, Html, Css.
            </p>

            <p className={styles.paragrafo}>
                Busco ser um densevolvedor Web na aéra de Front-end com foco em React, Next, Typescript 
            </p>
        </PostModelo>
    )
};
