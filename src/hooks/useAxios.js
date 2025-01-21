import { useRef, useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // 환경 변수에서 API 베이스 URL 가져오기
// useAxios 매개변수
// endpoint: 필수 인자 / API 요청을 보낼 엔드포인트(주소)를 지정하는 값
// method: 선택 인자, 기본값: "GET" / HTTP 요청의 메서드를 지정
// options: 선택 인자, 기본값: {} / axios 요청에 필요한 추가적인 옵션을 전달 / 이 객체에는 헤더(headers), 쿼리 파라미터(params), 타임아웃(timeout) 등 다양한 설정이 포함될 수 있음
// withAuth: 선택 인자, 기본값: true / 인증 토큰(JWT)을 Authorization 헤더에 포함할지 여부를 결정하는 불리언 값
// executeOnMount: 선택 인자, 기본값: true / 컴포넌트가 마운트될 때 API 요청을 자동으로 실행할지 여부를 결정하는 불리언 값

const useAxios = (
  endpoint,
  method = "GET",
  options = {},
  withAuth = true,
  executeOnMount = true,
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

  const token = localStorage.getItem("token"); // JWT 토큰을 로컬 스토리지에서 가져오기
  const isDataFetched = useRef(false); // 중복 요청을 방지하기 위한 변수

  const url = `${API_BASE_URL}${endpoint}`;

  const fetchData = async (body = null) => {
    setLoading(true);
    setError(null);
    setStatusCode(null);

    try {
      const response = await axios({
        url,
        method,
        ...options,
        data: body,
        headers: {
          "Content-Type": "application/json", // 기본 Content-Type 설정
          ...options.headers, // 사용자 정의 헤더 병합
          ...(withAuth && token ? { Authorization: `Bearer ${token}` } : {}), // JWT 토큰이 있으면 Authorization 헤더에 추가
        },
      });
      setData(response.data);
      setStatusCode(response.status);
    } catch (err) {
      if (err.response) {
        setError(err.response.data);
        setStatusCode(err.response.status);
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isDataFetched.current) return;

    if (executeOnMount) {
      fetchData(); // 컴포넌트가 마운트될 때 자동으로 API 호출
      isDataFetched.current = true;
    }
  }, [executeOnMount]);

  return { data, loading, error, statusCode, fetchData };
};

export default useAxios;
