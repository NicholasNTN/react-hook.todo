import CountDown from '../views/count.down';
import Loader from './loader';

const CovidInfo = (props) => {

    const { isError, isLoadding, dataCovid } = props;

    return (
        <tbody>
            {
                isError === false && isLoadding === true && dataCovid && dataCovid.length > 0 &&
                dataCovid.map(item => {
                    return (
                        <tr key={item.ID}>
                            <td>{item.Date}</td>
                            <td>{item.Active}</td>
                            <td>{item.Confirmed}</td>
                            <td>{item.Deaths}</td>
                            <td>{item.Country}</td>
                        </tr>
                    );
                })
            }

            {
                isLoadding === false
                && <tr><td colSpan='5' style={{ 'textAlign': 'center' }}><CountDown/></td></tr>
            }

            {
                isError === true
                && <Loader />
            }
        </tbody>
    );
}

export default CovidInfo;