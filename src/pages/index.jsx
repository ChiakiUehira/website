import styled from 'styled-components'
import Layout from '../components/layout'
const Index = () => {
  return (
    <Layout>
      <Credit>
        <CreditName href="https://twitter.com/ChiakiUehira" target="_blank">@ChiakiUehira</CreditName>
        <CreditDescription>
          He was born in 1996. Head of PIXELGRAM, a limited liability company. I am a web programmer and developer We specialize in production, including analysis and improvement. Please don't hesitate to ask for work 👋
        </CreditDescription>
        <div>Twitter / GitHub / Instagram</div>
      </Credit>
    </Layout>
  )
}


const Credit = styled.div`
  margin: 246px 0 32px;
`

const CreditName = styled.a`
  display: inline-block;
  font-size: 64px;
  font-weight: bold;
  text-decoration: none;
  color: #000;
  margin-bottom: 24px;
  //&:hover {
  //  color: #fff;
  //  background-color: #1da1f2;
  //}
  @media (max-width: 768px) {
    font-size: 40px;
  }
`

const CreditDescription = styled.p`
  max-width: 800px;
  font-size: 24px;
  color: #484848;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export default Index
