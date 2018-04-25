export default `const Hat = (props) => (
  <span style={{color: props.color}}>
    My hat is {props.color}!
  </span>
);

const redHat = <Hat color="red" />;





Hat.defaultProps = {
  color: 'white'
};





import PropTypes from 'prop-types';
Hat.propTypes = {
  color: propTypes.oneOf(['Red', 'White', 'Black'])
};

`;
