import styled from 'styled-components'
import loginBg from '@/assets/images/login-bg.jpg'

const LoginWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${loginBg});
  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 560px;
    padding: 80px 0px 100px;
    border-radius: 40px;
    backdrop-filter: blur(20px);
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1)
    );
    background-origin: border-box;
    background-clip: padding-box, border-box;
    box-shadow: 20px 20px 22px rgba(0, 0, 0, 0.2);

    &-wrapper {
      width: 350px;
      margin: 0 auto;

      &-title {
        font-weight: 700;
        font-size: 28px;
        text-align: center;
        margin-bottom: 24px;
      }

      .ant-input-group-addon {
        background-color: #fff;
      }
    }
  }
`

export default LoginWrapper
