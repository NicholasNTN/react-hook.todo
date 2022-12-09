import moment from 'moment/moment';
import '../style/covid-info.style.scss';
import useFetch from '../customize/fetch.data';
    import CountDown from '../views/count.down';
import Navbar from '../views/navbar';
import CovidInfo from '../views/covid.info';

const Covid = () => {

    // const [dataCovid, setDataCovid] = useState([]);
    // const [isLoadding, setLoadding] = useState(true);
    // const [isError, setIsError] = useState(false);

    // useEffect(() => {
    //     try {
    //         async function fetchMyAPI() {
    //             // cos request, fetch, axios -> cos 3 cach de lay duong link qua server
    //             let res = await axios.get(`https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z`);
    //             let data = res && res.data ? res.data : [];

    //             if (data && data.length > 0) {
    //                 data.map(item => {
    //                     item.Date = moment(item.Date).format('DD/MM/YYYY');
    //                     return item;
    //                 })
    //             }

    //             console.log("Check data", data);
    //             setDataCovid(data);
    //             setLoadding(true);
    //             setIsError(false);
    //         }
    //         fetchMyAPI();

    //     } catch (e) {
    //         setIsError(true);
    //         setLoadding(false);
    //         // alert("ERROR!", e.message);
    //     }
    // }, []);

    const today = moment().startOf('day');
    // const today = new Date(new Date().setHours(0, 0, 0, 0));
    const priorDate = today.subtract(100, 'days');

    // data: dataCovid, hoac la 
    // let dataCovid = useFetch(url).data;
    const { data: dataCovid, isLoadding, isError }
        // = useFetch(`https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z`);
        = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`, true); // isCovidData === true neu = true thi chạy
    // lay 100 ngay gan nhat

    return (
        <>
            <Navbar />
            <div className='covid-container'>
                <h1>Fetch data - useEffect</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Active</th>
                            <th>Confirmed</th>
                            <th>Deaths</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <CovidInfo
                        isError={isError}
                        isLoadding={isLoadding}
                        dataCovid={dataCovid}
                    />
                </table>
            </div>
        </>
    );
}
export default Covid;