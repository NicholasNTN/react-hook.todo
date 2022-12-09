// lay data sai lai nhieu lan
// async race conditions -> duwx lieeuj fetch den truoc den sau

import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

const useFetch = (url, isCovidData) => {
    const [data, setData] = useState([]);
    const [isLoadding, setLoadding] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        // caccle request
        const ourReques = axios.CancelToken.source();

        async function fetchMyAPI() {
            try {
                // cos request, fetch, axios -> cos 3 cach de lay duong link qua server
                let res = await axios.get(url, {
                    cancelToken: ourReques.token,
                });
                let data = res && res.data ? res.data : [];

                if (data && data.length > 0 && isCovidData === true) {
                    // nếu là covidata thì mới chạy
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        return item;
                    });
                    data = data.reverse();
                    // đảo ngược mảng
                }

                console.log("Check data", data);
                setData(data);
                setLoadding(true);
                setIsError(false);
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log("Reques cancel:", err.message)
                } else {
                    setIsError(true);
                    setLoadding(false);
                }
                console.log(">>>Check error:", err)
            }
        }
        setTimeout(() => {
            fetchMyAPI();
        }, 3000);
        // fetchMyAPI();

        return () => {
            ourReques.cancel('Operation cancled by the user')
        }

    }, [url, isCovidData]);
    // [url]: 1 khi data truyền vào bị tđ nó sẽ repest lại data.
    // truyền vào để chạy đc nhiều lần, []: chỉ chạy 1 lần sau khi render

    return {
        data, isLoadding, isError
    };
}
export default useFetch;