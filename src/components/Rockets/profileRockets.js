import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import { removeRocketReservation } from '../../redux/rockets/rockets';

const ProfileRocket = (props) => {
  const dispatch = useDispatch();
  const { id, name, wikipedia } = props;

  const handleCancelReservation = () => {
    dispatch(removeRocketReservation(id));
  };

  return (
    <tr>
      <th>{name}</th>
      <td><a href={wikipedia}>Read more</a></td>
      <td><Button type="button" variant="danger" onClick={handleCancelReservation}>Cancel Reservation</Button></td>
    </tr>
  );
};

ProfileRocket.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  wikipedia: PropTypes.string.isRequired,
};

export default ProfileRocket;
