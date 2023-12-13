import Image from 'next/image'
import React from 'react'

import { Container } from '~/components/container'
import about from '~/public/static/About.png'
import GPW from '~/public/static/GPW.png'
import hero from '~/public/static/hero-2.png'
const HomePage = () => {
  return (
    <>
      <Container>
        <Image src={hero} alt="hero" objectFit="cover" quality={100} />
      </Container>
      <Container className="section">
        <Image src={about} alt="about" objectFit="cover" quality={100} />
        <Container>
          <h1 className="director-font">About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Penatibus amet urna ac nisl.
            Vitae egestas egestas convallis magna imperdiet. Amet amet at
            pellentesque eget cras pharetra fames. Amet risus volutpat
            vestibulum non in. Vitae ipsum felis arcu quisque adipiscing aliquam
            sodales eget ut. Tellus id elementum maecenas quis. Ultrices est
            feugiat varius venenatis purus amet integer placerat. Gravida dui id
            ultricies gravida ullamcorper cursus odio mi varius. Sed sagittis
            maecenas ullamcorper amet nibh amet. Facilisi odio ullamcorper in
            nam. Adipiscing nunc non volutpat auctor. Nam iaculis pellentesque
            fermentum tellus commodo. Amet varius feugiat sit adipiscing lectus
            in ipsum auctor quam. Suspendisse ante velit volutpat lorem
            condimentum ac quisque proin ullamcorper. Lorem ipsum dolor sit amet
            consectetur. Penatibus amet urna ac nisl. Vitae egestas egestas
            convallis magna imperdiet. Amet amet at pellentesque eget cras
            pharetra fames. Amet risus volutpat vestibulum non in. Vitae ipsum
            felis arcu quisque adipiscing aliquam sodales eget ut. Tellus id
            elementum maecenas quis. Ultrices est feugiat varius venenatis purus
            amet integer placerat. Gravida dui id ultricies gravida ullamcorper
            cursus odio mi varius. Sed sagittis maecenas ullamcorper amet nibh
            amet. Facilisi odio ullamcorper in nam. Adipiscing nunc non volutpat
            auctor. Nam iaculis pellentesque fermentum tellus commodo. Amet
            varius feugiat sit adipiscing lectus in ipsum auctor quam.
            Suspendisse ante velit volutpat lorem condimentum ac quisque proin
            ullamcorper.
          </p>
        </Container>
      </Container>
      <Container className="section center">
        <Container className="center-item">
          <div className="title">
            <h1>GPW</h1>
            <h3>(Gas Pressure Welding)</h3>
          </div>
          <div className="gpw-image">
            <Image src={GPW} alt="GPW" quality={100} />
          </div>
          <p>
            Welcome to the cutting-edge world of welding technology with Deora
            BuildCon, where innovation meets precision. Gas pressure welding
            stands at the forefront of our commitment to excellence in the
            construction industry. This advanced welding technique utilizes the
            power of gases to create strong and durable bonds between materials,
            ensuring the structural integrity of your projects. At Deora
            BuildCon, we leverage the latest advancements in gas pressure
            welding to provide you with a seamless and efficient construction
            experience. Our dedication to quality and precision is reflected in
            every weld, as we strive to exceed industry standards and deliver
            solutions that withstand the test of time. Join us on a journey of
            unmatched craftsmanship and reliability with Deora BuildCon's gas
            pressure welding technology, where strength meets innovation, and
            your projects stand the test of durability.
          </p>
          <Container className="comparison">
            <h2>Comparison</h2>
            <Container className="comparison-section"></Container>
          </Container>
        </Container>
      </Container>
      <Container className="section center">
        <Container className="center-item">
          <p>
            Unlock the potential of cutting-edge welding technology with Deora
            BuildCon's Gas Pressure Welding. Our advanced technique delivers
            superior results across various technical parameters, ensuring
            precision, efficiency, and durability in construction projects. From
            high-precision welds to reduced distortion and compatibility with
            automation systems, our gas pressure welding stands at the forefront
            of innovation. Explore the technical excellence that sets Deora
            BuildCon apart, where every weld is a testament to our commitment to
            superior construction solutions.
          </p>
        </Container>
      </Container>
      <Container className="section center">
        <Container className="center-item">
          <p>
            Elevate your construction projects with Deora BuildCon's Gas
            Pressure Welding technology. Our state-of-the-art welding solution
            is designed to deliver exceptional results across diverse
            applications. Benefit from high precision, increased efficiency, and
            unparalleled durability in your welds. Whether you're working with a
            variety of materials or seeking reduced distortion in your
            components, our gas pressure welding technology has you covered.
            Discover the technical excellence of Deora BuildCon's Gas Pressure
            Welding—where innovation meets reliability in every weld. Elevate
            your construction standards with a welding solution that goes beyond
            expectations.
          </p>
        </Container>
      </Container>
      <Container className="section center">
        <Container className="center-item">
          <div className="title">
            <h1>Catalog</h1>
          </div>
          <p>
            Browse through our catalog to discover how Deora BuildCon's
            solutions can transform your construction endeavours. Elevate your
            standards, enhance efficiency, and build with confidence.
            <br />
            <br />
            <u style={{ cursor: 'pointer' }}>Take a Look.</u>
          </p>
        </Container>
      </Container>
      <Container className="section center invert">
        <Container className="center-item">
          <div className="title">
            <h1>Contact</h1>
          </div>
          <h2>contact@deorabuildcon.in</h2>
        </Container>
      </Container>
    </>
  )
}

export default HomePage
