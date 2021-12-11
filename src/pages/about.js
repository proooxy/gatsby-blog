import React from "react";

import Layout from "../components/Layout"
import Seo from "../components/seo"
import * as S from "../components/Post/styled"
import SocialLinks from '../components/SocialLinks';



const AboutPage = () => (



    <Layout>
        <Seo title='Quem sou?' />
        <S.PostHeader>
            <S.PostTitle>
                Quem sou?
            </S.PostTitle>
        </S.PostHeader>
        <S.MainContent>
            <p>Meu nome é Francisco Henrique, tenho 22 anos, fui aprovado em um concurso aos 18 anos, atualmente sou policial militar, mas divido essa paixão com o amor pela tecnologia, estudo React, Styled Components, JavaScript, TypeScript, Next, Node e outras tecnologias, busco e estudo para ser um desenvolvedor full stack, estudo programação a menos de 1 ano. Já que me conhece melhor, quer seja feedback, ou propostas profissionais/colaborativas, fala comigo  👋 </p>
        </S.MainContent>
        <S.PostHeader>
            <SocialLinks />
        </S.PostHeader>

    </Layout>
)


export default AboutPage;