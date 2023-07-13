import React from "react";
import { useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";

// Main(props) 로 접근 가능하지만 구조분해할당 사용하여 {user, address} 형태로 분해
function Main2({user, address, userData}) {
    // 넘겨준 params를 구조분해할당으로 분해하여 id param만 사용 선언
    const {id} = useParams();
    console.log(id);
    // url이 가진 pathname 자체를 사용하고 싶을때는 useLocation 사용
    const location = useLocation();
    console.log(location);

    return (
    <>
        <div>Main2, {user} / {address}</div>
         <div>{userData.age} / {userData.blood}</div>
         {id}
    </>
    )
}

export default Main2;

// isRequired가 아닌 props의 경우 default value 설정 필요
Main2.defaultProps = {
    user : '',
    userData : {
        age:20,
        blood:'O'
    }
}

// 내려오는 props들의 자료형 선언 필요(ESLint)
Main2.propTypes = {
    user:PropTypes.string,
    address : PropTypes.string.isRequired,
    // 객체형 데이터 타입체크
    userData : PropTypes.shape({
        age:PropTypes.number,
        blood : PropTypes.string
    })
};