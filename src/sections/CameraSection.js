import gsap from 'gsap';
import React from 'react';
import { useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import v1 from '../assets/video/Scuba Diving - 699.mp4';
import v2 from '../assets/video/Skate - 49791.mp4';

const Section = styled.section`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    z-index: 1;
    background-color: var(--white);
    overflow: hidden;
`;

const V1 = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
    z-index: 2;
`;

const V2 = styled.video`
    position: absolute;
    top: 0;
    right: 40%;
    width: 60%;
    height: auto;
    z-index: 1;
`;

const TitleContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;

    &>*:nth-child(2) {
        margin-left: 6rem;
    }
    &>*:nth-child(3) {
        margin-left: 12rem;
    }
`;

const Title = styled.h2`
    font-size: var(--fontBig);
    z-index: 5;
    text-transform: capitalize;
`;



const CameraSection = () => {

    const sectionRef = useRef(null);
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const titleRef = useRef(null);

    let elements = gsap.utils.selector(titleRef);

    useLayoutEffect(() => {

        const Elem = sectionRef.current;
        const video1Elem = videoRef1.current;
        const video2Elem = videoRef2.current;


        //pin the section
        gsap.to(Elem, {
            scrollTrigger:{
                trigger: Elem,
                start: "top top",
                end: `bottom+=500 bottom`,
                scrub: true,
                pin: true,
                pinSpacing: true
            }
        });

        let t2 = gsap.timeline({
            scrollTrigger:{
                trigger: Elem,
                start: "top top",
                end: `bottom+=500 bottom`,
                scrub: true
            }
        }).to(video1Elem, {scale: 0.3}, "key1").to(video2Elem, {scale: 0.6}, "key1")

        elements("h2").forEach(el => {
            t2.fromTo(
                    el,
                    {
                        scrollTrigger:{
                            trigger: el,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: true
                        },
                        x: 100,
                        opacity: 0
                    },
                    {
                        x: 0,
                        opacity: 1
                    } 
                )
        });
    


        return () => {
        
        };
    }, [])

    return (
        <Section ref={sectionRef}>
            <V1 ref={videoRef1} src={v1} type="video/mp4" autoPlay muted loop />
            <V2 ref={videoRef2} src={v2} type="video/mp4" autoPlay muted loop />
            <TitleContainer ref={titleRef}>
                <Title>Ready.</Title>
                <Title>Steady.</Title>
                <Title>Action.</Title>
            </TitleContainer>
        </Section>
    )
};

export default CameraSection;