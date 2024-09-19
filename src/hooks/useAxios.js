import { useRef, useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url, method = "GET", options = {}, withAuth = true, executeOnMount = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

  const token = localStorage.getItem("token"); // JWT 토큰을 로컬 스토리지에서 가져오기
  const isDataFetched = useRef(false); // 중복 요청을 방지하기 위한 변수

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
          ...options.headers, // 기존 헤더가 있을 경우 병합
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
