import styled from 'styled-components';


const Newinput = styled.input`
  border:0;
  background: #F6F6F6;
  border-radius: 12px;
  width: 408px;
  height: 62px;
  margin:20px;
  text-indent: 15px;
`


const Newform = styled.form`
  width: 504px;
  // min-height: 50vh;
  background: #FFFFFF;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  padding:30px;
  margin-top: 30px;
  margin-bottom: 30px;
`

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  // height:100vh;

  justify-content: center;
  align-items:center;
`
const Labelbox = styled.div`
  display: flex;
  flex-direction: column;
  // margin: 30px
`

const Label = styled.label`
  margin: 0 20px 0;
  font-weight:700;
  font-size:large;
  :after {
    content: '* ';
    color: red;
}
`

const Head = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 150%;
`

const Head2 = styled.h2`
  font-weight: 400;
  font-size: 20px;
  color: #94959B;
  line-height: 150%;
`

const Logoimg = styled.img`
  width: 56px;
  height:56px;
  margin: 10px;
  margin-left: 5rem;
`
const Navbar = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: #4D7393;

`

const Atag = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */
  text-align: center;
  color: #183B56;
  margin: 0 2rem 0;
`
const Bluetag = styled.a`
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: ##3865F3;
`

const Span = styled.span`
  float: right;
  right: 10%;
  top: 1rem;
  position:relative;
`



export {Newinput, Newform, Flexbox, Labelbox, Label, Head, Head2, Logoimg, Navbar, Atag, Bluetag, Span};